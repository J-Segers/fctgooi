import React, {useEffect, useState} from 'react';
import Header from '../../components/headerComponent/HeaderComponent';
import Hero from '../../components/hero/Hero';
import "./Home.css";
import Footer from '../../components/footerComponent/FooterComponent';
import Spacer from '../../components/spacer/Spacer';
import Preview from '../../components/preview/Preview';
import EventService from "../../services/EventService";
import IEvent from "../../models/eventItem";
import {sortEventsDesc} from "../../utils/helpers/sorters";
import {getRandomHero} from "../../utils/helpers/heroPicker";

function Home() {
    const [events, setEvents] = useState<Array<IEvent>>([])
    const sorted: IEvent[] = sortEventsDesc(events)

    let count: number = 0;

    useEffect(() => {
        EventService
            .getHomePageFeed()
            .then((res) => setEvents(res))
            .catch((e) => console.error(e))
    }, []);

    useEffect(() => {
        console.log(events)
    }, [events]);
    return (
        <div id={"home-container"}>
            <Hero />
            <Header />
            <main>
                <section id="club-info">
                    <h1>Fotoclub 't Gooi</h1>
                    <p>
                        Fotoclub ’t Gooi is opgericht in 1924 en heeft ± 25 enthousiaste leden.<br />
                        De leden stimuleren elkaar in clubverband tot het maken van betere foto’s.<br />
                        <br />
                        Naast de fotografische inhoud van de avonden heeft het onderlinge, ongedwongen contact ook een sociaal aspect.<br />
                        <br />
                        De leden komen eens in de 14 dagen,<br />
                        op woensdagavond, bijeen in Wijkcentrum<br />
                        “Lopes Dias”, Lopes Diaslaan 213, 1222 VE te Hilversum.
                    </p>
                </section>
                <Spacer />
                <section className="recente-activiteiten">
                    {sorted.map((event: IEvent) => {
                        count++;

                        if(count === sorted.length){
                            return(
                                <>
                                    <Preview
                                        id={`${event.soort?.toLowerCase()}/${event.id}`}
                                        title={event.title}
                                        img={getRandomHero(event)}
                                        beschrijving={event.beschrijving}
                                        key={event.id}
                                    />
                                </>
                            );
                        }

                        return(
                            <>
                                <Preview
                                    id={`${event.soort?.toLowerCase()}/${event.id}`}
                                    title={event.title}
                                    img={getRandomHero(event)}
                                    beschrijving={event.beschrijving}
                                    key={event.id}
                                />
                                <Spacer />
                            </>
                        );
                    })}
                </section>
            </main>
            <Footer />
        </div>

    );
}

export default Home;