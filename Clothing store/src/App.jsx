import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Basket from './components/Basket/Basket';
import AllProducts from './components/AllProducts/AllProducts'
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<MainLayout />} />
          <Route path='basket' element={<Basket />} />
          <Route path='all-products'element={<AllProducts />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;