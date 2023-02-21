import {AfterContentInit, Component, ContentChild, Host} from '@angular/core';
import {EmployeeComponent} from '../employee/employee.component'
import {RoomsService} from "../rooms/services/rooms.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [RoomsService]
})
export class ContainerComponent implements AfterContentInit{

  constructor(@Host() private roomsService:RoomsService) {

  }

  @ContentChild(EmployeeComponent) employee !: EmployeeComponent


  ngAfterContentInit() {

    console.log(this.employee)
    this.employee.empName = 'Saraa X '

  }

}
