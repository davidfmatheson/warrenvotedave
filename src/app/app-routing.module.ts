import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { IssuesComponent } from './issues/issues.component';
import { PressComponent } from './press/press.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'issues', component: IssuesComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'press', component: PressComponent
  },
  {
    path: 'donate', component: DonateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
