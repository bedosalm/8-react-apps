import React from 'react';


const Catigory = ({catigory,fiendItem}) => {
    return (
            <div className="catigory-container">
                 {
                     catigory.map((res , index)=> {
                         return (
                            <button onClick={() => fiendItem(res)}
                            key={index}
                            className="catig-btn">
                            {res}
                           </button>
                         )
                     })
                 }
            </div>
    )
}

export default Catigory;