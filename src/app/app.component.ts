import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {RoomsComponent} from "./rooms/rooms.component";








@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`h1 {color:red;}`]
})
export class AppComponent implements OnInit, AfterViewInit{


 @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

@ViewChild('name', {static:true}) name!: ElementRef;




  title = 'AngularBasics';
  role = 'Admin';

ngOnInit(){
  this.name.nativeElement.innerText = "Hello world"
}

ngAfterViewInit() {
  const componentRef = this.vcr.createComponent((RoomsComponent))

  componentRef.instance.numOfRooms = 100
}


}
