import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
// import Content from '../Components/Nav/nav';



const Home = () => {
return (
  <>
  <h1 className="main-Title">8 React apps</h1>
    <div className="main-Content">
    <Link  to="/Birth" className="link-active">
       <div className="app-Content">
        <div className="img-content">
          <img src="/images/projects-img/birthdate.png" alt="..."/>
        </div>
        <h3>Birthdate</h3>
       </div>
    </Link>
    <Link  to="/Tours" className="link-active">
      <div className="app-Content">
      <div className="img-content">
          <img src="/images/projects-img/tour.png" alt="..."/>
        </div>
        <h3>Tour</h3>
     </div>
    </Link>
    <Link  to="/Slider" className="link-active">
      <div className="app-Content">
      <div className="img-content">
          <img src="/images/projects-img/small-slider.png" alt="..."/>
        </div>
        <h3>Reviwes</h3>
     </div>
    </Link>
    <Link  to="/Toggle" className="link-active">
      <div className="app-Content">
      <div className="img-content">
          <img src="/images/projects-img/toggle.png" alt="..."/>
        </div>
        <h3>Collapce</h3>
     </div>
    </Link>
    <Link  to="/menus" className="link-active">
      <div className="app-Content">
      <div className="img-content">
          <img src="/images/projects-img/menus.png" alt="..."/>
        </div>
        <h3>Menus</h3>
     </div>
    </Link>
    <Link  to="/tabs" className="link-active">
      <div className="app-Content">
      <div className="img-content">
          <img src="/images/projects-img/tabs.png" alt="..."/>
        </div>
        <h3>Tabs</h3>
     </div>
    </Link>
    <Link  to="/animationslider" className="link-active">
      <div className="app-Content">
      <div className="img-content">
          <img src="/images/projects-img/Slider.png" alt="..."/>
        </div>
        <h3>Slider</h3>
     </div>
    </Link>
    <Link  to="/Todo" className="link-active">
      <div className="app-Content">
      <div className="img-content">
          <img src="/images/projects-img/Todo.png" alt="..."/>
        </div>
        <h3>Todo</h3>
     </div>
    </Link>
    </div>
    </>
  )
}

export default Home