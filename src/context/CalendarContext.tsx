import { createContext, useContext } from "react"
import ICalendarItem from "../models/calendarItem";

export const CalendarContext = createContext<ICalendarItem[]>([]){




}
export const useCalendarContext = () => useContext(CalendarContext)