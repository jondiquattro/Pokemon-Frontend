import React, {useState} from 'react';
const superAgent = require('superagent');



function Middle() {

  const [poke, setPoke]=useState([]);

    let pokemonImage = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png';



  async function fetchPoke(){

    let url = 'https://pokeapi.co/api/v2/';
    let pokedex = 'https://pokeapi.co/api/v2/pokemon/25';
    let pokemonArr = [];

    let fetchPoke = await superAgent.get(pokedex);

    console.log(fetchPoke.body);
    pokemonArr.push(fetchPoke.body)
    setPoke(pokemonArr)


  }
  return (
    <div className="middle">
      <div>
      <button onClick={()=>{fetchPoke()}}>Fetch Pokedex</button>
      </div>

      <div >
      <div>
        <div style={{display: "inline-flex"}}>
          <p>Index #</p>
          {poke.length > 0?
            <div><p>{poke[0].id}</p>
            </div>
          :<p>{"000"}</p>
        }</div>

        <div style={{display: "flex"}}>
          <p style={{marginRight: "10px"}}>Type </p>
          {poke.length > 0?
            <div><p>{poke[0].types[0].type.name}</p>
            </div>
            :<p>{""}</p>
          }</div>

        <div style={{display: "inline-flex"}}>
        <img src={pokemonImage} alt={"pokemon"}/>
          <div style={{width: '100%'}}>
            {/*<p>{poke[0].abilities[0].ability.name}</p>*/}
            {poke.length > 0?
              <div>{poke[0].abilities.map((power, idx)=>
                <p key={idx}>{power.ability.name}</p>
              )}
              </div>
              :<p>{""}</p>
            }
            <div>
            <p>some data some stats or something</p>
            <p>some data some stats or something</p>
            <p>some data some stats or something</p>
            <p>some data some stats or something</p>
            <p>some data some stats or something</p>
            </div>
            
          </div>

        </div>
      </div>

        <div style={{display: "inline-flex"}}>
          <p style={{marginRight: "10px"}} >Species</p>
          {poke.length > 0?
            <p>{poke[0].name}</p>
            :<p>{"Species name"}</p>
          }
        </div>

        <div style={{display: "flex"}}>
          <p style={{marginRight: "10px"}}>Height</p>
          {poke.length > 0?
            <p >{poke[0].height}</p>
            :<p>{"in meters"}</p>
          }
        </div>
        <div style={{display: "flex"}}>
          <p style={{marginRight: "10px"}}>Weight</p>
          {poke.length > 0?
            <p >{poke[0].weight}</p>
            :<p>{"in kilos"}</p>
          }
        </div>

      </div>


    </div>
  );
}

export default Middle;
