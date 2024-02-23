
const pokemonOlList = document.getElementById('pokemonsOlList') //minha ol pokemons do html

const loadMoreButton = document.getElementById('loadMoreButton')

let offset = 0
const limit = 8


function convertPokemonToLi(pokemon) {
    return ` 
    
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        
            <div class="detail">

                <ol class="types">
                   
                    ${pokemon.types.map((type) => `<li class="type ${type} ">${type}</li>`).join(' ')}
                    
                </ol>
                

                <img src="${pokemon.photo}"
            alt="${pokemon.name}"> 

            </div>
     </li>
            
    `

}


function loadPokemonItens(offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')

        pokemonOlList.innerHTML += newHtml

    })
        .catch((error) => console.error(error))
        .finally(() => console.log('Requisição concluida!'))

}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset,limit)
})


