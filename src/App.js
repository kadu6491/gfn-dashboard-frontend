import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";


import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Home/Dashboard';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/register" exact component={SignUp}/>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
  );
}

export default App;
