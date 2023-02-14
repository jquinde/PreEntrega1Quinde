
import './App.css';
import NavigationBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import Show from "./components/Show"
import Categoria from "./components/Categoria"
import Item from "./components/Item"


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (


<div className="App">

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Show/>}/>
    <Route path="/categoria/:id" element={<Categoria/>}/>
    <Route path="/item/:id" element={<Item/>}/>
  </Routes>
</BrowserRouter>
</div>
   
   
    
    


  );
}

export default App;
