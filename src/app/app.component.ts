import {AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef} from '@angular/core';
import {RoomsComponent} from "./rooms/rooms.component";
import {LoggerService} from "./logger.service";








@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`h1 {color:red;}`]
})
export class AppComponent implements OnInit, AfterViewInit{
constructor(@Optional() private loggerService: LoggerService) {
}

 @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

@ViewChild('name', {static:true}) name!: ElementRef;




  title = 'AngularBasics';
  role = 'Admin';

ngOnInit(){
  this.loggerService?.log('Working fine')
}

ngAfterViewInit() {
  const componentRef = this.vcr.createComponent((RoomsComponent))

  componentRef.instance.numOfRooms = 100
}


}
