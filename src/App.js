import React, { useEffect } from "react"
// import Card from "./components/Card"
import { cardData } from './cardData'

function App() {

  const [score, setScore] = React.useState(0)

  const shuffleCards = () => {
    cardData.sort((a,b) => 0.5 - Math.random());
  }

  useEffect(() => {
    shuffleCards()
  }, [score])

  const cards = cardData.map(card => {
    return (
      <div className="card--container">
        <h2>{card.name}</h2>
        <img src={card.img} alt="maplestory mob"/>
      </div>
    )
  })

  function upScore() {
    setScore(prevScore => {
      return prevScore + 1
    })
  }

  return (
    <div>
      <h1 className="title">Maplestory Memory</h1>
      <div className="score--container">
        <span className="score--current">Score: {score}</span>
        <span className="score--best">Best score: todo</span>
        <button onClick={upScore}>Up Score</button>
      </div>
      <div className="cards--container">
      {cards}
      </div>
    </div>
  );
}

export default App;
