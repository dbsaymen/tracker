import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

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


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'services', component: AboutPageComponent},
  { path: 'map', component: MapPageComponent},
  { path: 'services/:id', component: TestComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
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

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAe-oIvaq7Bm6Z5YtnYH7c5Fm4aRdYN3cc'
    })

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
