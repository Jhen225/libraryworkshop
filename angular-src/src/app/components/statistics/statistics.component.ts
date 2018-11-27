import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ParticipantsService } from '../../services/Participants.service'
import { WorkshopsService } from '../../services/Workshops.service'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit,AfterContentInit {

  constructor(
    private p_service:ParticipantsService,
    private w_service:WorkshopsService
    ) { }


  participants:any = [];
  workshops:any =[];
  total:number = this.participants.length;
  age_counts = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  age_genCount = [{male:0,female:0},{male:0,female:0},{male:0,female:0},{male:0,female:0},{male:0,female:0},{male:0,female:0},{male:0,female:0},{male:0,female:0},{male:0,female:0},{male:0,female:0},{male:0,female:0},{male:0,female:0},{male:0,female:0}]
  male_count:number = 0;
  female_count:number = 0;
  ngOnInit() {
    this.p_service.getParticipants()
    .subscribe(
      data =>  {
        this.setParticipants(data)
        .then((participants) => {
          this.setCounts();
        })
        .catch(error => {
          console.log(error.message)
        })
      },
      error => console.log(error.message)
    );

    this.w_service.getWorkshops()
    .subscribe(
      data => this.workshops = data,
      error => console.log(error.message)
    );
  }

  ngAfterContentInit(){
    this.setCounts();
  }

  setParticipants(data){
    return new Promise((resolve,reject)=>{
      if(data){
        // this.participants = data;
        resolve(this.participants = data)
      }
      else{
        reject("No data given")
      }
    });
  }

  setCounts(){
    
    for(var i = 0; i < this.participants.length;i++){
      var participant = this.participants[i];
      if(participant.age >= 5 && participant.age <= 17){
        this.age_counts[participant.age-5]++
          if(participant.gender === "Male" || participant.gender === "male"){
            this.age_genCount[participant.age-5].male++
            this.male_count++
          }
          else if(participant.gender === "Female" || participant.gender === "female"){
            this.age_genCount[participant.age-5].female++
            this.female_count++
          }
      }


    }
  }

  
}
