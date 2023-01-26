import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
    <NavigationBar/>
    <ItemListContainer message = "Bienvenido al eCommerce de CamiShop"/>
    </>
    


  );
}

export default App;
