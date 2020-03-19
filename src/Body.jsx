import React, {useEffect, useState} from 'react';
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import Right from "./Right";
import Footer from "./Footer";
import {Middle} from "./Middle";

const superAgent = require('superagent');

function Body() {

  const [poke, setPoke] = useState({});
  const [pokeIndex, setPokeIndex] = useState([]);
  const [selectedPoke, setSelectedPoke] = useState();
  const [pokemonImage, setPokemonImage] = useState("https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png");


  async function fetchPokeIndex() {

    let pokeDex = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=101';
    let pokemonArr = [];

    let fetchPoke = await superAgent.get(pokeDex);

    pokemonArr.push(fetchPoke.body);
    setPokeIndex(pokemonArr)
  }

  useEffect(()=>{
    fetchPokeIndex();
  },[]);


  useEffect(()=>{
    fetchPoke();
  },[pokeIndex, selectedPoke]);


  function parseImageFromIndex(index){
    if(index <= 9){
      return `00${index}`
    }
    if(index > 9 && index <= 99 ){
      return `0${index}`;
    }
    if(index > 99 && index <= 999 ){
      return `${index}`;
    }
    else{
      return index;
    }
  }

  async function fetchPoke() {
    let fetchMonster = await superAgent.get(selectedPoke ? selectedPoke : 'https://pokeapi.co/api/v2/pokemon/25/');
    setPoke({...fetchMonster})
  }

  async function findPoke(name) {

  pokeIndex[0].results.forEach((poke, idx) => {

    if(poke.name == name){
      setSelectedPoke(poke.url);
     parseImageFromIndex(idx)
      setPokemonImage(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ parseImageFromIndex(idx +1)}.png`)
    }

  });

}

  const handleChange = event => {
    findPoke(event.target.value);
  };

  return (
    <div className="App">
      <Header/>
      <div className={"content"}>
        <LeftSideBar pokeIndex={pokeIndex}
                     setPoke={setPoke}
                     poke={poke}
                     handleChange={handleChange}/>
        <Middle
          setPoke={setPoke}
          poke={poke}
          pokeIndex={pokeIndex}
          pokemonImage={pokemonImage}
        />
        <Right />
      </div>
      <Footer/>
    </div>
  );
}

export default Body;
