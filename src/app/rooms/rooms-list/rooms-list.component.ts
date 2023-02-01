import { Component, Input, OnInit } from '@angular/core';
import {RoomList} from "../rooms";

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent {
  @Input() roomList:RoomList[] = []
}
