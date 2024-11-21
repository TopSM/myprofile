import React,{useState,useEffect} from 'react'
import calculateWinner from './calculateWinner'
import Square from './Square';
function TicTacToeBoard() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [index, setIndex] = useState(null);
    const [mySpot,setMySpot] = useState({index:-1 ,value:""});
    const [refresh, setRefresh] = useState(false);
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
    useEffect(() => {
     
      if (index === null || index ==-1){
        console.log("index", index)
        fetch('http://127.0.0.1:8080//',{
          method:'GET',
          headers:{
            'Content-Type': 'application/json',
          },        
        }).then(res => {
          console.log("starting game")
        })
        .then((mySpot) =>{
          console.log('Success!');
        }).catch(error => {
          console.error('error:',error)
        });
      }
      if(index != null){
      console.log(index); // Logs the updated value
      fetch('http://127.0.0.1:8080//getIndex',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },        
        body: JSON.stringify(mySpot),
      }).then(res => {
        console.log("getting index")
      })
      .then((mySpot) =>{
        console.log('Success index!');
      }).catch(error => {
        console.error('error:',error)
      });
    }
    }, [index]); // The effect runs whenever `index` changes


    const handleClick = (i) => {
      if (squares[i] || calculateWinner(squares)) {
        return;
      }
      const newSquares = [...squares];
      newSquares[i] = xIsNext ? 'X' : 'O';
      setSquares(newSquares);
      setXIsNext(!xIsNext);     
      setIndex(i);
      setMySpot({index: i ,value:newSquares[i].toString()});
      
    };

    const refreshBoardClick = () => {
        const newSquares = [...squares];
        for (var i =0; i<9; i++){
            newSquares[i] = "";
        }
        setSquares(newSquares);
        setXIsNext(true);
        setRefresh(true);
        console.log(refresh)
        for(var i=0;i<9;i++){
            Square(newSquares[i],null );
        }
        return true;
    }
  
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
  
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
        <button onClick={() => refreshBoardClick()}>Refresh Game</button>

      </div>
    );
}

export default TicTacToeBoard