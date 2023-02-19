import { Component } from '@angular/core';
import {RoomsService} from "../rooms/services/rooms.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [RoomsService]
})
export class EmployeeComponent {
  constructor(private roomsService:RoomsService) {

  }
  empName:string = 'John'
}
