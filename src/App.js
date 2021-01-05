import './App.css';
import Birth from "./Components/birthday/birthday";
import Tours from "./Components/Tours/Tours";
import Home from "./Home/Home";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Slider from './Components/slider/Slider';
import Toggle from './Components/Toggle/Toggle';
import Menu from './Components/menus/menu';
import Tabs from './Components/tabs/Tab';
import Slideing from './Components/animationslider/slideanimate'
import Todo from './Components/todoList/Todo';

function App() {
  return (
    <>
     <Router>
      <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/Birth" component={Birth} />
       <Route path="/Tours" component={Tours} />
       <Route path="/Slider" component={Slider} />
       <Route path="/Toggle" component={Toggle} />
       <Route path="/menus" component={Menu} />
       <Route path="/tabs" component={Tabs} />
       <Route path="/animationslider" component={Slideing} />
       <Route path="/Todo" component={Todo} />
       </Switch>
     </Router>
    </>
  );
}

export default App;
