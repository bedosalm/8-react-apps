import React, { useState } from 'react';
import reviwes from '../../SliderJson';
import './Slider.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Slidercontent = () => {
   const [index , setIndex] = useState(0);
   const {opnion,jop,image,name} = reviwes[index];

   const checker = (number) => {
      if(number > reviwes.length - 1){
         return 0
      }else if(number < 0){
         return reviwes.length - 1
      }
      return number
   }

   const nextbtn = () => {
      setIndex(index => {
         let newIndex = index + 1;
         return checker(newIndex)
      })
   }

   const brevbtn = () => {
      setIndex(index => {
         let newIndex = index - 1;
         return checker(newIndex)
      })
   }

   const randomNum = () => {
         setIndex(()=> {
            let randomIndex = Math.floor(Math.random() * 5)
            let newIndex = randomIndex;
            return newIndex
         })
   }

   return (
       <div className="container">
          <div className="img-content">
             <div className="circle">
               <img src={image} alt="..."/>
             </div>
          </div>
          <div className="info-content">
             <h2 className="name">{name}</h2>
             <h3>{jop}</h3>
             <p>{opnion}</p>
          </div>
          <div className="btns">
             <button onClick={nextbtn}>
             <FaChevronLeft />
             </button>
             <button onClick={brevbtn}>
             <FaChevronRight />
             </button>
          </div>
          <button className="random-btn" onClick={randomNum}>random</button>
       </div>
   )
}
    
export default Slidercontent 
