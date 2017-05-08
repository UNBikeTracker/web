import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from "@agm/core";
import { MdCardModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAgmb0gxg9qRmk96qvnJTXD2rLEzFYZBfY"
    }),
  ],
  declarations: [MapComponent]
})
export class MapModule { }
