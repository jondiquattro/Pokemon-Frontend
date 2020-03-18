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

  const [pokeUrl, setPokeUrl] = useState('https://pokeapi.co/api/v2/pokemon/25');

//   let pokemonImage = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png';
// let pokemonImage =  './resources/download.jpeg';

  async function fetchPokeIndex() {

    let pokeDex = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
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

  async function fetchPoke() {
    let fetchMonster = await superAgent.get(selectedPoke ? selectedPoke : 'https://pokeapi.co/api/v2/pokemon/1/');
    setPoke({...fetchMonster})
  }

  async function findPoke(name) {

  pokeIndex[0].results.forEach((poke) => {

    if(poke.name == name){
      setSelectedPoke(poke.url)
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
        />
        <Right />
      </div>
      <Footer/>
    </div>
  );
}

export default Body;
