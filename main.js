const d=document;
const $divs=d.querySelectorAll(".card");
const $numOne=d.querySelector("#one");
const $numTwo=d.querySelector(".two");
const $numThree=d.querySelector(".three");
const $arrowRight=d.querySelector(".arrowRight")
const $arrowLeft=d.querySelector(".arrowLeft")

let positionGlobalEnd=0; // Numero de la posicion de la paginacion donde va terminar;
let positionGlobalStart=0; // Numero de la posicion de la paginacion donde va iniciar;
async function fetchPokemonList(limit = 6, offset = 0) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = await response.json();

        const pokemons = data.results.map(pokemon => {
            const id = pokemon.url.match(/\/pokemon\/(\d+)\//)[1]; // Captura el ID con regex
            return { name: pokemon.name, id: parseInt(id, 10) }; // Devuelve un objeto con nombre e ID
        });

        return pokemons;
    } catch (error) {
        console.error('Error fetching Pokémon list:', error);
    }
}

// Ejemplo de uso:
(async () => {
    const pokemonList = await fetchPokemonList(6, 0);
    let contador=0;
    pokemonList.forEach(e=> {
            let $h2=$divs[contador].querySelector('h2');
            let $img=$divs[contador].querySelector('img');
            $img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.id}.png`
            $h2.innerHTML=`${e.name}`
            contador++

            //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
    });
})();


d.addEventListener("click",(e)=>{
    if(e.target === $numOne){
        (async () => {
            const pokemonList = await fetchPokemonList(6, 0);
            let contador=0;
            pokemonList.forEach(e=> {
                    let $h2=$divs[contador].querySelector('h2');
                    let $img=$divs[contador].querySelector('img');
                    if (!$divs || !Array.isArray($divs)) {
                        $img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.id}.png`
                    $h2.innerHTML=`${e.name}`
                    contador++
        
                    }
                    
                    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
            });
        })();
        positionGlobalEnd=6
        positionGlobalStart=0
        $numOne.classList+='active'
        $numTwo.classList.remove('active')
        $numThree.classList.remove('active')

    }
    
    
    if(e.target === $numTwo){
        (async () => {
            const pokemonList = await fetchPokemonList(12, 6);
            let contador=0;
            pokemonList.forEach(e=> {
                    let $h2=$divs[contador].querySelector('h2');
                    let $img=$divs[contador].querySelector('img');
                    if (!$divs || !Array.isArray($divs)) {
                        $img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.id}.png`
                        $h2.innerHTML=`${e.name}`
                        contador++
                    }
                    
        
                    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
            });
        })();
        positionGlobalEnd=12
        positionGlobalStart=6
        $numTwo.classList+='active'
        $numOne.classList.remove('active')
        $numThree.classList.remove('active')
    }
 

    if(e.target === $numThree){
        (async () => {
            const pokemonList = await fetchPokemonList(18, 12);
            let contador=0;
            pokemonList.forEach(e=> {
                    let $h2=$divs[contador].querySelector('h2');
                    let $img=$divs[contador].querySelector('img');
                    if (!$divs || !Array.isArray($divs)) {
                        $img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.id}.png`
                        $h2.innerHTML=`${e.name}`
                        contador++
            

                    }
                    
                    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
            });
        })();
        positionGlobalEnd=18
        positionGlobalStart=12
        $numThree.classList+='active'
        $numTwo.classList.remove('active')
        $numThree.classList.remove('active')
    }
    



    if(e.target===$arrowRight){
        (async () => {
            const pokemonList = await fetchPokemonList(positionGlobalStart + 6 , positionGlobalEnd + 6);
            let contador=0;
            pokemonList.forEach(e=> {
                    let $h2=$divs[contador].querySelector('h2');
                    let $img=$divs[contador].querySelector('img');
                    $img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.id}.png`
                    $h2.innerHTML=`${e.name}`
                    contador++
        
                    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
            });
        })();
        positionGlobalEnd=positionGlobalEnd + 12
        positionGlobalStart=positionGlobalStart + 6 
    }

    if(e.target===$arrowLeft){
        if(positionGlobalStart > 0){
            (async () => {
                const pokemonList = await fetchPokemonList(positionGlobalStart - 6 , positionGlobalEnd - 12 );
                let contador=0;
                pokemonList.forEach(e=> {
                        let $h2=$divs[contador].querySelector('h2');
                        let $img=$divs[contador].querySelector('img');
                        $img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.id}.png`
                        $h2.innerHTML=`${e.name}`
                        contador++
            
                        //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
                });
            })();
        }
        
        positionGlobalEnd=positionGlobalEnd  - 12
        positionGlobalStart=positionGlobalStart -  6 
    }
   

})
