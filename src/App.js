import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import  Tour from "../src/component/Tour"; 

function App() {
  return (
    <>
     <Router>
       <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path='/tour' component={Tour}/>
        </Switch>
       
      </Router>
    </>
  );
}

export default App;
