import React, {useEffect, useState} from 'react';

import EventService from "../../services/EventService";
import "./Gallerij.css";
import {useParams} from "react-router-dom";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import FooterComponent from "../../components/footerComponent/FooterComponent";
import IEvent from "../../models/eventItem";

function Galerij() {

    const [event, setEvent] = useState<IEvent>({
        id: "",
        datum: "",
        soort: "",
        beschrijving: "",
        hero: "",
        title: "",
        locatie: "",
        photos: [],
        createdAt: "",
        createdBy: ""
    });
    const [carousel, toggleCarousel] = useState(false);
    const [highlightedImg, setHighlightedImg] = useState(0);

    const {id} = useParams();

    useEffect(() => {
        EventService.getOne(id)
            .then(res => setEvent(res.data()))
            .catch((e) => console.error(e));
    }, [id]);


    function handleCarouselInteraction(e: React.MouseEvent<HTMLImageElement>) {
        if(window.innerWidth >= 992) {
            for(let i = 0; i < event.photos.length; i++) {
                if(event.photos[i].alt === e.currentTarget.getAttribute("alt")) {
                    setHighlightedImg(i);
                }
            }

            if(!carousel) {
                toggleCarousel(true);
            }
        }
    }

    return (
        <div id={"galerij-container"}>
            {!carousel && <HeaderComponent/>}
            {!carousel && <div className={"galerij-info"}>
                <h2>{event.title}</h2>
                <p>{event.beschrijving}</p>
            </div>}
            {carousel && <div id="carousel">
                <div id="carousel-btn-next" onClick={() => {
                    if(highlightedImg === event.photos.length - 1) {
                        setHighlightedImg(0);
                    } else {
                        setHighlightedImg(highlightedImg + 1);
                    }
                }}>{`>`}</div>
                <div id="carousel-btn-prev" onClick={() => {
                    if(highlightedImg === 0) {
                        setHighlightedImg(event.photos.length - 1);
                    } else {
                        setHighlightedImg(highlightedImg - 1);
                    }
                }}>{`<`}</div>
                <div id="carousel-btn-close" onClick={() => toggleCarousel(false)}>{`✖`}</div>
                <img src={event.photos[highlightedImg].link} alt={event.photos[highlightedImg].alt}/>
            </div>}
            <div id={carousel ? "foto-overzicht-flat" : "foto-overzicht"}>
                {event?.photos?.map((foto) => {
                    return (
                        <div className={"foto-container"}>
                            <img src={foto?.link} alt={foto?.alt} onClick={(e) => {handleCarouselInteraction(e)}}/>
                        </div>
                    );
                })}
            </div>
            {!carousel && <FooterComponent/>}
        </div>
    );
}

export default Galerij;