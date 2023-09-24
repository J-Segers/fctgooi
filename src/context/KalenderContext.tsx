import React, {createContext, useEffect, useState} from 'react'
import FirebaseService from "../services/CalendarService";
import IKalenderItem from "../models/kalenderItem";
import {filterAndSortAgendaItems} from "../utils/helpers/sorters";

export const KalenderContext = createContext<IKalenderItem[]>([])

interface CalendarProviderProps {
    children: React.ReactNode;
}

export function CalendarProvider({children} : CalendarProviderProps) {
    const [agendaItems, setAgendaItems] = useState<Array<IKalenderItem>>([])
    const sortedAgendaItems = filterAndSortAgendaItems(agendaItems)

    useEffect(() => {
        FirebaseService
            .getAll()
            .then((res) => setAgendaItems(res))
            .catch(e => console.error(e))
    }, []);

    return (
        <KalenderContext.Provider value={sortedAgendaItems}>
            {children}
        </KalenderContext.Provider>
    )
}