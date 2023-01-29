import { Component } from '@angular/core';
import {Room, RoomList} from "./rooms";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel'
  hideRooms = false
  numOfRooms = 10

  rooms : Room = {
    totalRooms: 15,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList:RoomList[] = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'Air conditioner blah blah blah',
    price:500,
    photos: 'https://th.bing.com/th/id/OIP.GA_AE0fF42zXFxBUhbN0sgHaE8?pid=ImgDet&rs=1',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021')
  },{
    roomNumber: 2,
    roomType: 'Deluxe Room',
    amenities: 'Air conditioner blah blah blah',
    price:500,
    photos: 'https://th.bing.com/th/id/OIP.GA_AE0fF42zXFxBUhbN0sgHaE8?pid=ImgDet&rs=1',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021')
  },{
    roomNumber: 3,
    roomType: 'Deluxe Room',
    amenities: 'Air conditioner blah blah blah',
    price:500,
    photos: 'https://th.bing.com/th/id/OIP.GA_AE0fF42zXFxBUhbN0sgHaE8?pid=ImgDet&rs=1',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021')
  },{
    roomNumber: 4,
    roomType: 'Deluxe Room',
    amenities: 'Air conditioner blah blah blah',
    price:500,
    photos: 'https://th.bing.com/th/id/OIP.GA_AE0fF42zXFxBUhbN0sgHaE8?pid=ImgDet&rs=1',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021')
  }]

  toggle(){
    this.hideRooms = !this.hideRooms
  }
}
