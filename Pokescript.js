
const pokeContainer = document.querySelector('.poke-container');


// let kantoPoke = []

// fetchPokemon("https://pokeapi.co/api/v2/pokemon/${id}/")
//     .then(response => response.json())
//     .then(data => kantoPoke = data)
//     .then(kantoPoke => console.log(kantoPoke))
    // .then( () => printPoke(kantoPoke))


// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));


// let kantoPoke = []

// fetchPokemon(`https://pokeapi.co/api/v2/pokemon`)
//     .then(response => response.json())
//     .then(json => kantoPoke = json)
//     .then( () => printPoke(kantoPoke))


// let card = document.querySelector("#allPoke")


// let printPoke = (pokemons) => {
//     pokemons.forEach((element) =>{
//         let bodyCard = document.createElement("div")

//         bodyCard.classList.add("card", "m-3")

//         card.appendChild()
   
//     })
// }


let a = 1
let b = 150


function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
        createPokemon(data);
        spinner.style.display = 'none';
        console.log(data)
    });
}


function fetchPokemons(a, b) {
    spinner.style.display = 'block';
    for (let i = 1; i <= 1 + 150; i++) {
        fetchPokemon(i);
    }
}


function createPokemon(pokemon) {
    const Card = document.createElement('div');
    Card.classList.add('card');

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    cardContainer.setAttribute("id","cardcontainer")

   
    const card = document.createElement('div');
    card.classList.add('pokemon-block');
    cardContainer.setAttribute("id","pokeblock")
    

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;


    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent= `#${pokemon.id.toString().padStart(3,0)}`;
    number.classList.add("numPoke")
    // pokemon-block.classList.add("pokeid")

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name

    const zonaButtons = document.createElement("div")
    zonaButtons.classList.add("buttonZone")

    const button1 = document.createElement("button")
    button1.classList.add("infoStats")

    const button2 = document.createElement("button")
    button2.classList.add("infoStory")

    const button3 = document.createElement("button")
    button3.classList.add("infoType")

    const divider = document.createElement("div")
    divider.classList.add("divider")
    
    const infoPoke = document.createElement("div")
    infoPoke.classList.add("infoZone")

    const titleInfo = document.createElement("h2")
    titleInfo.classList.add("infoTitle")
    titleInfo.textContent = "Description"

    const typeList = document.createElement("ul")
    typeList.classList.add("typeFormat")
    const weightList = document.createElement("ul")
    weightList.classList.add("weightFormat")
    const abilityList = document.createElement("ul")
    abilityList.classList.add("abilityFormat")
    const statHpList = document.createElement("ul")
    statHpList.classList.add("statFormat")

    pokemon.types.forEach(type => {
        const typeElement = document.createElement("li")
        typeElement.innerText = type.type.name
        typeList.appendChild(typeElement)
    })

        const weightElement = document.createElement("li")
        weightElement.innerText = pokemon.weight
        weightList.appendChild(weightElement)


    
    pokemon.abilities.forEach(ability => {
        const abilityElement = document.createElement("li")
        abilityElement.innerText = ability.ability.name
        abilityList.appendChild(abilityElement)
    })

    pokemon.stats.forEach(statHp => {
        const statHpElement = document.createElement("li")
        statHpElement.innerText = statHp.stat.name + (": ") + statHp.base_stat
        statHpList.appendChild(statHpElement)
    })


    const textInfo = document.createElement("p")
    textInfo.classList.add("info")
    textInfo.textContent = JSON.stringify(pokemon.types)
    textInfo.textContent = JSON.stringify(pokemon.weight)
    textInfo.textContent = JSON.stringify(pokemon.abilities)
    textInfo.textContent = JSON.stringify(pokemon.stats)



    Card.appendChild(cardContainer);
    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(zonaButtons)
    card.appendChild(button1)
    card.appendChild(button2)
    card.appendChild(button3)
    card.appendChild(divider)
    card.appendChild(infoPoke)
    infoPoke.appendChild(titleInfo)
    infoPoke.appendChild(typeList)
    infoPoke.appendChild(weightList)
    infoPoke.appendChild(abilityList)
    infoPoke.appendChild(statHpList)
    

    cardContainer.appendChild(card);
    pokeContainer.appendChild(Card);

}

// let list = document.querySelector("#list")
// let search = document.querySelector("#search")

// search.addEventListener("keypress", (event) => {
//     list.innerHTML = "";
  
//     // if (event.target.value === "") {
//     //   printUsers(users);
//     // } else {
//     let searching = users.filter(({ name }) =>
//       name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()),  
//       console.log(searching)
//     );
//     printUsers(searching);
//     // }
//   });



function removeChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

fetchPokemons(a, b);