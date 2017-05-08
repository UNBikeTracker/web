import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs'



import { AppComponent } from './app.component';
import { MaterializeModule } from "angular2-materialize";
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";
import { HomeModule } from "./home/home.module";
import { MapModule } from "./map/map.module";
import { AgmCoreModule } from "@agm/core";
import { MdButtonModule, MdSidenavModule, MdToolbarModule } from "@angular/material";
import { LayoutsModule } from "./layouts/layouts.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    MaterializeModule,
    MdSidenavModule,
    MdButtonModule,
    MdToolbarModule,


    AuthModule,
    HomeModule,
    MapModule,
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
