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
import { StoreInfo } from './store/new/StoreInfo';
import AddProduct from './pages/Product/AddProduct';
import Orders from './pages/Home/Orders';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/register" exact component={SignUp}/>
          <Route path="/new/" exact component={StoreInfo}/>
          <Route path="/dashboard/" exact component={Dashboard} />
          <Route path="/analysis/" exact component={Analysis} />
          <Route path="/products/" exact component={Products} />
          <Route path="/products/new" exact component={AddProduct} />
          <Route path="/orders/" exact component={Orders} />
        </Switch>
      </Router>
  );
}

export default App;
