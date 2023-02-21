import { useState,useEffect } from "react";
import { Link } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase.js"
import { useNavigate, useParams } from "react-router-dom";

import NavBar from "./NavBar"

import './ItemGrid.css'
import {ShowCard} from "./ShowCard"
const Categoria = ()=>{

    const navigate = useNavigate()

    const {id} = useParams ()

    const [products, setProducts] = useState([])
    // 2 referenciar a la db de firestore

    const productsCollection = collection(db, "productos" )
    const q = query(productsCollection, where("categoria", "==", id));
    // 3 funcion para mostrar todos los documentos
    const getProducts = async ()=>{
    const data = await getDocs (q)
    
        setProducts(
            data.docs.map((doc)=>({...doc.data(),id:doc.id}))
        )
    console.log(products);
    }

    useEffect(()=>{
        getProducts()
    },[id])

    //devolver la vista

    return (
        <>
        <NavBar></NavBar>

        <ul className="moviesGrid">
            {products.map((product)=>(
                <ShowCard  key={product.id} item={product}/>
            )
            )}
        </ul>
        
        </>

    )
}


export default Categoria