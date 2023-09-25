import React, {useEffect, useState} from 'react';
import {InferProps} from 'prop-types';
import Header from "../../components/header/Header";
import Spacer from "../../components/spacer/Spacer";
import Post from "../../components/preview/Preview";
import Footer from "../../components/footer/Footer";
import IEvent from "../../models/eventItem";
import EventService from "../../services/EventService";
import {sortEventsDesc} from "../../utils/helpers/sorters";
import {EventInfo, EventSoort} from "../../utils/CONSTANTS";


EventOverview.propTypes = {
    type: EventSoort,
};

function EventOverview({type}: InferProps<typeof EventOverview.propTypes>) {
    const [events, setEvents] = useState<Array<IEvent>>([])
    const sorted: IEvent[] = sortEventsDesc(events);
    const [pageInfo, setPageInfo] = useState({
        beschrijving: [""],
        titel: ""
    })

    let count: number = 0;

    useEffect(() => {
        EventService.getByQuery(type)
            .then(res => setEvents(res))
            .catch(e => console.error(e))
            .finally(() => getPageInfo(type))
    }, []);

    function getPageInfo(type: EventSoort): void {
        console.log(type)
        switch(type) {
            case EventSoort.Clubtocht:
                setPageInfo(EventInfo.clubtochten)
                break;
            case EventSoort.Expositie:
                setPageInfo(EventInfo.exposities)
                break;
            case EventSoort.DeBesteClub:
                setPageInfo(EventInfo.debesteclub)
                break;
            case EventSoort.Bondsfotowedstrijd:
                setPageInfo(EventInfo.bondsfotowedstrijd)
                break;
        }
    }


    return (
        <div id={"eventOverview-container"}>
            <Header/>
            <main>
                <section id="event-info">
                    <h1>{pageInfo.titel}</h1>
                    {pageInfo.beschrijving.map((line => <p>{line}</p>))}
                </section>
                <Spacer/>
                <section className="overview-container">
                    {sorted.map((event: IEvent) => {
                        count++;

                        if(count === sorted.length){
                            return(
                                <>
                                    <Post
                                        title={event.title}
                                        img={event.hero}
                                        beschrijving={event.beschrijving}
                                        key={event.id}
                                    />
                                </>
                            );
                        }

                        return(
                            <>
                                <Post
                                    title={event.title}
                                    img={event.hero}
                                    beschrijving={event.beschrijving}
                                    key={event.id}
                                />
                                <Spacer />
                            </>
                        );
                    })}
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default EventOverview;