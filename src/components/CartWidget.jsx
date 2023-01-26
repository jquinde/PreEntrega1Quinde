
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'

function CartWidget(){

   
    return(
        <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent="2" color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    );
}

export default CartWidget