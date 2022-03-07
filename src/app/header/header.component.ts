import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search: any;

  constructor(public service: ApiServiceService) { }

  ngOnInit(): void {
  }

  // searchPokemon() {
  // }






}
