import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MdSidenavModule } from "@angular/material";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule
  ],
  declarations: [NavbarComponent, SidebarComponent, NotFoundComponent],
  exports:[NavbarComponent, SidebarComponent]
})
export class LayoutsModule { }
