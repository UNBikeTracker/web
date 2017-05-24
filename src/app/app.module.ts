import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';

import { MaterialModule, MdButtonModule, MdSidenavModule, MdToolbarModule, MdIconModule  } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from "angular2-materialize";

import { LayoutsModule } from "./layouts/layouts.module";
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";
import { HomeModule } from "./home/home.module";
import { MapModule } from "./map/map.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    FormsModule,
    HttpModule,

    MaterializeModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,

    AuthModule,
    HomeModule,
    MapModule,
    LayoutsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
