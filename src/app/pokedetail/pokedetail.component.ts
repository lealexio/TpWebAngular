import {Component, Input, OnInit} from '@angular/core';
import {PokeDetail} from '../pokemon';
import {PokeShareInfoService} from '../poke-share-info.service';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css']
})
export class PokedetailComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('detail')
  detail: PokeDetail | undefined;
  constructor(private pokeShareInfoService: PokeShareInfoService) {
    this.pokeShareInfoService.getObservableStringVar().subscribe(e => console.log('e' + e));
  }

  ngOnInit(): void {

  }

}
