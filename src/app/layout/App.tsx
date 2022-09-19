import React, {useEffect, useState} from 'react';
import './App.css';
import {Container, createTheme, CssBaseline, ThemeProvider, Typography} from "@mui/material";
import {Product} from "../models/product";
import Catalog from '../../features/catalog/Catalog';
import Header from "./Header";

function App(){
    const theme = createTheme({
        palette:{
            mode:'dark'
        }
    })
    return (
        <>
            <CssBaseline/>
            <Header/>
            <Container>
                <Catalog />
            </Container>
        </>


    );
}

export default App;
