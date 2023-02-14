
import { useState,useEffect } from "react";
import { Link } from "react-router-dom"
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase.js"

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
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-grid gap-2">
                 
                    </div>
                    <table className="table table-dark table hover">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.nombre}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        
                                    <Link to ={`/item/${product.id}`} className="btn btn-primary"><i className="fa-solid fa-pencil"></i> </Link>
                                    </td>
                                </tr>
                            ))}
                            

                         
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>

    )
}


export default Show