// src/app/mock-data.ts
import { BookMeetingRoomModel, MeetingRoomModel } from './models/meeting-room.model';

export const MOCK_MEETING_ROOMS: MeetingRoomModel[] = [
  { id: 1, name: "Room #1" },
  { id: 2, name: 'Room #2' },
  { id: 3, name: 'Room #3' },
  { id: 4, name: 'Room #4' },
  { id: 5, name: 'Room #5' },
  { id: 6, name: 'Room #6' },
  { id: 7, name: 'Room #7' },
  { id: 8, name: 'Room #8' },
  { id: 9, name: 'Room #9' },
  { id: 10, name: 'Room #10' }
];

export const MOCK_BOOKINGS: BookMeetingRoomModel[] = [
  {
    id: 1,
    userName: 'John Doe',
    meetingRoom: 'Room #1',
    agenda: 'Project Discussion',
    meetingDate: '2024-06-10',
    startTime: '10:00',
    endTime: '11:00'
  },
  {
    id: 2,
    userName: 'Jane Smith',
    meetingRoom: 'Room #3',
    agenda: 'Team Meeting',
    meetingDate: "2024-06-10",
    startTime: '14:00',
    endTime: '15:00'
  },
  {
    id: 3,
    userName: 'Infrrd Test',
    meetingRoom: 'Room #2',
    agenda: 'Team Meeting',
    meetingDate: '2024-06-18',
    startTime: '14:00',
    endTime: '15:00'
  },
  {
    id: 4,
    userName: 'Infrrd Test',
    meetingRoom: 'Room #1',
    agenda: 'Team Meeting',
    meetingDate: '2024-06-18',
    startTime: '09:30',
    endTime: '15:00'
  }
];