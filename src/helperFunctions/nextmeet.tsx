/**
 * tijdelijke oplossing voor updaten datum tot de backend werkt.
 */

const initial_meeting = new Date(2023, 8, 6, 20, 0);
let previous_meeting = initial_meeting;
let next_meeting = getNextDate();

export function getNextMeeting(): Date {

    const today = new Date();

    // check of de previous_meeting is geweest en update de next_meeting variabele

    

    while(true) {
        if(today.getDate() === next_meeting.getDate() && today.getTime() > next_meeting.getTime()) {
            
            updateMeetingDate();
            
        } else if(today.getDate() > next_meeting.getDate()){
           
            updateMeetingDate();

        } else {
            break;
        }
    }    
    
    return next_meeting

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
    return new Date(year, month, (day + 14), hour, minutes);

}