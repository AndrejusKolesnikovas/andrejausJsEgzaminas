/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director,budget) {
      this.title = title;
      this.director = director;
      this.budget = +budget;
    };
    wasExpensive() {
        if (this.budget>100000000) {
             console.log('true')
        } console.log('false')
    }
    // wasExpensive() {console.log(`${this.title} ir ${this.director}`)}
  };
   
  const movie1 = new Movie('One supone time', 'Andrejus Kolesnikovas',150600);
  console.log(movie1);
  movie1.wasExpensive();