import React, {createContext, useEffect, useState} from 'react'
import FirebaseService from "../services/FirebaseService";
import IKalenderItem from "../models/kalenderItem";

export const KalenderContext = createContext<IKalenderItem[]>([])

interface CalendarProviderProps {
    children: React.ReactNode;
}

export function CalendarProvider({children} : CalendarProviderProps) {
    const [agendaItems, setAgendaItems] = useState<Array<IKalenderItem>>([])

    function stringToNumber(str: string): number {
        return parseInt(str.split("-").reverse().join(""));
    }

    const sortedAgendaItems = agendaItems.filter(item => !item.geweest).sort((a, b) => {
        return stringToNumber(a.datum) - stringToNumber(b.datum)
    })

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