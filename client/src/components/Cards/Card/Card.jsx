import './Card.css'

const Card = ({ id, nameF, imageUrl, teams }) => {
  return(
    <div className='card'>
      <img src={imageUrl} alt='Error 404, not found.'/>
      <p className="info">Forename: {nameF}</p>
      <p className="info">Teams: {teams}</p>
    </div>
  )
}

export default Card