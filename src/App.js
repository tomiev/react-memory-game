import { useState } from 'react';
import './App.css';

const cardImages = [
  { "src": "/img/croc.jpg" },
  { "src": "/img/roo.jpg" },
  { "src": "/img/kookaburra.jpg" },
  { "src": "/img/possum.jpg" },
  { "src": "/img/emu.jpg" },
  { "src": "/img/koala.jpg" }
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  /* Shuffle cards */
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div className="App">
      <h1>🦘🇦🇺 Aussie Animal Match 🇦🇺🦘</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <div className='card' key={card.id}>
            <div>
              <img className="front" src={card.src} alt="Card front" />
              <img className="back" src="/img/cover.jpg" alt="Card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
