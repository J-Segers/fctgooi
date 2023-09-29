export interface IPhoto {
    link: string,
    alt: string
}

export default interface IEvent {
    id?: string,
    datum: string,
    soort?: string,
    beschrijving?: string,
    hero?: string,
    title?: string,
    locatie?: string,
    photos: IPhoto[],
    createdAt?: string,
    createdBy?: string,
}