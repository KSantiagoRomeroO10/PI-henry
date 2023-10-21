import './Cards.css'

import Card from './Card/Card'

const Cards = ({ requestDrivers, drivers }) => {
  <Card requestDrivers={requestDrivers}/>
  // <>
  //   {
  //     drivers && drivers.map(({ id, nameF, imageUrl, teams}) => {
  //       return(
  //         <Card
  //           key={id}
  //           id={id}
  //           nameF={nameF}
  //           imageUrl={imageUrl}
  //           teams={teams}
  //         />
  //       )
  //     })
  //   }
  // </>
}

export default Cards