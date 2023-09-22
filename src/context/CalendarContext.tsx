import React, {createContext, useEffect, useState} from 'react'
import CalendarService from "../services/CalendarService";
import ICalendarItem from "../models/calendarItem";

export const CalendarContext = createContext<ICalendarItem[]>([])

// @ts-ignore
export function CalendarProvider({children}) {
    const [agendaItems, setAgendaItems] = useState<Array<ICalendarItem>>([])

    useEffect(() => {
        CalendarService
            .getAll()
            .then(res => setAgendaItems(res))
            .catch(e => console.error(e))
    }, []);



    return (
        <CalendarContext.Provider value={agendaItems}>
            {children}
        </CalendarContext.Provider>
    )
}