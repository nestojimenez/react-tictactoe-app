import React, {useState} from 'react'
import Square from './Square';

import usePlayers from '../hooks/usePlayers';

import superset from '../tools/superset.jsx';

const Board = () => {

    

    const myTicTac = [[0,1,2], [3,4,5],[6,7,8]];

    const [player, changePlayer] = usePlayers();   //Player 0 -> X, red and Player 1 -> O, blue , neutral will be 2 and color green

    //State is use to track the result for each player and compare it to an winarray to see if a player won!
    const[playerMoves, setPlayerMoves] = useState([]);   

    const win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 5, 6],
      ];
      const checkForWinner = (gameState) => {
        // get array of box id's
        // can't be a winner in less than 5 turns
        if (gameState.length < 5) return "No Winner Yet";
        let p0 = gameState.filter((item) => {
          if (item.player == 0) return item;
        });
        p0 = p0.map((item) => item.id);
        let px = gameState.filter((item) => {
          if (item.player == 1) return item;
        });
        px = px.map((item) => item.id);
        if (p0 != null && px != null) {
          var win0 = win.filter((item) => {
            return isSuperset(new Set(p0), new Set(item));
          });
          var winX = win.filter((item) => {
            return isSuperset(new Set(px), new Set(item));
          });
        }
        if (win0.length > 0) return "Winner Player O ";
        else if (winX.length > 0) return "Winner Player X ";
        return "No Winner Yet";
      };
      // check if subset is in the set
      function isSuperset(set, subset) {
        for (let elem of subset) {
          if (!set.has(elem)) {
            return false;
          }
        }
        return true;
      }

    let status = checkForWinner(playerMoves); 

    const rPlayer = (id)=>{
        //If you use player from the customHook you will re-render all the buttons when you modify player
        //So you need to pass the function rPlayer to each Square in order to use that function but within the scope of Board
        let nextPlayer = (player +1)%2; 
        setPlayerMoves([...playerMoves, { id: id, player: player }]) 
        console.log(playerMoves);
        changePlayer();
        return nextPlayer;
    }

        return (
          <div
            className="game-board">
              <div className='grid-row'>
                {myTicTac[0].map((element, index)=> <Square rPlayer={rPlayer} changePlayer={changePlayer} key={index} id={element}/>)}
              </div>
              <div className='grid-row'>
                {myTicTac[1].map((element, index)=> <Square rPlayer={rPlayer} changePlayer={changePlayer} key={index} id={element}/>)}
              </div>
              <div className='grid-row'>
                {myTicTac[2].map((element, index)=> <Square rPlayer={rPlayer} changePlayer={changePlayer} key={index} id={element}/>)}
              </div>
              <h1>{status}</h1>
          </div>
        );
}

export default Board
