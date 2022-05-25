import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import home from "./components/Home.component"

//employee
import EditEmployee from "./components/Employee/edit-Employee.components";
import CreateEmployee from "./components/Employee/create-Employee.component";
import EmployeeList from "./components/Employee/Employee-list.component";
import Employeereport from "./components/Employee/Report";
//Stock

import EditStock from "./components/Stock/edit-Stock.component";
import CreateStock from "./components/Stock/create-Stock.component";
import StockList from "./components/Stock/Stock-list.component";
import Stockreport from "./components/Stock/Report";


//Supplier

import EditSupplier from "./components/Supplier/Supplier-Update.component";
import CreateSupplier from "./components/Supplier/Supplier-Create.component";
import SupplierList from "./components/Supplier/Supplier-list.component";
import Supplierreport from "./components/Supplier/Report";

//Delivery

import EditDelivery from "./components/Delivery/Delivery-Update.component";
import CreateDelivery from "./components/Delivery/Delivery-Create.component";
import DeliveryList from "./components/Delivery/Delivery-list.component";
import Deliveryreport from "./components/Delivery/Report";

//Customer

import EditCustomer from "./components/Customer/edit-Customer.component";
import CreateCustomer from "./components/Customer/create-Customer.component";
import CustomerList from "./components/Customer/Customer-list.component";
import Customerreport from "./components/Customer/Report";

function App() {

    return (<Router >
        <div className = "container" >
        <Navbar/>
        <br/>
        <Route path = "/" exact component = { home }/>
        <Route path = "/Employee-List/" component = { EmployeeList }/> 
        <Route path = "/edit/:id" component = { EditEmployee }/> 
        <Route path = "/create" component = { CreateEmployee }/> 
        <Route path = "/Employee-report/" component = { Employeereport }/>

        <Route path = "/Stock-add/" component = { CreateStock }/>
        <Route path = "/Stock/" component = { StockList }/> 
        <Route path = "/Stock-Edit/:id" component = { EditStock }/>
        <Route path = "/Stock-report/" component = { Stockreport }/>

        <Route path = "/Supplier-add/" component = { CreateSupplier }/>
        <Route path = "/Supplier/" component = { SupplierList }/> 
        <Route path = "/Supplier-Edit/:id" component = { EditSupplier }/>
        <Route path = "/Supplier-report/" component = { Supplierreport }/>

        <Route path = "/Delivery-add/" component = { CreateDelivery }/>
        <Route path = "/Delivery/" component = { DeliveryList }/> 
        <Route path = "/Delivery-Edit/:id" component = { EditDelivery }/>
        <Route path = "/Delivery-report/" component = { Deliveryreport }/>

        <Route path = "/Customer-add/" component = { CreateCustomer }/>
        <Route path = "/Customer/" component = { CustomerList }/> 
        <Route path = "/Customer-Edit/:id" component = { EditCustomer }/>
        <Route path = "/Customer-report/" component = { Customerreport }/>
          </div > </Router>
    );
}

export default App;