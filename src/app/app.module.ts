import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakalelerpageComponent } from './makalelerpage/makalelerpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MainmakalelerComponent } from './mainmakaleler/mainmakaleler.component';
import { MakaledetayComponent } from './makaledetay/makaledetay.component';

import { convertHtmlToText } from './convertHtmlToText.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MakalelerpageComponent,
    MainpageComponent,
    MainmakalelerComponent,
    MakaledetayComponent,

    convertHtmlToText
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'cezaavukatimid'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
