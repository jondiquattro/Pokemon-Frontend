import React from 'react';

export default function Type(Props) {
  return (
    <div>
      <div style={{display: "flex", fontSize: "1.5em", height: "3vh"}}>
        <div style={{marginRight: "10px"}}>Species: </div>
        {
          Props.poke.body ? <div >{Props.poke.body.name}</div> : <p>{""}</p>
        }
      </div>
      <div style={{display: "inline-flex", fontSize: "1.5em", height: "3vh"}}>
        <div>Index: #</div>
        {Props.poke.body ? <div> {Props.poke.body.id} </div> : <p>{""}</p>
        }
      </div>

      <div style={{display: "flex", fontSize: "1.5em", height: "3vh"}}>
        <div style={{marginRight: "10px"}}>Type: </div>
        {Props.poke.body ? <div>{Props.poke.body.types[0].type.name}</div>
          : <p>{""}</p>
        }
      </div>


    </div>
  );
}