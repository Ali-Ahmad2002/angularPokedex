import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss']
})
export class PokeDetailsComponent implements OnInit {

  constructor(public service: ApiServiceService) { }

  ngOnInit(): void {
  }

  showAbilitys(detail: any) {
    let theAbility = detail;
    // console.log('ab1', theAbility);
    // return theAbility;
    for (let i = 0; i < theAbility.length; i++) {
      let ab = theAbility[i]['ability']['name'];
      console.log('ab:', ab);
      // return ab['ability']['name'];
    }
    // for (let i = 0; i < theAbility.length; i++) {
    //   let ab = theAbility[i]['ability']['name'];
    //   console.log('abs:', ab);
    //   return ab;
    // }


    // return ab[i]
    // this.service.abilities = ab;
    // return this.service.abilities;
  }
}

