import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FramePageComponent } from './pages/master/frame-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SobremimPageComponent } from './pages/sobremim-page/sobremim-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FramePageComponent,
    HomePageComponent,
    SobremimPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
