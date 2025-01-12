import React from 'react'

function ScoreCard({player,score}) {
  return (
    <div>
        <h1> Player  {player}</h1>
        <h2> Score : {score} </h2>
    </div>
  )
}

export default ScoreCard