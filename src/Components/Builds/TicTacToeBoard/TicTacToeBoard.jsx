import React,{useState,useEffect} from 'react'
import calculateWinner from './calculateWinner'
import Square from './Square';
import Board from './Board'
import ScoreCard from './ScoreCard';
function TicTacToeBoard() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [index, setIndex] = useState(null);
    const [mySpot,setMySpot] = useState({index:-1 ,value:""});
    const [refresh, setRefresh] = useState(false);
    const [isWinner, setIsWinner] = useState(false);
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);
    useEffect(() => {
    if(refresh){
      console.log("refresh happened", refresh);
      fetch('http://127.0.0.1:8080//refresh',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },        
        body: JSON.stringify(refresh),
      }).then(res => {
        console.log("refresh")
      })
      .then((mySpot) =>{
        console.log('Success!');
      }).catch(error => {
        console.error('error:',error)
      });
      setRefresh(false);
    }
    },[refresh])

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
  
    return (
      <div >
        <div className="status">{status}</div>
        <div className="score-board">
          <ScoreCard player={"X"} score={scoreX}/>
          <Board 
            xIsNext={xIsNext}
            setXIsNext={setXIsNext}
            isWinner={isWinner} 
            setIsWinner={setIsWinner}
            mySpot={mySpot}
            setMySpot={setMySpot}
            scoreO={scoreO}
            setScoreO={setScoreO}
            scoreX={scoreX}
            setScoreX={setScoreX}
          />
          <ScoreCard player={"O"} score={scoreO}/>
        </div>
      </div>
    );
}

export default TicTacToeBoard