import React from 'react';


const Content= ({people}) => {
return (
    <div className="content">
     {
         people.map((person)=> {
            const {image,name,age,id} = person;
             return (
                <article key={id}>
                   <div className="img-content">
                   <img src={image} alt=""/>
                   </div>
                   <h5>{name}</h5>
                   <span>{age}</span>
                </article > 
            )
         })
     }
   </div>
  )
}

export default Content