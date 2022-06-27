/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const divOutput = document.querySelector("#output");
const table = document.createElement("table");
divOutput.append(table);

const getUsers = () =>
  fetch(ENDPOINT).then((response) => {
    if (!response.ok) {
      throw new Error("Įvyko klaida: " + response.status);
    }
    return response.json();
  });

initDocument();
function initDocument() {
  getUsers().then((data) => {
    console.log(data);
    let promises = data.map((user) =>
      getUsers(user.brand, user.models).then((brand, models) => {
        user.brand[0] = brand;
        // console.log(user.models);
        user.models[0] = models;

        return user;
      })
    );
    Promise.all(promises).then((result) => {
      users = result;
      arrangeData();
    });
  });
}

function arrangeData() {
  let usersElements = "";
  users.forEach((user) => {
    if (user) {
      usersElements += `
      
      <tr>
            <th>${user.brand}</th>
        </tr>
        <tr>
            <td> 
               Models:<ul>${user.models.join("<li>*</li>")}</ul>
            </td>
        </tr>
       `;
      table.innerHTML = usersElements;
    }
  });
}
