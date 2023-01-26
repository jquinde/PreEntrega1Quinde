
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import InputGroup from 'react-bootstrap/InputGroup'
import CartWidget from './CartWidget';


function NavigationBar () {
    return (

    <Nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogg" aria-controls="navbarTogg" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
        <a class="navbar-brand" href="#">CamiShop</a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
            <a class="nav-link" href="#">Catalogos <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Ofertas</a>
            </li>
            <li class="nav-item">
            <a class="nav-link disabled" href="#">Servicios</a>
            </li>
        </ul>
        

        <CartWidget/>
        
   
    
    </div>
    </Nav>
    );
}
export default NavigationBar