import { useState } from "react"
import Star from "./Star";

const Space = () => {
  const [stars, setStars] = useState([]);
  const [nextId, setNextId] = useState(0);
  const addStar = () => {
    setStars([...stars, {x: posX(), y: posY(), id: nextId}]);
    setNextId(nextId + 1);
  }

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
      <button onClick={addStar}>add star</button>
    </div>
  )

}

export default Space