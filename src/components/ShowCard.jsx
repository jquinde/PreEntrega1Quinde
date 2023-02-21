import { Link } from "react-router-dom"
import './ItemCard.css'

import IconButton from '@mui/material/IconButton'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Inventory2Icon from '@mui/icons-material/Inventory2';

export function ShowCard({item}){
    
    return(
        <li className="movieCard">
            <img className="movieImage" src={item.imagen} alt="" />
            <div>{item.nombre}</div>
            <div>
                <IconButton>
                    <AttachMoneyIcon/>
                </IconButton>
                {item.precio}
            </div>
            <Link to ={`/item/${item.id}`} className="btn btn-primary"><i className="fa-solid fa-pencil"></i>Detalles </Link>
        </li>
    )
}