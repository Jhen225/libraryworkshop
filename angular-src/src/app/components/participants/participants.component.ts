import { Component, OnInit, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Http } from '@angular/http'
import { Router } from '@angular/router'
import { ParticipantsService } from '../../services/Participants.service'
import { WorkshopsService } from '../../services/Workshops.service'
import { ValidationService } from '../../services/Validation.service';
import { FilterByPipe } from '../../pipes/filterby.pipe';
import { FlashMessagesService } from 'angular2-flash-messages'



declare var $: any;
@Component({
  selector: 'app-participants',
  // templateUrl: './participants.component.html',
  templateUrl:'./participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  create:boolean = false;
  selectedParticipant:any;
  participants:any = [];
  showPrint:boolean = false;
  logoPath;
  newParticipant:any = {
    firstName:'',
    lastName:'',
    age:'',
    birthDate:'',
    phoneNumber:'',
    phoneNumberOpt:'',
    additional:'None',
    photographPermission:false,
    address:{
      street:'',
      street2:'',
      city:'',
      state:'',
      zipCode:''
    },
    guardian:{
      firstName:'',
      lastName:'',
      phoneNumber:'',
      email:''
    },
    preferredWorkshops:[]
  };
  searchText:string;
  s1:string;
  s2:string;
  s3:string;
  s4:string;
  s5:string;
  s6:string;
  s7:string;
  
  workshops = [];

  constructor(
    private participantService:ParticipantsService,
    private workshopService:WorkshopsService,
    private validationService: ValidationService,
    private flashMessages:FlashMessagesService,
    private eleRef:ElementRef,
    private router:Router
  ) {
    this.logoPath = '/assets/ipllogo.png'
   }

  ngOnInit() {
    
    this.participantService.getParticipants()
    .subscribe(
      (data:any) => {
        this.participants = data;
      //   for(let i = 0; i < this.participants.length;i++){
      //     this.participants[i].selectedWorkshops[].date 
      //   }
        
      },
      error => console.log(error.message)
    );

    this.workshopService.getWorkshops()
    .subscribe(
      data => this.workshops = data,
      error => console.log(error.message)
    );
  }

  update(){
    this.participantService.getParticipants()
    .subscribe(
      (data:any) => this.participants = data,
      error => console.log(error.message)
    );
  }

  print(){
    if(confirm('Are you sure?')){
      console.log('open print pop-up')
      let printContents, popupWin;
      printContents = document.getElementById('print-section').innerHTML;
      popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
      popupWin.document.open();
      popupWin.document.write(`
        <html>
          <head>
            <title>Print tab</title>
            <style>
              #logo{
                width:175px;
                height:100px;
                margin-bottom:25px;
              }
              p{
                text-indent:50px;
              }
              .footer{
                display:flex;
                flex-direction:column;
                justify-content:flex-end;
              }
              .signature{
                
              }
              .footer-address{
                margin-top:50px;
                font-size:10pt;
                text-align:center;
              }
              .pagebreak{
                page-break-after:always;
              }
              .print-header{
                display:flex;
                justify-content:center;
                padding-top: 30px;
              }
              .print-body{
                margin: 0 50px;
                font-size:12pt
              }
              hr{
                border: 1px solid black;
              }
              .print-text{
                margin:10px 0;
                padding-left: 60px;
                // text-align:center;
              }
            </style>
          </head>
          <body onload="window.print();window.close()">${printContents}</body>
        </html>`
      );
      popupWin.document.close();

    }else{
      return;
    }
  }

  onSelect(participant){
    this.router.navigate(['/participant/'+participant._id]);
    this.selectedParticipant = participant;
    // console.log(JSON.stringify(this.selectedParticipant));
  }
  
  addParticipant(){
    
    if(this.newParticipant && confirm('Are you sure?')){
      if(!this.newParticipant.firstName || this.newParticipant.firstName === null || this.newParticipant.firstName === ""){
        return this.flashMessages.show('First Name Required',{cssClass:'alert-warning',timeout:3000});
      }
      if(!this.newParticipant.lastName || this.newParticipant.lastName === null || this.newParticipant.lastName === ""){
        return this.flashMessages.show('Last Name Required',{cssClass:'alert-warning',timeout:3000});
      }
      if(this.newParticipant.age < 5){
        this.flashMessages.show('Must be older than 5',{cssClass:'alert-warning',timeout:3000});
        return;
      } else if(this.newParticipant.age > 17) {
        this.flashMessages.show('Must be younger than 17',{cssClass:'alert-warning',timeout:3000});
        return;
      }

      
      if(this.newParticipant.birthDate){
        var x = this.newParticipant.birthDate.split('-');
        this.newParticipant.birthDate = new Date(x[0], x[1]-1, x[2]);
        this.newParticipant.preferredWorkshops = [this.s1,this.s2,this.s3,this.s4,this.s5,this.s6,this.s7]
      }else{
        this.flashMessages.show('Birthday required',{cssClass:'alert-warning',timeout:3000});
        return;
      }

      if(this.newParticipant.phoneNumberOpt){
        if(!this.validationService.validatePhoneNumber(this.newParticipant.phoneNumberOpt)){
          return this.flashMessages.show('Please enter valid phone number',{cssClass:'alert-warning',timeout:3000});
        }
      }
      if(!this.validationService.validatePhoneNumber(this.newParticipant.phoneNumber) || !this.validationService.validatePhoneNumber(this.newParticipant.guardian.phoneNumber)){
        return this.flashMessages.show('Please enter valid phone number',{cssClass:'alert-warning',timeout:3000});
      }




        this.participantService.addParticipant(this.newParticipant)
        .subscribe(data => {
          console.log(JSON.stringify(data))
          if(data.success){
            this.update();

            this.flashMessages.show('Participant has been added',{cssClass:'alert-success',timeout:3000});
            this.create = !this.create;
            this.newParticipant = {
              firstName:'',
              lastName:'',
              age:'',
              birthDate:'',
              phoneNumber:'',
              phoneNumberOpt:'',
              additional:'None',
              photographPermission:false,
              address:{
                street:'',
                street2:'',
                city:'',
                state:'',
                zipCode:''
              },
              guardian:{
                firstName:'',
                lastName:'',
                phoneNumber:'',
                email:''
              },
              preferredWorkshops:[]
            };
            this.s1 = "";
            this.s2 = "";
            this.s3 = "";
            this.s4 = "";
            this.s5 = "";
            this.s6 = "";
            this.s7 = "";
          }else{
            this.flashMessages.show(data.msg,{cssClass:'alert-warning', timeout:3000})
          }
        },error=>{
          console.log(error);
          this.flashMessages.show('User was not added',{cssClass:'alert-warning',timeout:3000});
        })
      
    } else{
      return;
    }
  }

}
