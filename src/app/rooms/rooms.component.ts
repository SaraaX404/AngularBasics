import { Component, OnInit } from '@angular/core';
import {Room, RoomList} from "./rooms";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{
  hotelName = 'Hilton Hotel'
  hideRooms = false
  numOfRooms = 10

  rooms : Room = {
    totalRooms: 15,
    availableRooms: 10,
    bookedRooms: 5
  }


  roomList:RoomList[] = []
  ngOnInit():void {
  this.roomList = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'Air conditioner blah blah blah',
    price:500,
    photos: 'https://th.bing.com/th/id/OIP.GA_AE0fF42zXFxBUhbN0sgHaE8?pid=ImgDet&rs=1',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021'),
    rating: 4.5
  },{
    roomNumber: 2,
    roomType: 'Deluxe Room',
    amenities: 'Air conditioner blah blah blah',
    price:500,
    photos: 'https://th.bing.com/th/id/OIP.GA_AE0fF42zXFxBUhbN0sgHaE8?pid=ImgDet&rs=1',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021'),
    rating: 4.5
  },{
    roomNumber: 3,
    roomType: 'Deluxe Room',
    amenities: 'Air conditioner blah blah blah',
    price:500,
    photos: 'https://th.bing.com/th/id/OIP.GA_AE0fF42zXFxBUhbN0sgHaE8?pid=ImgDet&rs=1',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021'),
    rating: 4.5
  },{
    roomNumber: 4,
    roomType: 'Deluxe Room',
    amenities: 'Air conditioner blah blah blah',
    price:500,
    photos: 'https://th.bing.com/th/id/OIP.GA_AE0fF42zXFxBUhbN0sgHaE8?pid=ImgDet&rs=1',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021'),
    rating: 4.5
  }]
  }

  selectedRoom:RoomList[] = []

  selectRoom(room:RoomList){
   this.selectedRoom[0] = room
  }

  addRoom(){
    const room:RoomList = {
      roomNumber: 5,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner blah blah blah',
      price:500,
      photos: 'https://th.bing.com/th/id/OIP.GA_AE0fF42zXFxBUhbN0sgHaE8?pid=ImgDet&rs=1',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5
    };


    this.roomList = [...this.roomList, room]
  }

  toggle(){
    this.hideRooms = !this.hideRooms
  }
}
