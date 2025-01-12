import React, {useState , useEffect} from 'react'
import Square from './Square'
import calculateWinner from './calculateWinner';

function Board({xIsNext, setXIsNext, 
                isWinner, setIsWinner, 
                mySpot, setMySpot,
                scoreO, setScoreO,
                scoreX, setScoreX }) {

    const [squaresArray, setSquaresArray] = useState(Array(9).fill(null));
    const [refresh, setRefresh] = useState(false);
    const [wholeBoard,setWholeBoard] =useState(false);              

    useEffect(() => {
        fetch('http://127.0.0.1:8080//resetScores',{
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
          },        
          body: JSON.stringify(wholeBoard),
        }).then(res =>
          res.json())
          .then(() =>{
        }).catch(error => {
          console.error('failed to reset:',error)
        });
        if(wholeBoard){
          console.log("reseting scores");
          setScoreO(0);
          setScoreX(0);
          setWholeBoard(false);        
        }
    },[wholeBoard])

    useEffect(() => {
    if(refresh){
      console.log("restarting game");
      fetch('http://127.0.0.1:8080//refresh',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },        
        body: JSON.stringify(refresh),
      }).then(res =>
        res.json())
        .then(() =>{
        console.log('restarted!');
      }).catch(error => {
        console.error('failed to refresh:',error)
      });
      setRefresh(false);
      setIsWinner(false);
      if(wholeBoard){
        setScoreO(0);
        setScoreX(0);
        setWholeBoard(false);
      }
    }
  },[refresh])

    useEffect(() => {     
      if (mySpot.index === null || mySpot.index ==-1){
        fetch('http://127.0.0.1:8080//',{
          method:'GET',
          headers:{
            'Content-Type': 'application/json',
          },        
        }).then(res => 
          res.json())
        .then(() =>
          console.log('starting game!')
        ).catch(error => {
          console.error('error:',error)
    });
    }}, []);

    useEffect(() => {     
      if(mySpot.index != null){
        fetch('http://127.0.0.1:8080//getIndex',{
            method:'POST',
            headers:{
            'Content-Type': 'application/json',
            },        
            body: JSON.stringify(mySpot),
        }).then(res =>
        res.json())
      .then((data) =>{
        if (data.winner){
          console.log('there is a winner', data.winner)
          setIsWinner(() => data.winner )
        }
      }).catch(error => {
        console.error('error:',error)
      });
    }
    }, [mySpot.index]); // The effect runs whenever mySpot.index changes
    
    useEffect(() => {   
      if(isWinner)  {
      fetch('http://127.0.0.1:8080//sendScores',{
            method:'GET',
            headers:{
            'Content-Type': 'application/json',
            },        
      }).then(res =>
      res.json())
      .then((data) =>{
          setScoreO(() => data.scoreO);
          setScoreX(() => data.scoreX);  
      }).catch(error => {
        console.error('error:',error)
      });
    }}, [isWinner]);
    
    
    const refreshBoardClick = (wb) => {
        const newSquaresArray = [...squaresArray];
        for (var i =0; i<9; i++){
            newSquaresArray[i] = "";
        }
        wholeBoard ? console.log("restarting game") : console.log("restarting round")
        setSquaresArray(newSquaresArray);
        setXIsNext(true);
        setRefresh(true);
        setWholeBoard(wb);
        
        for(var i=0;i<9;i++){
            Square(newSquaresArray[i],null );
        }
        return true;
    }
  
    const handleSquareClick = (i) =>{    
        const newSquares = [...squaresArray];
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquaresArray(() =>[...newSquares]);

        if (newSquares[i] == null || isWinner) {
            return;
        }    
        setXIsNext(!xIsNext);     
        setMySpot( prev => ({ ...prev, index: i ,value:newSquares[i]}));               
    };
    return (
        <div style={{padding:'20px'}}>
            <div>
                <Square  value={squaresArray[0]} onClick={()=> handleSquareClick(0)} />
                <Square  value={squaresArray[1]} onClick={()=> handleSquareClick(1)} />
                <Square  value={squaresArray[2]} onClick={()=> handleSquareClick(2)} />
            </div>
            <div >
                <Square  value={squaresArray[3]} onClick={()=> handleSquareClick(3)} />
                <Square  value={squaresArray[4]} onClick={()=> handleSquareClick(4)} />
                <Square  value={squaresArray[5]} onClick={()=> handleSquareClick(5)} />
            </div>
            <div>
                <Square  value={squaresArray[6]} onClick={()=> handleSquareClick(6)} />
                <Square  value={squaresArray[7]} onClick={()=> handleSquareClick(7)} />
                <Square  value={squaresArray[8]} onClick={()=> handleSquareClick(8)} />
            </div>
            <button onClick={() => refreshBoardClick(true)}>Refresh Game</button>
            <button onClick={() => refreshBoardClick(false)}>New Game</button>
        </div>
    )
}

export default Board