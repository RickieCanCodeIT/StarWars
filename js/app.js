import character from "/js/component/character.js";

const container = document.querySelector(".container");

fetch("https://swapi.dev/api/people/4")
    .then(res => res.json())
    .then(jsonData => {
        console.log(jsonData);
        container.innerHTML += character(jsonData);
        jsonData.films.forEach(filmElement => {
            fetch(filmElement)
                .then(res => res.json())
                .then(filmData => {
                    const filmDiv = document.querySelector(".filmDiv");
                    const aTag = document.createElement("a");
                    console.log(filmData);
                    aTag.innerText = filmData.title + "";
                    aTag.setAttribute("href", filmData.url);
                    filmDiv.appendChild(aTag);
                    filmDiv.innerHTML += "<br>";
                })
        });
        //MakeCharacter(C3PO);
    })




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