import React, {createContext, useEffect, useState} from 'react'
import FirebaseService from "../services/CalendarService";
import IKalenderItem from "../models/kalenderItem";
import {sortAgendaItems} from "../utils/helpers/sorters";

export const KalenderContext = createContext<IKalenderItem[]>([])

interface CalendarProviderProps {
    children: React.ReactNode;
}

export function CalendarProvider({children} : CalendarProviderProps) {
    const [agendaItems, setAgendaItems] = useState<Array<IKalenderItem>>([])
    const sortedAgendaItems = sortAgendaItems(agendaItems)

    useEffect(() => {
        FirebaseService
            .getFutureEvents()
            .then((res) => setAgendaItems(res))
            .catch(e => console.error(e))
    }, []);

    return (
        <KalenderContext.Provider value={sortedAgendaItems}>
            {children}
        </KalenderContext.Provider>
    )
}