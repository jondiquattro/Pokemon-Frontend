import React, {useEffect} from 'react';
import Type from "./statsAndInfo/Type";
import Stats from "./statsAndInfo/Stats";
import PokeInfo from "./statsAndInfo/PokeInfo";

const superAgent = require('superagent');

export function Middle(props) {



  return (
    <div className="middle">
      <Type poke={props.poke}/>

      <div style={{
        backgroundImage: "url('./resources/download.jpeg)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        {/*<img src={pokemonImage} alt={"pokemon"}/>*/}

      </div>
      <Stats poke={props.poke}/>
        <PokeInfo poke={props.poke}/>

    </div>
  );
}
