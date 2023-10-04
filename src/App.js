import './App.css'; 
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import "bulma/css/bulma.css";
//import ItemCount from "./components/ItemCount/ItemCount";


function App() {
  return (
    <div className="App">    
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="*" element={<h1>404 por acá no</h1>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada" , quantity)}/>