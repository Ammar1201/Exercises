import {Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import HomePage from './pages/HomePage';
import InvalidRoute from './pages/InvalidRoute';
import Products from './pages/Products';

const App = () => {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <main>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:id'>
            <ProductDetail />
          </Route>
          <Route path='*'>
            <InvalidRoute />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
