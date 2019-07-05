import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './mainpage/mainpage.component';
import { MakalelerpageComponent } from './makalelerpage/makalelerpage.component';

import { MainmakalelerComponent } from './mainmakaleler/mainmakaleler.component';
import { MakaledetayComponent } from './makaledetay/makaledetay.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainpageComponent, data: { animation: 'heroes' } },
  {path: 'yayinlar', component: MakalelerpageComponent, children: [
    {path: '', component: MainmakalelerComponent},
    {path: 'makaledetay', component: MakaledetayComponent}
  ], data: { animation: 'hero' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
