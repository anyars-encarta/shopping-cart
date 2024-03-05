import { Route, Routes } from 'react-router';
import Home from './pages/home';
import Cart from './pages/cart';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/cart' element={<Cart />}>Cart</Route>
      </Routes>
    </div>
  );
}

export default App;
