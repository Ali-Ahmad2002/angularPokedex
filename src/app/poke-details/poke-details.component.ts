import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss']
})
export class PokeDetailsComponent implements OnInit {

  constructor(public service: ApiServiceService, public dialogRef: MatDialogRef<PokeDetailsComponent>) { }
  abilities: any;

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}

