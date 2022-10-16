import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FillterpageComponent } from './fillterpage/fillterpage/fillterpage.component';
const routes: Routes = [
  {path:'',component: HomeComponent},
  { path:'shop-left-side',component:FillterpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
