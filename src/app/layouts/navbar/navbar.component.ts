import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {

  @Output() toggleSidebar = new EventEmitter<boolean>();

  onClickOpenSidebar($event) {
    this.toggleSidebar.emit(true);
  }

  constructor() { }

  ngOnInit() {
  }

}
