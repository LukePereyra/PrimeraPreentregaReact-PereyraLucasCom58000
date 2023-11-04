import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">    
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={'Productos por categoría'}/>}/>
            {/* <Route path="/categoria/platos" element={<ItemListContainer greeting={'¡ Para comer ya !'}/>}/>
            <Route path="/categoria/para-hacer" element={<ItemListContainer greeting={'Para cocinar juntos'}/>}/>
            <Route path="/categoria/postres" element={<ItemListContainer greeting={'Postres para la peli'}/>}/> */}
            <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path="*" element={<h1>404 por acá no</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;