import { useEffect } from 'react'
import {useHistory} from 'react-router-dom'

const Intro = () => {

  const history = useHistory();

  const moveToHome = () =>{
    history.push('/Board')
  }

  useEffect(() => {
    setTimeout(
    moveToHome
    , 3000)
  }, []);

  return (
    <div className='container text-center'>
        <div class="row align-items-center mt-5">
            <div className='col'>
                <h1>Welcome to the Tic Tac Toe Game</h1>
            </div>
        </div>
        
    </div>
    
  )
}

export default Intro