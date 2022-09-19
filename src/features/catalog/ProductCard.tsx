import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Product} from "../../app/models/product";

interface Props {
    product:Product;
}
export default function ProductCard({product}:Props) {
    return (
        <Card>
            <CardMedia
                component="img"
                sx={{height:240,backgroundSize:'contain'}}
                image= {product.imageLink}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}, {product.bottleSize}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: {product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}