import { useState } from "react"


const usePlayers = () => {
    const [player, setPlayer] = useState(1);

    const changePlayer = () =>{
        
        setPlayer((player + 1)%2);
    }
  return [player, changePlayer]
}

export default usePlayers
