import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Home/Dashboard';
import Analysis from './pages/Home/Analysis';
import Products from './pages/Home/Products';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/register" exact component={SignUp}/>
          <Route path="/dashboard/" exact component={Dashboard} />
          <Route path="/analysis/" exact component={Analysis} />
          <Route path="/products/" exact component={Products} />
        </Switch>
      </Router>
  );
}

export default App;
