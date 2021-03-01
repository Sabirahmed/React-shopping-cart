
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import {BrowserRouter, Route,  Switch} from 'react-router-dom';
import Header from './components/header/Header';
import ProductContainer from './components/container/ProductContainer'
import ProductDetailContainer from './components/container/ProductDetailContainer';
import CartContainer from './components/container/CartContainer';

// const CartContainer = React.lazy(() => import('./components/container/CartContainer'));
// const ProductDetailContainer = React.lazy(() => import('./components/container/ProductDetailContainer'));


function App() {
  return (
    <div>
      <BrowserRouter>
        
      <Header/>
      {/* <Suspense fallback={<div> Loading...</div>}> */}
      <Switch>
        <Route exact path='/login' component={Login}  />
        <Route path='/register' component={Register}  />
        <Route path='/products' component={ProductContainer} />
        <Route path='/productDetails/:id' component={ProductDetailContainer}  />
        <Route path='/cart' component={CartContainer}  />
        <Route path='*' render={()=><h1>Page Not Found</h1>} />
      </Switch>
      {/* </Suspense> */}
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
