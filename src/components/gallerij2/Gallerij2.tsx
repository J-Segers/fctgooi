import React, {useEffect, useState} from 'react';
import "./Gallerij.css";
import {useParams} from "react-router-dom";
import eventService from "../../services/EventService";
import IEvent, {IPhoto} from "../../models/eventItem";

function Gallerij2() {
    const [event, setEvent] = useState<IEvent>();
    const {id} = useParams();
    const [images, setImages] = useState<IPhoto[]>()

    useEffect(() => {
        eventService
            .getOne(id)
            .then(res => {
                setEvent(res.data());
                console.log(res.data());
            })
            .catch(e => console.log(e))
            .finally(() => {
                console.log(event?.photos)
                setImages(event?.photos)
            })
    }, []);

    function test() {
        console.log(event?.photos);
    }

    return (
        <div className={"gallerij-container"}>

            {images && images.map((image) => {
                return (
                    <div key={image.alt}>{image.alt}</div>
                )
            })}

        </div>
    );
}

export default Gallerij2;