import { Component, OnInit } from '@angular/core';
import {PokeDetail, Pokemon} from '../pokemon';
import {PokeAPIServiceService} from '../poke-apiservice.service';
import {PokeShareInfoService} from '../poke-share-info.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit {
  id: string;
  pokes: Pokemon[] = [];
  selectedPokeId: string;
  searchPokeName = '';
  pokeDetail: PokeDetail | undefined;
  constructor(private pokeService: PokeAPIServiceService,
              private pokeShareInfoService: PokeShareInfoService) {
    this.id = '';
    this.selectedPokeId = '';
    this.searchPokeName = '';
    // strictPropertyInitialization
  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokes.push(new Pokemon('' +  index, e.name, e.url));
      });
    } );
  }

  // tslint:disable-next-line:typedef
  go(){
    if (this.selectedPokeId != ''){
      this.pokeService.getPokemonsInfo(this.selectedPokeId).subscribe(data => this.pokeDetail = data);
      this.pokeShareInfoService.setStringVar(this.selectedPokeId);
    }
  }

}
