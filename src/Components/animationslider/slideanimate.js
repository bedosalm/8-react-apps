import React , {useEffect, useState} from "react";
import people  from "./dataslider";
import "./slideanimate.css";
import { FaAngleRight,FaAngleLeft } from 'react-icons/fa';
const Slideing = () => {
const [allpeople] = useState(people);
const [value,setvalue] = useState(0);
let lastOne = allpeople.length - 1;
useEffect(() => {
if(value < 0){
    setvalue(lastOne)
}
if(value > lastOne){
    setvalue(0)
}

},[people,value]);

useEffect(() => {
  let move = setTimeout(() => {
      setvalue(value + 1)
    },3000)
    return () => clearInterval(move)
},[value])
    return(
          <main className="reviwes">
              <h1 className="review-title">Reviwes</h1>
              <div className="Slides center">
               {allpeople.map((person,personIndex) => {
               const {id,name,image,title,quote} = person;
               let position = "nextSlide";
               if(personIndex === value){
                     position = "activeSlide"
                }
                if(personIndex === value - 1 || (value === 0 && personIndex === allpeople.length - 1)){
                    position = "lastSlide";
                    console.log(personIndex);
               }
                return(
                <section className={position} key={id}>
                   <img src={image} alt={name}/>
                   <h4>{name}</h4>
                   <span>{title}</span>
                   <p>{quote}</p>
                </section>
                )
               }) 
               }
               <button onClick={() => setvalue(value + 1)} className="next">
               <FaAngleLeft /> 
               </button>
               <button onClick={() => setvalue(value - 1)}className="prev">
               <FaAngleRight />
               </button>
         </div>
         </main>
         
    )
}

export default Slideing;