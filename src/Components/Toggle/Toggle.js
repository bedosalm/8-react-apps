import React, { useState } from 'react';
import "./Toggle.css";
import cardData from "./data"
import Togglecontent from './Togglecontent';

const Toggle = () => {
  const [card] = useState(cardData)
    return (
        <main className="Toggle">
          <div className="Toggle-content">
            <h2>Question and answers about login</h2>
          <div className="cardes-content">
          {
            card.map(res => {
              return (
                <Togglecontent key={res.id} content={res}/>
              )
            })
          }
          </div>
          </div>
        </main>
        
      )
}
export default Toggle