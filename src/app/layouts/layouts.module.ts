import { MdButtonModule, MdSidenavModule, MdToolbarModule, MdIconModule  } from "@angular/material";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule,
    RouterModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule
  ],
  declarations: [NavbarComponent, SidebarComponent, NotFoundComponent],
  exports:[NavbarComponent, SidebarComponent]
})

export class LayoutsModule { }
