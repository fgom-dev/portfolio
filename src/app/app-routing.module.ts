import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FramePageComponent} from "./pages/master/frame-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {SobremimPageComponent} from "./pages/sobremim-page/sobremim-page.component";
import {ProjetosPageComponent} from "./pages/projetos-page/projetos-page.component";

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children:[
      { path: '', component: HomePageComponent },
      { path: 'sobremim', component: SobremimPageComponent },
      { path: 'projetos', component: ProjetosPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
