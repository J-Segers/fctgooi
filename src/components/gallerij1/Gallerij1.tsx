import React, {useEffect, useState} from 'react';
import "./Gallerij.css";
import {useParams} from "react-router-dom";
import eventService from "../../services/EventService";
import IEvent from "../../models/eventItem";

function Gallerij1() {
    const [event, setEvent] = useState<IEvent>();
    const {id} = useParams();
    useEffect(() => {
        eventService.getOne(id).then(res => {
            setEvent(res);
            console.log(res);
        }).catch(e => console.log(e));
    }, []);

    return (
        <div className={"gallerij-container"}>

        </div>
    );
}

export default Gallerij1;