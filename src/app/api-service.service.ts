import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  allCurrentPokemons: any = [];
  pokeDetail: any;
  bgColors: any;
  abilities: any;

  pokemonFilter: any = [];

  activeFilter = true;

  // filteredPokemon: any;

  constructor() { }


  /**
   * function to get the Data from the Api
   * @param id 
   * @returns 
   */
  getPokemon(id: number) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }


  /**
   * function to search a pokemon with the input field
   * @param val 
   */
  searchPokemon(val: any) {
    console.log("Search value: ", val);
    let filter = val;
    filter = filter.toLowerCase();
    if (filter.length > 0) {
      console.log("FILTER LENGTH > 0");
      this.activeFilter = false;
      console.log(filter);
      let filteredPokemon = this.allCurrentPokemons.filter((pokemon: { name: string; }) => pokemon.name.startsWith(filter));
      console.log('filter', filteredPokemon);
      this.pokemonFilter = filteredPokemon;
      console.log('pokemonFILTER', this.pokemonFilter);
    } else {
      this.activeFilter = true;
    }
  }


  /**
   * function to give the pokemon cards a individual background color by their type
   * @param pokemon 
   * @returns 
   */
  getBgColors(pokemon: any) {
    let type = pokemon.types[0].type.name;
    if (type == 'grass') {
      this.bgColors = '#94C9AD';
    } else if (type == 'fire') {
      this.bgColors = ' #F7786B';
    } else if (type == 'water') {
      this.bgColors = '#58ABF6';
    } else if (type == 'normal') {
      this.bgColors = '#a8a878';
    } else if (type == 'fighting') {
      this.bgColors = '#c03028';
    } else if (type == 'flying') {
      this.bgColors = '#a890f0';
    } else if (type == 'poison') {
      this.bgColors = '#a040a0';
    } else if (type == 'ground') {
      this.bgColors = '#e0c068';
    } else if (type == 'rock') {
      this.bgColors = '#b8a038';
    } else if (type == 'bug') {
      this.bgColors = '#a8b820';
    } else if (type == 'ghost') {
      this.bgColors = '#705898';
    } else if (type == 'steel') {
      this.bgColors = '#b8b8d0';
    } else if (type == 'fire') {
      this.bgColors = '#f08030';
    } else if (type == 'electric') {
      this.bgColors = '#f8d030';
    } else if (type == 'psychic') {
      this.bgColors = '#f85888';
    } else if (type == 'ice') {
      this.bgColors = '#98d8d8';
    } else if (type == 'dragon') {
      this.bgColors = '#7038f8';
    } else if (type == 'dark') {
      this.bgColors = '#705848';
    } else if (type == 'fairy') {
      this.bgColors = '#ee99ac';
    }
    return this.bgColors;
  }
}
