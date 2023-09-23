export default interface IKalenderItem {
    id: string,
    datum: string,
    soort: string,
    activiteit: string,
    geweest: boolean,
    bijzonderheden: string,
    link: string,
    createdAt?: string,
    createdBy?: string,
}