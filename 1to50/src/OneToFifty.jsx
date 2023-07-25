import { useEffect, useState } from 'react';
import './style.css';
import Card from './Card';

function OneToFifty() {
  const [target, setTarget] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [initCards, setInitCards] = useState([]);
  // let initCards = [];

  const init = () => {
    const arr = [];
    for (let i = 1; i <= 25; i++) {
      arr.push(i);
    }
    arr.sort(() => Math.random() - 0.5);
    setInitCards([...arr]);
  };

  useEffect(() => {
    setTarget(1);
    init();
    if (target === 51) setPlaying(false);
  }, [playing]);

  const increment = () => {
    setTarget((prev) => prev + 1);
  };

  return (
    <>
      <div className='gameTitle'>
        {target <= 50 ? `${target} TO 50` : 'CLEAR!'}
      </div>
      <div className='controlBox'>
        <div onClick={() => setPlaying(!playing)}>
          {playing ? 'RESET' : 'START'}
        </div>
      </div>
      <div className='boxWrap'>
        {playing
          ? initCards.map((value, index) => (
              <Card
                key={index}
                value={value}
                index={index}
                target={target}
                increment={increment}
              />
            ))
          : ''}
      </div>
    </>
  );
}

export default OneToFifty;
