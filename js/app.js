import C3PO from "/js/C3PO.js";
import character from "/js/component/character.js";

console.log(C3PO);
const container = document.querySelector(".container");
container.innerHTML += character(C3PO);

MakeCharacter(C3PO);

function MakeCharacter(characterJSON) {
    const characterDiv = document.createElement("div");

    const name = document.createElement("h1");
    name.innerText = characterJSON.name;
    characterDiv.append(name);

    const birthYear = document.createElement("p");
    birthYear.innerText = "Born: " + characterJSON.birth_year;
    characterDiv.append(birthYear);

    const height = document.createElement("p");
    height.innerText = "Height: " + characterJSON.height;
    characterDiv.append(height);

    container.append(characterDiv);
}