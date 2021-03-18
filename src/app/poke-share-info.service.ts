import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {


  private stringVar = new Subject<string>();


  getObservableStringVar(): Subject<string> {
    return this.stringVar;
  }

  // tslint:disable-next-line:typedef
  public setStringVar(value: string) {
    // @ts-ignore
    this.stringVar.next(value);
  }
}
