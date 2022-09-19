import {Product} from "../../product";
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import ProductList from "./ProductList";

interface Props {
    products: Product[];
}

export default function catalog({products}:Props){
    return(
        <>
            <ProductList products={products}/>
            <Button variant='contained'>Next Page</Button>
        </>
    )
}