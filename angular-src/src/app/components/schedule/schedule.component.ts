import { Component, OnInit } from '@angular/core'
import { WorkshopsService } from '../../services/Workshops.service'
import { OrderByDatePipe } from '../../pipes/order-by-date.pipe'

@Component({
  selector: 'app-schedule',
  template: `
    <section id="schedule">
      <h3>Workshop Schedule</h3>
    </section>

    <ul class="list-group">
      <li class="list-group-item" *ngFor="let workshop of workshops | orderByDate">
        <h4>{{workshop.title}}</h4>
        <p>{{workshop.date | date: 'MM/dd/yyyy'}} {{workshop.startTime}}-{{workshop.endTime}}</p>
      </li>
    </ul>
  `,
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  workshops:any =[];
  constructor(
    private workshopsService:WorkshopsService
    ) { }

  ngOnInit() {
    this.workshopsService.getWorkshops()
    .subscribe(
      data => {
        let shops = []
        for(let i = 0; i < data.length; i++){
          let shopDate = new Date(data[i].date);
          let now = new Date();
          now.setHours(0,0,0,0);
          if(shopDate >= now){
            shops.push(data[i]);
          }
        }
        this.workshops = shops;
      },
      error => console.log(error.message)
    );
  }
}
