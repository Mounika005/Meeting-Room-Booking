import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MeetingRoomService } from './meeting-room.service';
import { BookMeetingRoomModel, MeetingRoomModel } from '../models/meeting-room.model';

describe('MeetingRoomService', () => {
  let service: MeetingRoomService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MeetingRoomService]
    });
    service = TestBed.inject(MeetingRoomService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
