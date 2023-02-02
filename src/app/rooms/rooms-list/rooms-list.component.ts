import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output,SimpleChanges} from '@angular/core';
import {RoomList} from "../rooms";

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges{
  @Input() roomList:RoomList[] = []

  @Input() title:string = ""


  @Output() roomSelected = new EventEmitter<RoomList>();

  ngOnChanges(changes: SimpleChanges):void {
    console.log(changes)

      if(changes['title']){
        this.title = changes['title'].currentValue.toUpperCase()
      }
  }

  selectRoom(room:RoomList){
    this.roomSelected.emit(room)
  }

}
