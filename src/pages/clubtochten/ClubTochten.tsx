import React, {useEffect, useState} from 'react';
import {InferProps} from 'prop-types';
import Header from "../../components/header/Header";
import Spacer from "../../components/spacer/Spacer";
import dataArr from "../../data/homeData";
import Post from "../../components/preview/Preview";
import Footer from "../../components/footer/Footer";
import IEvent from "../../models/eventItem";
import EventService from "../../services/EventService";
import {sortEventsDesc} from "../../utils/helpers/sorters";

ClubTochten.propTypes = {};

function ClubTochten({}: InferProps<typeof ClubTochten.propTypes>) {
    const [clubtochten, setClubtochten] = useState<Array<IEvent>>([])
    const sorted: IEvent[] = sortEventsDesc(clubtochten);

    useEffect(() => {
        EventService.getByQuery("Clubtocht")
            .then(res => {
                setClubtochten(res)
            })
            .catch(e => console.error(e))
    }, []);


    let count: number = 0;
    let orientation: string = "left";

    function changeOrientation() {
        if (orientation === "left") {
            orientation = "right";
        } else {
            orientation = "left";
        }
    }

    return (
        <div id={"clubtochten-container"}>
            <Header/>
            <main>
                <section id="clubtochten-info">
                    <h1>Clubtochten</h1>
                    <p>
                        Tenminste één keer per jaar trekken we er met zijn allen op uit<br/>
                        Samen gaan we naar een eerder gekozen bestemming om daar samen foto's te maken<br/>
                        <br/>
                        Naast de fotografische inhoud van de tocht heeft het onderlinge, ongedwongen contact ook een
                        sociaal aspect.<br/>
                        <br/>
                        En zeg nou zelf, even lekker eropuit is toch heerlijk<br/>
                        Friesland, Groningen, België, we komen overal! <br/>
                    </p>
                </section>
                <Spacer/>
                <section className="recente-activiteiten">
                    {sorted.map((event: IEvent) => {

                        let currentOrientation:string = orientation;
                        let currentCount: number = count;

                        changeOrientation();
                        count++;

                        if (count === sorted.length) {
                            return (
                                <Post
                                    title={event.title}
                                    beschrijving={event.beschrijving}
                                    img={event.hero}
                                    orientation={currentOrientation}
                                    key={currentCount}
                                />
                            )
                        }

                        return <>
                            <Post
                                title={event.title}
                                beschrijving={event.beschrijving}
                                img={event.hero}
                                orientation={currentOrientation}
                                key={currentCount}
                            />
                            <Spacer/>
                        </>;
                    })}
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default ClubTochten;