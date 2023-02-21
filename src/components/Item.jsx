import { useState,useEffect } from "react";

import { getDoc, doc, collection,query,where } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase.js"
import { useNavigate, useParams } from "react-router-dom";
import { async } from "@firebase/util";

import './ItemGrid.css'
import {ShowCard} from "./ShowCard"
import NavBar from "./NavBar"

import IconButton from '@mui/material/IconButton'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Inventory2Icon from '@mui/icons-material/Inventory2';

const Item = ()=>{
    const [nombre, setNombre] = useState ("")
    const [descripcion, setDescripcion] = useState ("")
    const [imgUrl, setImgUrl] = useState ("")
    const [stock, setStock] = useState(0);
    const [precio, setPrecio] = useState(0);
 
    
    const {id} = useParams ()


    const getItemById = async ()=>{
        const itemCollection = doc(db, "productos", id )
        const itemsData = await getDoc (itemCollection)
        if (itemsData.exists()){
            setNombre(itemsData.data().nombre)
            setDescripcion(itemsData.data().descripcion)
            setStock(itemsData.data().stock)
            setPrecio(itemsData.data().precio)
        }else{
            console.log("Producto no Existe");
        }
    
    console.log(descripcion);
    }



useEffect(()=>{
    getItemById()
},[id])

return(
    <>
        <NavBar></NavBar>
        <ul className="moviesGrid">                                    
            <li className="movieCard">
            <img className="movieImage" src={imgUrl} alt="" />
            <div>{nombre}</div>
            <div>{descripcion}</div>
            <div>
                <IconButton>
                    <Inventory2Icon/>
                </IconButton>
                {stock}
            </div>
            <div>
                <IconButton>
                    <AttachMoneyIcon/>
                </IconButton>
                {precio}</div>
            </li>
                                
        </ul>
    </>
        
);

}

export default Item