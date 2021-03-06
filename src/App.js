import React, { useEffect } from "react"
// import Card from "./components/Card"
import { cardData } from './cardData'

function App() {

  const [score, setScore] = React.useState(0)

  const [clickedCards, setClickedCards] = React.useState([])

  const [bestScore, setBestScore] = React.useState(0)

  const shuffleCards = () => {
    cardData.sort((a,b) => 0.5 - Math.random());
  }
  
  const resetGame = () => {
    let currentScore = score
    if (currentScore > bestScore){
      setBestScore(currentScore)
    }
    setScore(0)
    setClickedCards([])
    alert('Reset game!')
  }


  useEffect(() => {
    shuffleCards()
  }, [score])

  const cards = cardData.map(card => {
    return (
      <div onClick={() => {addClickedCard(card.id)}} key={card.id} className="card--container">
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

  function addClickedCard(id) {
    if (clickedCards.includes(id)){
      resetGame()
    } else {
      setClickedCards(prevClickedCards => {
        return [...prevClickedCards, id]
      })
      upScore()
      console.log(clickedCards)
    }
  }

  return (
    <div>
      <h1 className="title">Maplestory Memory</h1>
      <div className="score--container">
        <span className="score--current">Score: {score}</span>
        <span className="score--best">Best score: {bestScore}</span>
      </div>
      <div className="cards--container">
      {cards}
      </div>
    </div>
  );
}

export default App;
