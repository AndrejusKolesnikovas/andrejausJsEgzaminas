/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a,b){
    this.a = a;
    this.b = b;
   
    this.sum = function sum() {console.log(this.a + this.b)};

    this.suma = function () {
        console.log(this.a + this.b);
    },

    this.subtraction = function () {
        console.log(this.a - this.b);
    };

    this.multiplication = function () {
        console.log(this.a * this.b);
    };

    this.division = function () {
        console.log(this.a / this.b);
    };
};
var skaiciuojam = new Calculator(4, 2);

skaiciuojam.suma();

skaiciuojam.subtraction();

skaiciuojam.multiplication();

skaiciuojam.division();
  