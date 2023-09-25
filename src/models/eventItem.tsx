interface photo {
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
    locatie: string,
    photos: photo[],
    createdAt?: string,
    createdBy?: string,
}