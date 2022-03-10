import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  value = '';

  constructor(public service: ApiServiceService) { }
  @ViewChild('search') search: any;

  ngOnInit(): void {
  }



}
