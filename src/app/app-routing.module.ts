import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './mainpage/mainpage.component';
import { MakalelerpageComponent } from './makalelerpage/makalelerpage.component';

import { MainmakalelerComponent } from './mainmakaleler/mainmakaleler.component';
import { MakaledetayComponent } from './makaledetay/makaledetay.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainpageComponent},
  {path: 'yayinlar', component: MakalelerpageComponent, children: [

    {path: '', component: MainmakalelerComponent},
    {path: ':sayfa', component: MainmakalelerComponent},
    {path: ':kategori/sayfa/:sayfa', component: MainmakalelerComponent},

    {path: ':id/:makaleslug', component: MakaledetayComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
