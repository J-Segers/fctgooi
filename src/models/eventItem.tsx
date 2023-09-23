export default interface IEvent {
    id: string,
    datum: string,
    soort: string,
    beschrijving: string,
    hero: string,
    locatie: string,
    photos: string[],
    createdAt?: string,
    createdBy?: string,
}