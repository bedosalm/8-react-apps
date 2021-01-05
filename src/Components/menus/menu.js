import React, { useState } from 'react';
import "./menu.css";
import menu from "../../menuData";
import Menucard from './menucard';
import Catigory from "./catigores";
const allCategoris =["all",...new Set(menu.map((res) => res.category ))];
const Menu = () => {
 const [menuItem , setMenuItem] = useState(menu);
 const [catigory] = useState(allCategoris);
 const fiendItem = (category) => {
     if(category === "all"){
        setMenuItem(menu);
        return;
     }
   let item = menu.filter(res => {
       return  res.category === category;
   })
       setMenuItem(item);
 }

    return (
        <main className="menu">
            <h2 className="page-title title">our menu</h2>
            <div className="menu-container">
            <Catigory catigory={catigory}  fiendItem={fiendItem}/>
            <Menucard  menu={menuItem}/>
            </div>
        </main>
    )
}

export default Menu;