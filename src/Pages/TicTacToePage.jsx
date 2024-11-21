import React,{useState} from 'react'
import TicTacToeBoard from '../Components/Builds/TicTacToeBoard/TicTacToeBoard.jsx'
function TicTacToePage() {
    const [squares, setSquares] = useState(Array(9).fill(""));
   
    return (
        
        <div className='tic-tac-toe-page'>
            TicTacToePage
            <TicTacToeBoard/>
        </div>
    )
}

export default TicTacToePage