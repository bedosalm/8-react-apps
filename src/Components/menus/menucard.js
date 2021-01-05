import React from 'react';


const Menucard = ({menu}) => {
   return (
<>
       {
           menu.map(res => {
            const {id,title,desc,price,img} = res;
               return (
            <div className="menu-card" key={id}>
                <div className="img-content">
                <img src={img} alt="..."/>
               </div>
               <div className="info-content">
                   <h4>{title}</h4>
                   <span>{price}</span>
                   <p>{desc}</p>
               </div>
                
                </div>
               )
           })
       }
        </>
    )
    
   
   
}

export default Menucard;