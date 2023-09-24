import IEvent from "../../models/eventItem";
import IKalenderItem from "../../models/kalenderItem";

export function stringToNumber(str: string): number {
    return parseInt(str.split("-").reverse().join(""));
}

export function filterAndSortAgendaItems(items: IKalenderItem[]): IKalenderItem[] {
    return items.filter(item => !item.geweest).sort((a, b) => stringToNumber(a.datum) - stringToNumber(b.datum)
    )
}

export function sortEventsAsc(items: IEvent[]): IEvent[] {
    return items.sort((a, b) => {
        return stringToNumber(a.datum) - stringToNumber(b.datum)
    })
}

export function sortEventsDesc(items: IEvent[]): IEvent[] {
    return items.sort((b, a) => {
        return stringToNumber(a.datum) - stringToNumber(b.datum)
    })
}