import './star.css'

const Star = ({ posX, posY, id, destroy }) => {
  const handleClick = () => {
    destroy(id);
  }
  
  return (
    <div 
      className="star"
      onClick={handleClick}
      style={{
        position: 'absolute',
        top: `${posY}vh`,
        left: `${posX}vw`
      }}
    >
    </div>
  )
}

export default Star