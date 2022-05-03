import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (<
            nav className = "navbar navbar-dark bg-dark navbar-expand-lg" >
            <Link to = "/" className = "navbar-brand" >  </Link> 
            <div className = "collpase navbar-collapse" >
            <ul className = "navbar-nav mr-auto" >
            <li className = "navbar-item" >
            <Link to = "/" className = "nav-link" > Empolyee </Link> </li> 
            <li className = "navbar-item" >
            <Link to = "/Stock/" className = "nav-link" > Stock </Link> 
            </li > <li className = "navbar-item" >
            <Link to = "/Supplier/" className = "nav-link" > Supplier </Link> </li >
            <li className = "navbar-item" >
            <Link to = "/Delivery/" className = "nav-link" >Delivery </Link> 
            </li >
            <li className = "navbar-item" >
            <Link to = "/Customer/" className = "nav-link" >Customer </Link> 
            </li >

            </ul > </div> </nav>
        );
    }
}