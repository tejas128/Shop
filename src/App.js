import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/AppLayout';
import Cart from './pages/Cart';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route index element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
