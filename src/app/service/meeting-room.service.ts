import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookMeetingRoomModel, MeetingRoomModel } from '../models/meeting-room.model';
import { Observable, of } from 'rxjs';
import { MOCK_MEETING_ROOMS, MOCK_BOOKINGS } from '../mock-data';
@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
//private apiUrl = 'http://localhost:3000'
  constructor( private http: HttpClient) { }

  getMeetingRooms(): Observable<MeetingRoomModel[]>{
    //return this.http.get<MeetingRoomModel[]>(${this.apiUrl}/meeting-rooms)
    return of(MOCK_MEETING_ROOMS)
  }
  bookMeetingRoom(data:BookMeetingRoomModel){
    //return this.http.post(${this.apiUrl}/bookings,data);
    MOCK_BOOKINGS.push(data);
    return of(data)
  }
currentMeetings(): Observable<BookMeetingRoomModel[]>{
 // return this.http.get<BookMeetingRoomModel[]>(${this.apiUrl}/bookings)
 return of(MOCK_BOOKINGS)
}
deleteMeeting(id:number):Observable<{}>{
 // return this.http.delete(${this.apiUrl}/bookings/${id})
 const index = MOCK_BOOKINGS.findIndex(meeting => meeting.id === id);
 if (index !== -1) {
   MOCK_BOOKINGS.splice(index, 1);
 }
 return of({});
}
getAvailableRooms(date:string,startTime:string,endTime:string ){
const start = new Date(`2024-01-01T${startTime}:00`);
const end = new Date(`2024-01-01T${endTime}:00`);
const availableRooms=MOCK_MEETING_ROOMS.filter(room=>{

})
  return MOCK_MEETING_ROOMS.map((room:any) => {
    const meeting = MOCK_BOOKINGS.find((meeting:any) => {
    if (meeting.meetingRoom !== room.name || meeting.meetingDate!== date) {
      return false;
    }
    const meetingStart = new Date(`2024-01-01T${meeting.startTime}:00`);
    const meetingEnd = new Date(`2024-01-01T${meeting.endTime}:00`);
    return (
      (start >= meetingStart && start < meetingEnd) ||
      (end > meetingStart && end <= meetingEnd) ||
      (start <= meetingStart && end >= meetingEnd)
    );
  });
  if (meeting) {
    return {
      room,
      status: 'Booked',
      user: meeting.userName,
      agenda: meeting.agenda
    };
  } else {
    return {
      room,
      status: 'Available'
    };
  }
})
}
}