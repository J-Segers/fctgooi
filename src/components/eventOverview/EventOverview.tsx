import React, {useEffect, useState} from 'react';
import {InferProps} from 'prop-types';
import Spacer from "../spacer/Spacer";
import Preview from "../preview/Preview";
import IEvent from "../../models/eventItem";
import EventService from "../../services/EventService";
import {sortEventsDesc} from "../../utils/helpers/sorters";
import {EventInfo, EventSoort} from "../../utils/CONSTANTS";
import "./EventOverview.css"
import {Link} from "react-router-dom";
import {getRandomHero} from "../../utils/helpers/heroPicker";

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
        switch (type) {
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
            <section id="event-info">
                <h2>{pageInfo.titel}</h2>
                {pageInfo.beschrijving.map((line => <p>{line}</p>))}
            </section>
            <Spacer/>
            <section className="overview-container">
                {sorted.map((event: IEvent) => {
                    count++;

                    if (count === sorted.length) {
                        return (
                            <>
                                <Link to={`exposities/${event.id}`}>
                                    <Preview
                                        title={event.title}
                                        img={getRandomHero(event)}
                                        beschrijving={event.beschrijving}
                                        key={event.id}
                                    />
                                </Link>
                            </>
                        );
                    }

                    return (
                        <>
                            <Link to={`${event.id}`}>
                                <Preview
                                    title={event.title}
                                    img={getRandomHero(event)}
                                    beschrijving={event.beschrijving}
                                    key={event.id}
                                />
                            </Link>
                            <Spacer/>
                        </>
                    );
                })}
            </section>
        </div>
    );
}

export default EventOverview;