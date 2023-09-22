import {auth, db} from "../config/firebase";
import ICalendarItem from "../models/calendarItem";

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
    deleteField
} from 'firebase/firestore';

const ref = collection(db, 'calendar')

class CalendarService {

    async getAll(): Promise<Array<ICalendarItem>> {
        const snapshot = await getDocs(ref)
        const data: Array<any> = [];
        snapshot.docs.map((item) => {
            return data.push({
                id: item.id,
                ...item.data(),
            });
        });
        return data as Array<ICalendarItem>;
    };

    async create(item: ICalendarItem): Promise<any> {
        return await addDoc(collection(db, "calendar"), {
            datum: item.datum,
            type: item.type,
            activiteit: item.activiteit,
            geweest: item.geweest,
            link: item.link,
            opmerkingen: item.opmerkingen,
            createdBy: auth?.currentUser?.uid,
            createdAt: Date.now(),
        });
    }

    async getByQuery(term: string): Promise<Array<ICalendarItem>> {
        const queryTerm = query(ref, where('type', ">", term));
        const snapshot = await getDocs(queryTerm);
        const data: Array<any> = [];
        snapshot.docs.map((event) => {
            return data.push({
                id: event.id,
                ...event.data(),
            });
        });
        return data as Array<ICalendarItem>;
    };

    async getOne(id: string): Promise<any> {
        const eventRef = doc(db, 'calendar', id);
        return await getDoc(eventRef)
    }

    async update(id: string, key: string, value: any): Promise<any> {
        const eventRef = doc(db, 'calendar', id);
        return await updateDoc(eventRef, {
            [key]: value
        });
    }

    async deleteField(id: string, key: string): Promise<any> {
        const eventRef = doc(db, 'calendar', id);
        return await updateDoc(eventRef, {
            [key]: deleteField()
        });
    }

    async deleteEvent(key: any) {
        await deleteDoc(doc(db, "calendar", key));
    }

}

const calendarService = new CalendarService();
export default calendarService;