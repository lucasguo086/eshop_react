import {Product} from "../../app/models/product";
import {Avatar, Button, Grid, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import ProductList from "./ProductList";
import ProductCard from "./ProductCard";
import {useEffect, useState} from "react";

interface Props {
    products: Product[];
}

export default function Catalog(){
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch('https://eshopapidemo.azurewebsites.net/api/ViewProducts')
            .then(response => response.json())
            .then(data => setProducts(data))
    },[])

    return(
        <>
            <Grid container spacing={5}>
                {
                    products.map(product=>(
                        <Grid item xs={3}>
                            <ProductCard product={product}/>
                        </Grid>
                    ))
                }
            </Grid>

            {/*<Button variant='contained'>Next Page</Button>*/}
        </>
    )
}