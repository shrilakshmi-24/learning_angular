import { Component } from '@angular/core';
import { Room } from './romms';

@Component({
  selector: 'app-romms',
  templateUrl: './romms.component.html',
  styleUrls: ['./romms.component.scss']
})
export class RommsComponent {
  hotelName='Milton Hotel'
  rooms=10
  toggleValue =false
  toggle(){
    this.toggleValue=!this.toggleValue
  }
  room:Room={
    totalRooms:20,
    availableRooms:10,
    soldRooms:10
  }
}
