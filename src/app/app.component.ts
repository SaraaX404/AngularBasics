import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {RoomsComponent} from "./rooms/rooms.component";
import {LoggerService} from "./logger.service";
import {localstorageToken} from './localstorage.token'








@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`h1 {color:red;}`]
})
export class AppComponent implements OnInit, AfterViewInit{
constructor(@Optional() private loggerService: LoggerService, @Inject(localstorageToken) private localstorage: Storage) {

}

 @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

@ViewChild('name', {static:true}) name!: ElementRef;




  title = 'AngularBasics';
  role = 'Admin';

ngOnInit(){
  this.loggerService?.log('Working fine')
  localStorage.setItem('name', 'saraa')
}

ngAfterViewInit() {
  const componentRef = this.vcr.createComponent((RoomsComponent))

  componentRef.instance.numOfRooms = 100
}


}
