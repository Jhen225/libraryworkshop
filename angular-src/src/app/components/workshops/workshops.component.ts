import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router'
import { WorkshopsService } from '../../services/Workshops.service'
import { ParticipantsService } from '../../services/Participants.service'
import { FlashMessagesService } from 'angular2-flash-messages'

@Component({
  selector: 'app-workshops',
  template: `
  <div class="parent-container">
    <h3 *ngIf="!create" class="section-header">Workshops</h3>
    <p *ngIf="!create" class="workshop-count">Number of workshops: {{workshops.length}}</p><br/>

    <div class="controls">
      <input *ngIf="!create" (click)="create=!create" class="btn btn-success btn-lg control" type="button" value="New">
    </div>

    <div *ngIf="!create" class="form-group"> 
      <input type="text" class="form-control" [(ngModel)]="searchText" placeholder="Search by Title" (keyup)="0" name="searchText" >
    </div>
    
      <ul class="list-group" *ngIf="workshops.length > 0 && !create">
        <li class="list-group-item" *ngFor="let workshop of workshops | filterBy:{title:searchText}; trackBy:workshop?._id" (click)='onSelect(workshop)'>
          <a >{{workshop.title}}   
            <p class="list-group-item-details">Participants enrolled: <span *ngIf="isFull(workshop)" class="full">{{workshop.participants.length}} of {{workshop.capacity}}</span>
              <span *ngIf="!isFull(workshop)" >{{workshop.participants.length}} of {{workshop.capacity}}</span>
              <span class=""> | Alternates: {{workshop.alternates.length}}</span>
              <span class=""> | Ages:{{workshop.ageMin}}-{{workshop.ageMax}}</span>
              <span class=""> | Time:{{workshop.startTime}}-{{workshop.endTime}}</span>
            </p>
          </a>
        </li>
      </ul>
    

    <form class="form-container" *ngIf="create">
      <div class="controls">
        <input (click)="create=!create" class="btn btn-default btn-lg control" type="button" value="Back">
        <input (click)="addWorkshop()" class="btn btn-success btn-lg control" type="button" value="Submit">
      </div>

      <label>Title</label>
      <input type="text" class="form-control" [(ngModel)]="newWorkshop.title" name="newWorkshop.title" placeholder="Workshop title"><br/>

      <label>Minimum Age</label>
      <input type="text" class="form-control" [(ngModel)]="newWorkshop.ageMin" name="newWorkshop.ageMin" placeholder="Minimum Age"><br/>

      <label>Maximum Age</label>
      <input type="text" class="form-control" [(ngModel)]="newWorkshop.ageMax" name="newWorkshop.ageMax" placeholder="Maximum Age"><br/>

      <label>Date</label>
      <input type="date" class="form-control" [(ngModel)]="newWorkshop.date" name="newWorkshop.date" /><br/>

      <label>Start Time</label>
      <input type="text" class="form-control" [(ngModel)]="newWorkshop.startTime" name="newWorkshop.startTime" placeholder="Start Time"><br/>

      <label>End Time</label>
      <input type="text" class="form-control" [(ngModel)]="newWorkshop.endTime" name="newWorkshop.endTime" placeholder="End Time"><br/>

      <label>Capacity</label>
      <input type="text" class="form-control" [(ngModel)]="newWorkshop.capacity" name="newWorkshop.capacity" placeholder="Capacity"><br/>

      <label>Location</label>
      <input type="text" class="form-control" [(ngModel)]="newWorkshop.location" name="newWorkshop.location" placeholder="Location"><br/>

      <label>Instructor</label>
      <input type="text" class="form-control" [(ngModel)]="newWorkshop.instructor" name="newWorkshop.instructor" placeholder="Instructor"><br/>
    </form>
  </div>
  `,
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {
  create:boolean = false;
  workshops = [];
  participants = [];
  searchText:string;
  newWorkshop:any = {
    title:'',
    ageMin:'',
    ageMax:'',
    startTime:'',
    endTime:'',
    date:'',
    capacity:'',
    location:'',
    instructor:''
  }

  selectedWorkshop:any;
  constructor(
    private workshopsService:WorkshopsService,
    private participantService:ParticipantsService,
    private flashMessages:FlashMessagesService,
    private router:Router
    ) { }

  ngOnInit() {
    this.workshopsService.getWorkshops()
    .subscribe(
      data => this.workshops = data,
      error => console.log(error.message)
    );

    this.participantService.getParticipants()
    .subscribe(
      data=>this.participants = data,
      error=>console.log(error)
    );

  }

  isFull(shop){
    if(shop.participants.length >= shop.capacity){
      return true;
    }
    else{
      return false
    }
  }

  removeFromArray(arr,x){
    arr.splice(x,1)
  }

  // placeParticipants(){

  //   if(confirm('Are you sure?')){

      

  //     this.canPlace(this.participants,(err,toBeSorted)=>{
  //       this.shuffle(toBeSorted,(err,randomized)=>{
        
          

  //         //Selects workshops from alternates
  //         // for(let i = 0; i < randomized.length; i++){
  //         //   randomized[i].alternateWorkshops = randomized[i].preferredWorkshops;
  //         //   let j = 0;
  //         //   while(randomized[i].selectedWorkshops.length < 2){
  //         //     let rand = Math.floor(Math.random() * (randomized[i].alternateWorkshops.length));
  //         //     if(randomized[i].selectedWorkshops.length > 0){

  //         //       randomized[i].alternateWorkshops.splice(rand,1)
  //         //       randomized[i].selectedWorkshops[0] = randomized[i].alternateWorkshops[rand];

  //         //       rand = Math.floor(Math.random() * (randomized[i].alternateWorkshops.length));
  //         //       randomized[i].alternateWorkshops.splice(rand,1)
  //         //       randomized[i].selectedWorkshops[1] = randomized[i].alternateWorkshops[rand];

  //         //       // console.log("item: " + rand + " | # of selected: " + randomized[i].selectedWorkshops.length + " | # of alternate: " + randomized[i].alternateWorkshops.length);
  //         //       if(j < randomized[i].selectedWorkshops.length){
  //         //         j++;
  //         //       }else{
  //         //         break;
  //         //       }
                
  //         //     } else{
  //         //       // console.log('Stuck Here');



                
                
  //         //     }
  //         //   }
            

  //         // }

  //         // this.workshopsService.getWorkshops()
  //         // .subscribe(workshops => {
  //         //   if(workshops){
  //         //     let k = 0;
  //         //     // for(let k = 0; k < workshops.length;k++){
  //         //       // console.log(workshops[k].participants.length);
  //         //       // console.log(workshops[k].capacity);
  //         //       console.log(typeof workshops[k].capacity)
  //         //       console.log("#" + k + ": " + workshops[k].participants.length >= workshops[k].capacity)
  //         //     // }
                


  //         //   }
  //         // })
  //         let len = randomized.length-1;
  //         while(len != -1){
  //           if(!randomized[len].preferredWorkshops){
  //             len--;
  //           }
  //           for(let j = 0; j < randomized[len].preferredWorkshops.length;j++){
  //             console.log(j);
  //             if(randomized[len].preferredWorkshop[j] === null){
  //               console.log("Removing null")
  //               randomized[len].preferredWorkshops.splice(j,1);
  //             }
  //           }
  //             len--
  //         }
          


          
  //         let i = 0;
  //         len = randomized.length - 1;
  //         // console.log(randomized[0]);
  //         while(randomized[len-1].selectedWorkshops.length !== 2){
  //           var preferred = randomized[i].preferredWorkshops;

  //           //Break if no preferred workshops
  //           if(randomized[len-1].preferredWorkshops.length == 0){
  //             break;
  //           }

  //           //Adds to selected workshops if array not full
  //           if(randomized[i].selectedWorkshops.length < 2){
  //             // var index = preferred.indexOf(randomized[i].selectedWorkshops[(randomized[i].selectedWorkshops.length - 1)]);
  //             let index;
  //             if(randomized[i].preferredWorkshops.length === 1){
  //               index = 0;
  //             } else{
  //               index = ((Math.random() * randomized[i].preferredWorkshops.length)-1);
  //             }
  //             randomized[i].selectedWorkshops.push(preferred.splice(index,1)[0]);
  //             randomized[i].alternateWorkshops = preferred;
  //           }

  //           //Checks to see if end of array and everyone has 2 workshops selected
  //           if(i === (len-1) && (randomized[len-1].selectedWorkshops.length < 2)){
  //             i = 0
  //           } else if(i === (len-1) && (randomized[len-1].selectedWorkshops.length === 2)){
              
  //             //Forces array to only have unique values
  //             while(randomized[i].selectedWorkshops[0].title === randomized[i].selectedWorkshops[1].title){
  //               let rand = ((Math.random() * randomized[i].preferredWorkshops.length)-1)
  //               randomized[i].preferredWorkshops.push(randomized[i].selectedWorkshops[1]);
  //               randomized[i].selectedWorkshops[1] = randomized[i].preferredWorkshops.splice(rand, 1)[0];
  //             }
              

  //             // for(let j = 0; j < randomized.length; j++){
  //             //   this.workshopsService.getWorkshops()
  //             //   .subscribe(data => {
  //             //     let shops = data;
  //             //     this.participantService.updateParticipants(randomized[j])
  //             //     .subscribe((data)=>{
  //             //       if((j==(randomized.length - 1)) && data.success){
  //             //         this.flashMessages.show('Participants have been placed',{cssClass:'alert-success',timeout:3000});
  //             //         this.router.navigate(['/participants']);
  //             //       }
  //             //     },
  //             //     error => console.log(error));
  //             //   })
                
  //             // }

  //             break;
  //           } else{
  //             i++
  //           }
  //         }
  //       })
  //     })
  //   } else{
  //     return;
  //   }
  // }


  canPlace(participants,callback){
      let participantsLen = participants.length;
      let toBeSorted = participants;
      let placed = 0;
      let len = toBeSorted.length;
      while(len){
        if(toBeSorted[len-1] && toBeSorted[len-1].selectedWorkshops.length > 0){
          placed++;
          toBeSorted.splice(len-1,1);
        } else{
          len--
        }
      }
      console.log(placed + ' already placed of ' + participantsLen);
      if(toBeSorted.length === 0){
        return this.flashMessages.show('No participants to place',{cssClass:'alert-warning',timeout:3000});
      }else{
        callback(null,toBeSorted)
      }
  }


  shuffle(array,callback) {
    var t, m = array.length, i;

      // While there remain elements to shuffle…
      while (m) {
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      callback(null, array)
  }

  onSelect(workshop){
    this.router.navigate(['/workshop/'+workshop._id])
    this.selectedWorkshop = workshop;
  }

  update(){
    this.workshopsService.getWorkshops()
    .subscribe(
      data => this.workshops = data,
      error => console.log(error.message)
    );
  }

  addWorkshop(){
    if(this.newWorkshop && confirm('Are you sure?')){
      
      var x = this.newWorkshop.date.split('-');
      this.newWorkshop.date = new Date(x[0], x[1]-1, x[2]);
      this.workshopsService.addWorkshop(this.newWorkshop)
      .subscribe(data => {
        if(data.success){
          this.update();
          this.create = !this.create;
          this.newWorkshop = {
            title:'',
            ageMin:'',
            ageMax:'',
            startTime:'',
            endTime:'',
            date:'',
            capacity:'',
            location:'',
            instructor:''
          }
        }
        else{
          this.flashMessages.show(data.msg,{cssClass:'alert-warning'})
        }
      },
      error => console.log(error));
    } else{
      return;
    }
  }
}
