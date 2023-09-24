import React, {useState} from 'react';
import EventService from "../services/EventService";
import data from './../assets/clubtochten/clubtocht_voorjaar_2018.json'


import IEvent from "../models/eventItem";

DataLoader.propTypes = {};

export function DataLoader() {

    const [event, setEvent] = useState<IEvent>(
        {
            beschrijving: "",
            createdAt: "",
            createdBy: "",
            datum: "",
            hero: "",
            id: "",
            locatie: "",
            photos: [],
            soort: ""
        }
    )
    console.log(data);

    EventService
        .create(data)
        .then(res => console.log(res))
        .catch(e => console.error(e))

    return (
        <div>


        </div>
    );
}

