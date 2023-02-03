import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Room, RoomList} from "./rooms";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, AfterViewInit{
  hotelName = 'Hilton Hotel'
  hideRooms = false
  numOfRooms = 10

  rooms : Room = {
    totalRooms: 15,
    availableRooms: 10,
    bookedRooms: 5
  }
/*if header component has any async code, if trying to access headerComponent on ngOnInit it may cause delay, therefore
* you can make it default(false) if there is any async code in header, it is not, that will be ok.
* */
  @ViewChild(HeaderComponent, {static:true}) headerComponent!: HeaderComponent;

  title = 'Rooms List'


  roomList:RoomList[] = []
  ngOnInit():void {

    console.log(this.headerComponent)

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
   this.selectedRoom = [room]
  }

  ngAfterViewInit() {
    console.log(this.headerComponent)
    this.headerComponent.title = "Saraa X Magic"
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
    this.title = "room list"
  }
}
