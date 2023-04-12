import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/AppLayout';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route index element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
