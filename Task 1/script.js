/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
'use strict'
const kgIvedimoLaukelis = document.getElementById('search');
document.querySelector('#submit-btn').addEventListener('click',konvertuoti);

function konvertuoti(event) {
    event.preventDefault();
    const kg = +kgIvedimoLaukelis.value;
    const svarai = kg * 2.2046;
    const gramai = kg / 0.0010000;
    const uncijos = kg * 35.274
    const atvaizduoju = `
    <ul class="style">
    <li>Svarai(lb):${svarai}</li>
    <li>Gramai (g)${gramai}</li>
    <li>Uncijos (oz)${uncijos}</li>
  </ul>`;
  document.getElementById('output').innerHTML = atvaizduoju;
  document.getElementsByClassName('style')[0].style.marginLeft = '20vh';
  document.getElementsByClassName('style')[0].style.color = '#000';

};
