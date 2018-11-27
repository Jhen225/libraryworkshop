import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ParticipantsService } from '../../services/Participants.service'
import { WorkshopsService } from '../../services/Workshops.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  participant:any;
  workshops;
  editing:boolean = false;
  altShops = [];
  p1;
  p2;
  p3;
  p4;
  p5;
  p6;
  p7;

  month;
  day;
  year;

  rfcBDay;
  constructor(
    private participantService:ParticipantsService, 
    private workshopsService:WorkshopsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.participantService.getParticipant(params['id'])
      .subscribe(
        data=>{
          this.participant = data
          this.participant.birthDate = new Date(this.participant.birthDate);
          
          this.month = this.participant.birthDate.getMonth()+1 + '';
          if(this.month.length < 2) this.month = '0' + this.month;
          this.day = this.participant.birthDate.getDate();
          if(this.day.length < 2) this.day = '0' + this.day;
          this.year = this.participant.birthDate.getFullYear();
          this.rfcBDay = this.year + "-" + this.month + "-" + this.day;

          if(this.participant.preferredWorkshops[0]){
            this.p1 = this.participant.preferredWorkshops[0]._id;
          }

          if(this.participant.preferredWorkshops[1]){
            this.p2 = this.participant.preferredWorkshops[1]._id;
          }

          if(this.participant.preferredWorkshops[2]){
            this.p3 = this.participant.preferredWorkshops[2]._id;
          }

          if(this.participant.preferredWorkshops[3]){
            this.p4 = this.participant.preferredWorkshops[3]._id;
          }

          if(this.participant.preferredWorkshops[4]){
            this.p5 = this.participant.preferredWorkshops[4]._id;
          }

          if(this.participant.preferredWorkshops[5]){
            this.p6 = this.participant.preferredWorkshops[5]._id;
          }

          if(this.participant.preferredWorkshops[6]){
            this.p7 = this.participant.preferredWorkshops[6]._id;
          }

      },
        error=>console.log(error));

        this.workshopsService.getWorkshops()
        .subscribe(
          data=>this.workshops=data,
          error=>console.log(error
        ));
    });
  }

  goBack(){
    this.router.navigate(['/participants']);
  }

  deleteParticipant(){
    if(confirm('Are you sure?')){
      this.participantService.deleteParticipant(this.participant._id)
      .subscribe(data=>{
        if(data.success){
          let workshops = this.participant.selectedWorkshops;
          for(var workshop in workshops){
            this.workshopsService.updateWorkshop(workshop)
          }
          // this.workshopsService.updateWorkshop()
          // this.onChange();
          this.router.navigate(['/participants'])
          this.participant = null;
        }
      })
    } else{
      return;
    }
  }

  editParticipant(){
    console.log(this.participant.birthDate)
    this.editing = !this.editing;
  }

  saveParticipant(){
    // console.log(this.participant);
    
    if(confirm('Are you sure?')){
      this.participant.birthDate = this.rfcBDay
      console.log(this.participant.birthDate)
      this.editing = !this.editing;
      if(typeof this.participant.birthDate === "string"){
        let x = this.participant.birthDate.split('-');
        this.participant.birthDate = new Date(x[0], x[1]-1, x[2]);
        console.log(this.participant.birthDate)
        this.month = this.participant.birthDate.getMonth()+1;
        this.day = this.participant.birthDate.getDate();
        this.year = this.participant.birthDate.getFullYear();
      }
      
      
      // console.log(this.participant.birthDate)
      this.participant.preferredWorkshops = [this.p1,this.p2,this.p3,this.p4,this.p5,this.p6,this.p7];

      // console.log(this.participant.preferredWorkshops);
      this.participantService.updateParticipant(this.participant)
      .subscribe(data =>{
        if(data.success){
          this.router.navigate(['/participant/'+this.participant._id])
        }
      })
    } else{
      return;
    }
  }

}
