
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import InputGroup from 'react-bootstrap/InputGroup'
import CartWidget from './CartWidget';

import { useState,useEffect } from "react";
import { Link } from "react-router-dom"
import { collection, getDocs, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase.js"


function NavigationBar () {
    const [categorias, setCategoria] = useState([])
    // 2 referenciar a la db de firestore

    const categoriaCollection = collection(db, "categorias")
    // 3 funcion para mostrar todos los documentos
    const getCategoria = async ()=>{
    const data = await getDocs (categoriaCollection)
    //console.log(data.docs)
        setCategoria(
            data.docs.map((doc)=>({...doc.data(),id:doc.id}))
        )
    //console.log(categorias);
    }

    useEffect(()=>{
        getCategoria()
    },[])
    return (

    <Nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogg" aria-controls="navbarTogg" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbar">
        <Link to="/" className="navbar-brand">CamiShop</Link>
        
        
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {categorias.map((categoria) => (
                <li className="nav-item" key ={categoria.id} >
                    <Link to ={`/categoria/${categoria.id}`} className="nav-link">{categoria.detalle} </Link>
                
                </li>
                
            ))}
           
        </ul>
        <CartWidget/>
    </div>
    </Nav>
    );
}
export default NavigationBar