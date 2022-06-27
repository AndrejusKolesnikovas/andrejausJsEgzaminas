/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
'use strict'
// import {getLogin} from "./data/users.js";
const ENDPOINT = 'https://api.github.com/users';
let users = {};

const divOutput = document.querySelector('#output');


const fetchData = async () => {
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      users.avatars= await response.json();
      populateTable(users.avatars);
    }
  } catch (error) {
    console.error(error);
  }
};
document.getElementById('btn').addEventListener('click', fetchData)

// const btnConteiner = document.querySelector(".btn-container");
// btnConteiner.addEventListener("click", fetchData);


function populateTable(avatars) {
  const divOutput = document.getElementById('output');
  divOutput.innerHTML = '';
 
  avatars.forEach((card) => {
    const personCard = document.createElement('ul');

    const loginLi = document.createElement('li');
    loginLi.innerText = card.login;

    const img = document.createElement('img');
    img.src = card.avatar_url;
    img.setAttribute('alt', 'UserPicture');
    const avatar_urlLi = document.createElement('li');
    avatar_urlLi.append(img);

    personCard.append(loginLi, avatar_urlLi);
   
    divOutput.append(personCard);
  });
  document.querySelector('p').innerHTML = " ";
};