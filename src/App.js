import Header from "./header"
import ImageContainer from "./imageContainer"
import './App.css';
import 'remixicon/fonts/remixicon.css'
import {Switch,Route} from "react-router-dom"
import Cart from "./cart"



function App() {
  return (
    <div >
      <Header />
      

    <Switch>
      <Route exact path="/"><ImageContainer /></Route>
      <Route path="/cart"><Cart /></Route>
    </Switch>

    </div>
  );
}

export default App;
