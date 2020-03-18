import React from 'react';


export default function Stats(Props) {
  return (
    <div style={{width: '100%'}}>
      {Props.poke.body?
        <div>{Props.poke.body.abilities.map((power, idx) =>
          <p key={idx}>{power.ability.name}</p>
        )}
        </div>
        : <p>{""}</p>
      }
      <div>
        {Props.poke.body ?
          <div>{Props.poke.body.stats.map((stat, idx) =>
            <div key={idx}>
              <p>{stat.stat.name}</p>
              <p style={{backgroundColor: "blue", width: `${stat.base_stat * 1.5}px`}}>{stat.base_stat}</p>
            </div>
          )}
          </div>
          : <p>{""}</p>
        }
      </div>

    </div>

  );
}