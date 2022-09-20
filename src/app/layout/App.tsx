import React, {useEffect, useState} from 'react';
import './App.css';
import {Container, createTheme, CssBaseline, ThemeProvider, Typography} from "@mui/material";
import {Product} from "../models/product";
import Catalog from '../../features/catalog/Catalog';
import Header from "./Header";
import HomePage from "../../features/home/HomePage";
import {Route} from "react-router-dom";
import ProductDetail from "../../features/catalog/ProductDetail";
import aboutPage from "../../features/about/AboutPage";
import AboutPage from "../../features/about/AboutPage";

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
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/catalog' component={Catalog}/>
                <Route path='/catalog/:id' component={ProductDetail}/>
                <Route exact path='/about' component={AboutPage}/>
            </Container>
        </>


    );
}

export default App;
