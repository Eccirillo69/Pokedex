import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeapiService } from 'src/app/service/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemonData: any[] = [];

  constructor(private http: HttpClient, private pokeapiService: PokeapiService, private router: Router) { }

  ngOnInit(): void {
    const pokemonIds: number[] = [];
    while (pokemonIds.length < 3) {
      const id = Math.floor(Math.random() * 898) + 1;
      if (!pokemonIds.includes(id)) {
        pokemonIds.push(id);
      }
    }
  
    pokemonIds.forEach(id => {
      this.pokeapiService.getPokemonById(id).subscribe((data) => {
        this.pokemonData.push(data);
      });
    });
  }

  goToSearch(pokemon: any): void {
    this.router.navigate(['/search'] /*, {queryParams: { name: pokemon.name } , state: { pokemon } }*/);
  }
  
}

