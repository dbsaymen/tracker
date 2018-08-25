import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarrComponent}  from "./shared/navbarr/navbarr.component";
import { FooterComponent}  from "./shared/footer/footer.component";
import { TestComponent } from './test/test.component';
import { SocialMediaComponent } from './shared/social-media/social-media.component';
import { Block1Component } from './home-page/block1/block1.component';
import { Block2Component } from './home-page/block2/block2.component';
import { Block3Component } from './home-page/block3/block3.component';
import { Block4Component } from './home-page/block4/block4.component';
import { ToTopBtnComponent } from './shared/to-top-btn/to-top-btn.component';
import { MainPageComponent } from './home-page/main-page/main-page.component'
import { AboutPageComponent } from './about-page/main-page/main-page.component';
import { SideNavbarComponent } from './shared/side-navbar/side-navbar.component';
import { MapPageComponent } from './map-page/map-page.component'
import { AgmDirectionModule } from 'agm-direction';
import { MainLoginComponent } from './user/main/main.component';
import { LoginComponent } from './user/login/login.component';

import {AuthService } from './services/auth.service';
import {AuthGuard} from './auth.guard';
import { NotfoundComponent } from './shared/notfound/notfound.component';


import { MainDashboardNavbarComponent } from './DashBoard/main-dashboard-navbar/main-dashboard-navbar.component';
import { ProfileComponent } from './DashBoard/profile/profile.component';
import { ManageUsersComponent } from './DashBoard/manage-users/manage-users.component';
import { ManageVehiculesComponent } from './DashBoard/manage-vehicules/manage-vehicules.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'services', component: AboutPageComponent},
  { path: '403', component: NotfoundComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', redirectTo: 'dashboard/map', pathMatch: 'full' },
  { path: 'dashboard', component: MainDashboardNavbarComponent, canActivate:[AuthGuard],
    children: [
      { path: '', redirectTo: './map', pathMatch: 'full' },
      {path: 'map', component: MapPageComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'users', component: ManageUsersComponent},
      {path: 'vehicules', component: ManageVehiculesComponent},
    ]

  },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
  ];


@NgModule({
  declarations: [
    AppComponent,
    NavbarrComponent,
    FooterComponent,
    TestComponent,
    SocialMediaComponent,
    Block1Component,
    Block2Component,
    Block3Component,
    Block4Component,
    ToTopBtnComponent,
    MainPageComponent,
    AboutPageComponent,
    SideNavbarComponent,
    MapPageComponent,
    MainLoginComponent,
    LoginComponent,
    NotfoundComponent,
    MainDashboardNavbarComponent,
    ProfileComponent,
    ManageUsersComponent,
    ManageVehiculesComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAe-oIvaq7Bm6Z5YtnYH7c5Fm4aRdYN3cc'
    }),
    AgmDirectionModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],

  providers: [
    AuthService ,
    HttpClientModule,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
