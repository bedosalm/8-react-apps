import React, { useState } from 'react';

const Onetour = ({res,ubArr}) => {
   const {id,name,info,image,price} = res;
   const [readmore , setReadmore] =  useState(false);
    return (
        <div className="card-Cotent">
          <div className="img-Cotent">
              <img  src={image} alt={name}/>
          </div>
          <div className="place-name">
              <h5>{name}</h5>
             <span>{price}</span>
          </div>
          <div className="parg">
          <p className={readmore ? "active" : ""}>
              {readmore ? info : `${info.substring(0,100)}...`}
              <button onClick={() => setReadmore(!readmore)} 
            className={!readmore ? "btn-active" : ""}>
                {readmore ? "show less" : "show more"}
            </button>
         </p>

          </div>
          <button className="del-btn" onClick={() => ubArr(id)}>
             Not interested
          </button>
        </div>
      )
}
export default Onetour