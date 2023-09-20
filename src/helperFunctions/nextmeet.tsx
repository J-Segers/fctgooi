/**
 * tijdelijke oplossing voor updaten datum tot de backend werkt.
 */

import { log } from "console";

const initial_meeting = new Date(2023, 8, 6, 21);
let previous_meeting = new Date(initial_meeting);
let next_meeting = getNextDate();

export function getNextMeeting(): String {

    const today = new Date();

    while(true) {

        // check of de previous_meeting is geweest en update de next_meeting variabele
        if(today.getMonth() > next_meeting.getMonth()){
            
            updateMeetingDate();

        } else if(today.getDate() > next_meeting.getDate()) {

            updateMeetingDate();

        } else {

            break;

        }
    }    
    
    if(today.getDate() === next_meeting.getDate()) {

        return "Vandaag";
            
    } else {

        return `${next_meeting.getDate()}-${next_meeting.getMonth()}-${next_meeting.getFullYear()}`;

    }

}

function updateMeetingDate() {

    // sla de next_meeting waarde op in de previous_meeting.
    // zodat de nieuwe meeting datum kan worden berekend.
    previous_meeting = next_meeting;

    // update de next_meeting variabele
    next_meeting = getNextDate();

}

function getNextDate(): Date {

    const year = previous_meeting.getFullYear();
    const month = previous_meeting.getMonth();
    const day = previous_meeting.getDate();
    const hour = previous_meeting.getHours();
    const minutes = previous_meeting.getMinutes();
    
    // oude datum + fortnight (14 dagen) == nieuwe datum
    return new Date(year, month, day + 14, hour, minutes);

}