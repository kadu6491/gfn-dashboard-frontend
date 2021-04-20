import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/register" exact component={SignUp}/>
        </Switch>
      </Router>
  );
}

export default App;
