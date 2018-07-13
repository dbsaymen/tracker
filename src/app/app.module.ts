import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarrComponent}  from "./shared/navbarr/navbarr.component";
import { FooterComponent}  from "./shared/footer/footer.component";
import { TestComponent } from './test/test.component';
import { SocialMediaComponent } from './shared/social-media/social-media.component';
import { Block1Component } from './home-page/block1/block1.component';
import { Block2Component } from './home-page/block2/block2.component';
import { Block3Component } from './home-page/block3/block3.component';
import { Block4Component } from './home-page/block4/block4.component';
import { ToTopBtnComponent } from './shared/to-top-btn/to-top-btn.component'
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
    ToTopBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
