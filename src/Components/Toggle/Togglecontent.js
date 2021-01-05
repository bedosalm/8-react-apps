import React, { useState } from 'react';


const Togglecontent = ({content}) => {
    const {title,parg} = content;
    const [more,setMore] = useState(false);

    const moreDf = () => {
        setMore(!more)
    } 
    return (
         <div className={`cards ${more  ? "active" : "" }`}>
             <h3>{title}</h3>
             <p>{parg}</p>
             <button onClick={moreDf}>
                 {
                     more ? "-" : "+"
                 }
             </button>
         </div>
        
        
      )
}
export default Togglecontent