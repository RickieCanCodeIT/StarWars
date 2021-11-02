import film from "/js/component/film.js";
export default function character(characterJSON) {
    return `
        <div>
            <h1>Name: ${characterJSON.name}</h1>
            <p>Birth Year: ${characterJSON.birth_year}</p>
            <p>Height: ${characterJSON.height}</p>
            <div class="filmDiv">
                ${characterJSON.films.map(film).join("")}
            </div>
        </div>
    `;
}