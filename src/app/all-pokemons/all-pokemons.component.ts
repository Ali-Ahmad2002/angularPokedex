import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { MatDialog } from '@angular/material/dialog';
import { PokeDetailsComponent } from '../poke-details/poke-details.component';

@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.scss']
})
export class AllPokemonsComponent implements OnInit {
  @ViewChild('pokeContainer') pokeContainer: any;

  start = 1;
  stop = 10;

  // bgColors: any;

  constructor(public service: ApiServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon() {
    for (let i = this.start; i < this.stop; i++) {
      this.service.getPokemon(i).then(async (pokemon: any) => {
        let pokemonData = await pokemon.json();
        console.log(pokemonData);
        this.service.allCurrentPokemons.push(pokemonData);
        let pokeType = pokemonData.types[0].type.name

      });
    }
  }

  openDialog(poke: any) {
    this.dialog.open(PokeDetailsComponent);
    this.service.pokeDetail = poke;
    console.log(this.service.pokeDetail)
  }

  loadMore() {
    this.start += 10;
    this.stop += 10;
    this.loadPokemon();
  }

}
