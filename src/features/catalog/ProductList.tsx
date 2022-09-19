import {Product} from "../../product";
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
interface Props{
    products:Product[];
}

export default function ProductList({products}:Props){
    return(
        <List>
            {
                products.map(product =>(
                    <ListItem key={product.id}>
                        <ListItemAvatar>
                            <Avatar src = {product.imageLink}/>
                        </ListItemAvatar>
                        <ListItemText>
                            {product.name} - {product.price}
                        </ListItemText>

                    </ListItem>

                ))
            }
        </List>

    )
}