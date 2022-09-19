import React, {useEffect, useState} from 'react';
import logo from '../../logo.svg';
import './App.css';
import {Typography} from "@mui/material";
import {Product} from "../../product";
import Catalog from '../../features/catalog/Catalog';

function App() {
    const[products,setProducts] = useState<Product[]>([]);
    useEffect(()=>{
        fetch('https://eshopapidemo.azurewebsites.net/api/ViewProducts')
            .then(response => response.json())
            .then(data => setProducts(data))
    })
  return (
      <div>
        <Typography variant='h1'>Eshop</Typography>
          <Catalog products={products}/>
      </div>
  );
}

export default App;
