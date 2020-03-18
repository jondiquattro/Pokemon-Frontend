import React from 'react';


export default function PokeInfo(props) {
  return (
    <div className={"info"}>
      <div>
        <p style={{marginRight: "10px"}}>Height</p>
        {props.poke.body ?
          <p>{props.poke.body.height}</p>
          : <p>{"in meters"}</p>
        }
      </div>
      <div>
        <p style={{marginRight: "10px"}}>Weight</p>
        {props.poke.body ?
          <p>{props.poke.body.weight}</p>
          : <p>{"in kilos"}</p>
        }
      </div>
    </div>

  );
}