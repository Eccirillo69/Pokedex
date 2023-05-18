import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private url= 'https://pokeapi.co/api/v2';

  private pokemonNameSource = new BehaviorSubject<string>("");
  currentPokemonName = this.pokemonNameSource.asObservable();

  constructor(private http: HttpClient) { }

  changePokemonName(name: string) {
    this.pokemonNameSource.next(name)
  }

  getPokemonById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/pokemon/${id}`);
  }

  getPokemonByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.url}/pokemon/${name}`);
  }

  getPokemonInfo(nameOrId: string): Observable<any> {
    return this.http.get<any>(`${this.url}/pokemon/${nameOrId}`);
  }
}

