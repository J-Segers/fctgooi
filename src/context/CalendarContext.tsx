import React, {createContext, useEffect, useState} from 'react';
import ICalendarItem from "../models/calendarItem";
import CalendarService from "../services/CalendarService";
import PropTypes from "prop-types";

export const CalendarContext = createContext({});

CalendarContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}
function CalendarContextProvider(props: {children: any}) {
    const [items, setItems] = useState<ICalendarItem[]>([])

    useEffect(() => {
        getItems().catch(e => console.error(e));
    }, []);

    async function getItems() {
        await CalendarService.getAll()
            .then(res => setItems(res))
            .catch(e => console.error(e))
    }

    const contextData = {
        calendarItems: items,
    };

    return (
        <CalendarContext.Provider value={contextData}>
            {props.children}
        </CalendarContext.Provider>
    );
}

export default CalendarContextProvider;