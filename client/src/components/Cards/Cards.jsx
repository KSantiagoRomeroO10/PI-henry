import './Cards.css';

import Card from './Card/Card'
import { useState } from 'react';

const Cards = ({ drivers }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const tamaño = 9;
  let inicio = 0;
  let fin = tamaño;

  const sections = [];

  while (inicio < drivers.length) {
    let aux = drivers.slice(inicio, fin);
    sections.push(aux);
    inicio += tamaño;
    fin += tamaño;
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(sections)
  return (
    <div className='cards'>    
      <div className='content'>
        {        
          sections && sections.map((section, index) => {
            const currentCards = []

            for (let i = 0; i < section.length; i++) {
              let id = section[i].id 
              let imageUrl = section[i].image['url']
              let nameF = section[i].name['forename']
              let teams = section[i].teams
              
              currentCards.push(
                <Card
                  key={id}
                  id={id}
                  nameF={nameF}
                  imageUrl={imageUrl}
                  teams={teams}                  
                />
              )
            }
            return(
              <div key={index} className={`page ${index === currentPage ? 'active' : ''}`}>
                {currentCards}
              </div>
            )        
          })
        }
      </div>
      <div className='pagination'>
        {
          sections && sections.map((section, index) => (
            <button
              key={index}
              className={`page-button ${index === currentPage ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              {index+1}
            </button>
          ))
        }
      </div>
    </div>
  );
};

export default Cards;
