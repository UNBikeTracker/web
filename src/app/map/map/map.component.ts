import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title: string = 'My first angular2-google-maps project';
  lat: number = 4.6327382;
  lng: number = -74.084249;

  constructor() { }

  ngOnInit() {
  }
}
