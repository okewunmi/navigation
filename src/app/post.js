"use client" 
import React from 'react';
import "./globals.css";
import Menu from "../Components/MenuBar/Menu";
import Posting from '../Components/page'

const Index = () => {
    
    return (
        <main className="main">
            <Menu/>
            <Posting/>
        </main>
    );
}

export default Index;
