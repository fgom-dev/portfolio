import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FramePageComponent } from './pages/master/frame-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SobremimPageComponent } from './pages/sobremim-page/sobremim-page.component';
import { BackgroundComponent } from './components/shared/background/background.component';
import { ProjetosPageComponent } from './pages/projetos-page/projetos-page.component';
import {CardComponent} from "./components/shared/card/card.component";
import {HttpClientModule} from "@angular/common/http";
import { GraphQLModule } from './graphql.module';
import {ReposService} from "./services/repos.data.service";

@NgModule({
  declarations: [
    AppComponent,
    FramePageComponent,
    HomePageComponent,
    SobremimPageComponent,
    BackgroundComponent,
    ProjetosPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarComponent,
    CardComponent,
    HttpClientModule,
    GraphQLModule,
  ],
  providers: [ReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
