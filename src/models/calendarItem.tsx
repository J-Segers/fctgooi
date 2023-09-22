export default interface ICalendarItem {
    id?: string,
    datum: string,
    type: string,
    activiteit: string,
    geweest: boolean,
    opmerkingen: string,
    link: string,
    createdAt?: string,
    createdBy?: string,
}