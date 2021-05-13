import './App.css';
import ItemsList from './ItemsList'
import {useState} from 'react'
import Home from './Home'
import Contact from './Contact'
import NotFound from './404'
import ProductDetail from './ProductDetail'
import Cart from './pages/Cart'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/contacto">
          <Contact />
        </Route>

        <Route path="/productos/:id">
          <ProductDetail />
        </Route>
        
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
