import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

const cardImages = [
  { "src": "/img/croc.jpg", matched: false },
  { "src": "/img/roo.jpg", matched: false },
  { "src": "/img/kookaburra.jpg", matched: false },
  { "src": "/img/possum.jpg", matched: false },
  { "src": "/img/emu.jpg", matched: false },
  { "src": "/img/koala.jpg", matched: false }
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);


  /* Shuffle cards */
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards);
    setTurns(0);
  };

  /* Handle card choices */
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  /* Reset turn after each pair compared */
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  }

  /* Compare card choices and determine if matched */
  useEffect(() => {
    if (choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            };
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      };
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div className="App">
      <h1>🦘🇦🇺 Aussie Animal Match 🇦🇺🦘</h1>
      <button onClick={shuffleCards}>New Game</button>
      <p>Turns: { turns }</p>
      <div className="card-grid">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched === true}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
