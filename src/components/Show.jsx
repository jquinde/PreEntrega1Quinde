
import { useState,useEffect } from "react";

import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase.js"
import './ItemGrid.css'
import {ShowCard} from "./ShowCard"

import NavBar from "./NavBar"


const Show = ()=>{

    // 1 configurar los hooks

    const [products, setProducts] = useState([])
    // 2 referenciar a la db de firestore

    const productsCollection = collection(db, "productos")
    // 3 funcion para mostrar todos los documentos
    const getProducts = async ()=>{
    const data = await getDocs (productsCollection)
   
        setProducts(
            data.docs.map((doc)=>({...doc.data(),id:doc.id}))
        )
       console.log(products);
    }
    
    

    useEffect(()=>{
        getProducts()
    },[])

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


export default Show