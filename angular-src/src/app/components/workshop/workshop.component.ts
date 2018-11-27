import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { WorkshopsService } from '../../services/Workshops.service'
import { ParticipantsService } from '../../services/Participants.service'
import { FlashMessagesService } from 'angular2-flash-messages'
import { Router, ActivatedRoute } from '@angular/router'
import { SortByLastPipe } from '../../pipes/sort-by-last.pipe';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {
  workshop;
  participants;
  month = "";
  date = "";
  day = "";
  year = "";
  alternates = [];
  adding:boolean = false;
  selectedAlt;
  selectedPart;
  removing:boolean = false;
  editing:boolean = false;
  rfcDate;


  constructor(
    private workshopsService:WorkshopsService,
    private participantsService:ParticipantsService,
    private flashMessage:FlashMessagesService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {

    this.route.params.subscribe(params=>{
      this.workshopsService.getWorkshop(params['id'])
      .subscribe(
        data=>{
          this.workshop = data;
          this.workshop.date = new Date(this.workshop.date);
          this.month = this.workshop.date.getMonth()+1 + '';
          if(this.month.length < 2) this.month = '0' + this.month;
          this.day = this.workshop.date.getDate();
          if(this.day.length < 2) this.day = '0' + this.day;
          this.year = this.workshop.date.getFullYear();
          this.rfcDate = this.year + "-" + this.month + "-" + this.day;
          console.log(this.workshop)
          this.participantsService.getParticipants()
          .subscribe(
            data => {
              this.participants = data
              this.pullPlaceFromList();
              // console.log(this.participants);
            },
            error => console.log(error)
          );
        },
        error=>console.log(error)
      );
    }); 
  }

  addParticipant(){
    if(this.selectedPart != null){
      if(this.selectedPart.selectedWorkshops.length >= 2){
        return this.flashMessage.show("Participant already enrolled in 2 workshops!",{cssClass:"alert-warning",timeout:3000});
      }
      // for(var i = 0; i < this.selectedPart.alternateWorkshops.length; i++){
      //   console.log(this.selectedPart.alternateWorkshops[i]._id)
      //   if(this.workshop._id === this.selectedPart.alternateWorkshops[i]._id){
      //     console.log(this.selectedPart.alternateWorkshops[i])
      //     let splicedAlt = this.selectedPart.alternateWorkshops[i].splice(i,1);
      //     console.log(this.selectedPart.alternateWorkshops[i])
      //     this.selectedPart.selectedWorkshops.push(splicedAlt[0]);
      //     this.participantsService.updateParticipant(this.selectedPart).subscribe(data => {
      //       console.log(data);
      //       return;
      //     });
      //   }
      // }

      this.workshop.participants.push(this.selectedPart)
      this.selectedPart.selectedWorkshops.push(this.workshop._id)
      this.participantsService.updateParticipant(this.selectedPart)
        .subscribe(data => {
          this.selectedPart
          this.flashMessage.show("Participant added",{cssClass:"alert-success",timeout:3000});
        })
      console.log(this.selectedPart)
    }else{
      return this.flashMessage.show("Participant not added",{cssClass:"alert-warning",timeout:3000});
    }

    this.workshopsService.updateWorkshop(this.workshop)
    .subscribe(data => {
      if(data.success){
        this.selectedPart = null;
      }
    });
  }

  addAlternate(){
    if(this.selectedAlt != null){
      this.workshop.alternates.push(this.selectedAlt)
      this.selectedAlt.alternateWorkshops.push(this.workshop._id)
      this.participantsService.updateParticipant(this.selectedAlt)
        .subscribe(data => {
          this.selectedPart
          this.flashMessage.show("Alternate Added",{cssClass:"alert-success",timeout:3000});
        })
      console.log(this.selectedAlt)
    } else{
      return this.flashMessage.show("Alternate not added",{cssClass:"alert-warning",timeout:3000});
    }

    this.workshopsService.updateWorkshop(this.workshop)
    .subscribe(data => {
      if(data.success){
        this.selectedAlt = null;
      }
    });
  }

  removeParticipant(){
    if(confirm('Are you sure?')){
      if(this.selectedPart !== null){
        let index = this.workshop.participants.indexOf(this.selectedPart)
        this.workshop.participants.splice(index,1);
        for(let i = 0; i < this.selectedPart.selectedWorkshops.length; i++){
          if(this.selectedPart.selectedWorkshops[i] === this.workshop._id){
            this.selectedPart.selectedWorkshops.splice(i,1);
            this.participantsService.updateParticipant(this.selectedPart)
            .subscribe(data =>{
              if(data.success){
                this.workshopsService.updateWorkshop(this.workshop)
                .subscribe(data => {
                  console.log(data)
                  this.selectedPart = null;
                  return this.flashMessage.show("Participant removed",{cssClass:"alert-success",timeout:3000})
                });
              }
            });
          }
        }
      } else{
        return this.flashMessage.show("Participant not removed",{cssClass:"alert-warning",timeout:3000});
      }
    } else{
      return;
    }
  }

  removeAlternate(){
    if(confirm("Are you sure?")){
      if(this.selectedAlt != null){
        let index = this.workshop.alternates.indexOf(this.selectedAlt);
        this.workshop.alternates.splice(index,1);
        for(let i = 0; i < this.selectedAlt.alternateWorkshops.length; i++){
          if(this.selectedAlt.alternateWorkshops[i] === this.workshop._id){
            this.selectedAlt.alternateWorkshops.splice(i,1);
            this.participantsService.updateParticipant(this.selectedAlt)
            .subscribe(data => {
              console.log(data)
              if(data.success){
                console.log("here")
                this.workshopsService.updateWorkshop(this.workshop)
                .subscribe(data => {
                  console.log(data)
                  if(data.success){
                    this.selectedAlt = null;
                    return this.flashMessage.show("Alternate removed",{cssClass:"alert-success",timeout:3000})
                  }
                });
              }
            });
          }
        }
      } else{
        return this.flashMessage.show("ALternate not removed",{cssClass:"alert-success",timeout:3000})
      }
    } else{
      return;
    }
  }

  goBack(){
    this.router.navigate(['/workshops']);
  }

  pullPlaceFromList(){
    for(let i = 0; i < this.participants.length; i++){
      for(let j = 0; j < this.workshop.participants.length; j++){
        let full = this.participants[i].firstName + ' ' + this.participants[i].lastName;
        let placedFull = this.workshop.participants[j].firstName + ' ' + this.workshop.participants[j].lastName;
        // let altFull = this.workshop.alternates[j].firstName + ' ' + this.workshop.alternates[j].lastName;
        if(full === placedFull || this.participants[i].selectedWorkshops.length >= 2){
          this.participants.splice(i,1);
        }
      }
    }
  }


  deleteWorkshop(){
    if(confirm('Are you sure?')){
      this.workshopsService.deleteWorkshop(this.workshop._id)
      .subscribe(data=>{
        console.log(JSON.stringify(data))
        if(data.success){
          // this.workshopsService.removeParticipantFromWorkshop(0,{})
          // this.onChange();
          this.router.navigate(['/participants'])
          this.workshop = null;
        }
      })
    } else{
      return;
    }
  }

  editWorkshop(){
    this.editing = !this.editing;
  }

  saveWorkshop(){
    this.workshop.date = this.rfcDate;
    if(confirm('Are you sure?')){
      this.editing = !this.editing;
      if(typeof this.workshop.date === "string"){
        let x = this.workshop.date.split('-');
        this.workshop.date = new Date(x[0], x[1]-1, x[2]);
        console.log(this.workshop.date)
        this.month = this.workshop.date.getMonth()+1;
        this.day = this.workshop.date.getDate();
        this.year = this.workshop.date.getFullYear();
      }
      this.workshopsService.updateWorkshop(this.workshop)
      .subscribe(data =>{
        if(data.success){
          
        }
      })
    } else{
      return;
    }
  }
}
