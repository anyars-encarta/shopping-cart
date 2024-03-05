import { Route, Routes } from 'react-router';
import Home from './pages/home';
import Cart from './pages/cart';
import Header from './components/header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}>Home</Route>
        <Route path='/cart' element={<Cart />}>Cart</Route>
      </Routes>
    </div>
  );
}

export default App;
