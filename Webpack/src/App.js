import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import './assets/styles/style.sass';
import Image from './assets/images/img.png'
export default () => {
    return(
        <>
            <h1>Welcome to Webpack</h1>
            <Component1/>
            <Component2/>
            <Component3/>
            <img src={Image}/>   
        </>
    );

};