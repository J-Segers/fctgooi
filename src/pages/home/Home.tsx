import React, {useEffect, useState} from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import "./Home.css";
import Footer from '../../components/footer/Footer';
import Spacer from '../../components/spacer/Spacer';
import Post from '../../components/preview/Preview';
import dataArr from "../../data/homeData";
import EventService from "../../services/EventService";
import IEvent from "../../models/eventItem";

function Home() {
    const [events, setEvents] = useState<Array<IEvent>>([])
    let count: number = 0;
    let orientation: string = "left";

    interface Obj {
        title: string,
        img: string
    }

    useEffect(() => {
        EventService
            .getAll()
            .then((res) => {
                setEvents(res)
                console.log(res)
            })
            .catch((e) => console.error(e))
    }, []);

    function changeOrientation() {
        if(orientation === "left") {
           orientation = "right";
        } else {
            orientation = "left";
        }
    }

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
                    {dataArr.map((obj: Obj) => {

                        let currentOrientation = orientation;
                        let currentCount = count;
                        
                        changeOrientation();
                        count++;

                        if(count === dataArr.length){
                            return <Post title={obj.title} img={obj.img} orientation={currentOrientation} key={currentCount}/>;
                        }

                        return <>
                            <Post title={obj.title} img={obj.img} orientation={currentOrientation} key={currentCount}/>
                            <Spacer />
                        </>;
                    })}
                </section>
            </main>
            <Footer />
        </div>

    );
}

export default Home;