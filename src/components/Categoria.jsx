import { useState,useEffect } from "react";
import { Link } from "react-router-dom"
import { collection, getDocs, query, doc, where } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase.js"
import { useNavigate, useParams } from "react-router-dom";

import NavBar from "./NavBar"
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
            data.docs.map((doc)=>({...doc.data(),id:doc.ids}))
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
                                        
                                        <button onClick="" className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
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


export default Categoria