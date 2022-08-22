import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscGolfComponent } from './disc-golf/disc-golf.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'disc',
    component: DiscGolfComponent,
  },
  { 
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
