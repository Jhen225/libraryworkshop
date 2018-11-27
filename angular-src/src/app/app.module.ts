import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { HomeComponent } from './components/home/home.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ParticipantComponent } from './components/participant/participant.component';
import { WorkshopComponent } from './components/workshop/workshop.component'
import { StatisticsComponent } from './components/statistics/statistics.component'
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { ValidationService } from './services/Validation.service'
import { FlashMessagesModule } from 'angular2-flash-messages'
import { AuthService } from './services/auth.service'
import { ParticipantsService } from './services/Participants.service';
import { WorkshopsService } from './services/Workshops.service';
import { UserService } from './services/User.service';

import { AuthGuard } from './services/auth.guard';

import { SortByLastPipe } from './pipes/sort-by-last.pipe';
import { OrderByDatePipe } from './pipes/order-by-date.pipe';
import { FilterByPipe } from './pipes/filterby.pipe';




const appRoutes:Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  // {path:'**',redirectTo:'/login',pathMatch:'full'},
  {path:'statistics', component:StatisticsComponent,canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent,canActivate:[AuthGuard]},
  {path:'participants',component:ParticipantsComponent,canActivate:[AuthGuard]},
  {path:'participant/:id',component:ParticipantComponent,canActivate:[AuthGuard]},
  {path:'workshops',component:WorkshopsComponent,canActivate:[AuthGuard]},
  {path:'workshop/:id',component:WorkshopComponent,canActivate:[AuthGuard]},
  {path:'schedule', component:ScheduleComponent,canActivate:[AuthGuard]},
  {path:'settings',component:SettingsComponent,canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParticipantsComponent,
    LoginComponent,
    RegisterComponent,
    WorkshopsComponent,
    HomeComponent,
    ScheduleComponent,
    ParticipantComponent,
    WorkshopComponent,
    StatisticsComponent,
    PageNotFoundComponent,
    OrderByDatePipe,
    FilterByPipe,
    SettingsComponent,
    SortByLastPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    CommonModule
  ],
  providers: [ValidationService,AuthService,ParticipantsService,WorkshopsService,AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
