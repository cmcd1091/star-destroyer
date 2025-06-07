import { useEffect, useRef, useState } from "react"
import Star from "./Star";

const Space = () => {
  const [stars, setStars] = useState([]);
  const [autoMode, setAutoMode] = useState(false)
  const nextId = useRef(0);
  const addStar = () => {
    setStars([...stars, {x: posX(), y: posY(), id: nextId}]);
  }

  useEffect(() => {
    if (!autoMode) return;
    const interval = setInterval(() => {
      const id = nextId.current++;
      setStars(stars => [...stars, {x: posX(), y: posY(), id}]);
    }, 2500);

    return () => clearInterval(interval);
  }, [autoMode])

  const posX = () => Math.floor(Math.random() * 100);
  const posY = () => Math.floor(Math.random() * 100);

  const destroy = (idToDestroy) => {
    setStars(stars.filter(star => star.id !== idToDestroy));
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', backgroundColor: 'black' }}>
      {stars.map(({ x, y, id }) => (
        <Star posX={x} posY={y} key={id} id={id} destroy={destroy}/>
      ))}
      <button onClick={() => setAutoMode(prev => !prev)}>
        {autoMode ? "Stop stars" : "Start stars"}
      </button>
    </div>
  )

}

export default Space