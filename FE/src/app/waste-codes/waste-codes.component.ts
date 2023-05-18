import { Component } from '@angular/core';

@Component({
  selector: 'app-waste-codes',
  templateUrl: './waste-codes.component.html',
  styleUrls: ['./waste-codes.component.css']
})
export class WasteCodesComponent {

}

  //Ho usato questa funzione nel service
  // Funzione per selezionare n elementi casuali da un array
  // pickRandom(array: any[], n: number): any[] {
  //   const result = new Array(n);
  //   let length = array.length;
  //   const taken = new Array(length);

  //   //Controllo se il numero di pokemon richiesti non è maggiore di quelli che ho
  //   if (n > length) {
  //     console.log("Non ho tutti questi pokemon")
  //   }

  //   //
  //   while (n--) {
  //     const x = Math.floor(Math.random() * length);
  //     result[n] = array[x in taken ? taken[x] : x];
  //     taken[x] = --length in taken ? taken[length] : length;
  //   }

  //   return result;
  // }

    //Usavo questo nella home.component.ts
    // ngOnInit(): void {
  //   // Recupera tutti i nomi dei Pokémon dall'API
  //   this.http.get<any>('https://pokeapi.co/api/v2/pokemon')
  //     .subscribe((data) => {
  //       // Seleziona tre nomi a caso
  //       console.log(data);
  //       const allPokemonNames = data.results.map((result: any) => result.name);
  //       const randomNames = this.servizioProva.pickRandom(allPokemonNames, 3);
  
  //       // Recupera i dati dei tre Pokémon selezionati
  //       randomNames.forEach(name => {
  //         this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`)
  //           .subscribe((data) => {
  //             // Aggiungi i dati del Pokémon nell'array this.pokemonData
  //             this.pokemonData.push(data);
  //           });
  //       });
  //     });
  // }



