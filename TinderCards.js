import React ,{ useState,useEffect } from 'react';
import TinderCard from "react-tinder-card";
import database from './firebase'
import './TinderCards.css';

function TinderCards() {
    const [people,setPeople] = useState([]);
    
    //peice of code that runs on condition
    useEffect(()=> {

      const unsubcribe = database.collection('people').onSnapshot(snapshot => (
        setPeople(snapshot.docs.map(doc=>doc.data()))
      ))

      return () => {
        unsubcribe();
      };
    }, []);

  return (
      
    <div>
      
      <div className="tinderCards__cardsContainer">
        
        {people.map((person) =>(
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={['up','down']}
        >
          <div 
            style= {{ backgroundImage: `url(${person.url})` }}
            className='card'
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
      </div>

    </div>
  );
}

export default TinderCards;
