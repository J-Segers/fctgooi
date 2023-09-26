import {db} from "../config/firebase";

import {
    collection,
    deleteDoc,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    addDoc,
    updateDoc,
    deleteField,
    orderBy,
    limit
} from 'firebase/firestore';

import IEvent from "../models/eventItem";

const ref = collection(db, 'events')

class EventService {

    async getAll(): Promise<Array<IEvent>> {
        const snapshot = await getDocs(ref)
        const data: Array<any> = [];
        snapshot.docs.map((item) => {
            return data.push({
                id: item.id,
                ...item.data(),
            });
        });
        return data as Array<IEvent>;
    };

    async getHomePageFeed(): Promise<Array<IEvent>> {
        const q = query(ref, orderBy("datum", "desc"), limit(5));
        const snapshot = await getDocs(q);
        const data: Array<any> = [];
        snapshot.docs.map((item) => {
            return data.push({
                id: item.id,
                ...item.data(),
            });
        });
        return data as Array<IEvent>;
    };

    async create(item: IEvent): Promise<any> {
        console.log(item)
        return await addDoc(collection(db, "events"), {
            datum: item.datum,
            soort: item.soort,
            locatie: item.locatie,
            title: item.title,
            beschrijving: item.beschrijving,
            hero: item.hero,
            photos: item.photos,
            createdBy: "automated",
            createdAt: Date.now(),
        });
    }


    async getByQuery(term: string): Promise<Array<IEvent>> {
        const queryTerm = query(ref, where('soort', "==", term));
        const snapshot = await getDocs(queryTerm);
        const data: Array<any> = [];
        snapshot.docs.map((event) => {
            return data.push({
                id: event.id,
                ...event.data(),
            });
        });
        return data as Array<IEvent>;
    };

    async getOne(id: any): Promise<any> {
        const eventRef = doc(db, 'events', id);
        return await getDoc(eventRef)
    }

    async update(id: string, key: string, value: any): Promise<any> {
        const eventRef = doc(db, 'events', id);
        return await updateDoc(eventRef, {
            [key]: value
        });
    }

    async deleteField(id: string, key: string): Promise<any> {
        const eventRef = doc(db, 'events', id);
        return await updateDoc(eventRef, {
            [key]: deleteField()
        });
    }

    async deleteEvent(key: any) {
        await deleteDoc(doc(db, "events", key));
    }

}

const eventService = new EventService();
export default eventService;