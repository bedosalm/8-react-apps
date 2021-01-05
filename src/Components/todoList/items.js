import React from "react";
import { FaEdit , FaTrash } from 'react-icons/fa';

const Items = ({List,editItem,removeItem}) => {

   return (
       <>
               {
                   List.map(item => {
                       const {id,title} = item
                       return (
                        <div key={id} className="item-Content">
                           <p>{title}</p>
                           <button onClick={() => editItem(id)}>
                               <FaEdit />
                           </button>
                           <button onClick={() => removeItem(id)}>
                               <FaTrash />
                           </button>
                        </div>
                       )
                   })
               }
           
       </>
    )
}

export default Items