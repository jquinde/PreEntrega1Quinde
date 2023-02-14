import { useState,useEffect } from "react";

import { getDoc, doc, updateDoc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase.js"
import { useNavigate, useParams } from "react-router-dom";


import NavBar from "./NavBar"
const Item = ()=>{

    const [descripcion, setDescripcion] = useState ("")
    const [stock, setStock] = useState("");
    const navigate = useNavigate()
    const {id} = useParams ()
    const update = async (e) => {
        e.preventDefault()
        const product = doc(db, "productos", id )

        const data = {
            descripcion: descripcion,
            stock: stock
        }
        await updateDoc(product, data)        

    };

    


const getProductById = async(id) =>{
    const product = getDoc( doc(db, "productos", id ) );
    if (product.exists()){
        setDescripcion(product.data().categoria)
        setStock(product.data().nombre)
    }else{
        console.log("Producto no Existe");
    }
    console.log(product);
}

useEffect(()=>{
    getProductById()
},[id])

return(
    <>
    <NavBar></NavBar>
    <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Product</h1>
                    
                    <li className="movieCard">
                    
                        <div>{descripcion} </div>
                        <div>{stock}</div>
                    </li>
                        
                    
                </div>
                
            </div>
        </div>
        </>
);

}

export default Item