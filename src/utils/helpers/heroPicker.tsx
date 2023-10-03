import IEvent from "../../models/eventItem";

export function getRandomHero(event: IEvent): string {
    let number: number = Math.floor(Math.random() * event.photos.length)
    return event.photos[number].link
}