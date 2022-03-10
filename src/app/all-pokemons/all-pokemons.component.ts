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


  /**
   * function to load all pokemons from the Api
   */
  loadPokemon() {
    for (let i = this.start; i < this.stop; i++) {
      this.service.getPokemon(i).then(async (pokemon: any) => {
        let pokemonData = await pokemon.json();
        console.log(pokemonData);
        this.service.allCurrentPokemons.push(pokemonData);
      });
    }
  }


  /**
   * function to open a window with the details of the clicked pokemon
   * @param poke 
   */
  openDialog(poke: any) {
    this.dialog.open(PokeDetailsComponent);
    this.service.pokeDetail = poke;
    console.log(this.service.pokeDetail)
  }


  /**
   * function to load more pokemons
   */
  loadMore() {
    this.start += 10;
    this.stop += 10;
    this.loadPokemon();
  }


}
