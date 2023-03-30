import React, { useState } from 'react'

const Square = ({id, rPlayer}) => {
    //const [player, changePlayer] = usePlayers();
    const [sym, setSym]= useState('Click');
    const colors = ['red', 'blue', 'green'];
    const symbol = ['X', 'O', 'Click']
    
    console.log('Each Button ID ', id)

  return (
    <button id={id} onClick={e=>{
        let nextPlayer = rPlayer(id);
        setSym(symbol[nextPlayer]);
        let color = colors[nextPlayer];
        console.log('Player ', nextPlayer);
        e.target.style.background = colors[nextPlayer];
        
    }}>
        {sym}

    </button>
  )
}

export default Square
