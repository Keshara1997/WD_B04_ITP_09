import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'
import DatePicker from 'react-datepicker';

export default class EditStock extends Component {
    constructor(props) {
        super(props);


        this.onChangeDPID = this.onChangeDPID.bind(this);
        this.onChangeDPname = this.onChangeDPname.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeContactno = this.onChangeContactno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            DPID: "",
            DPname: "",
            Amount:"",
            Date: "",
            DateContactno: "",
            Delivery: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Delivery/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    DPID: response.data.DPID,
                    DPname: response.data.DPname,
                    Amount: response.data.Amount,
                    Date: response.data.Date,
                    Contactno: response.data.Contactno,
                   
                    
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Delivery/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Delivery: response.data.map(Delivery => Delivery.DPname),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

   //set the DPID

   onChangeDPID(e) {
    this.setState({
        DPID: e.target.value,
    });
}

//set the DPname

onChangeDPname(e) {
    this.setState({
        DPname: e.target.value,
    });
}

//set Amount
onChangeAmount(e) {
    this.setState({
        Amount: e.target.value,
    });
}

//set Date



onChangeDate(e) {
    this.setState({
        Date: e.target.value,
    });
}


//set Contactno
onChangeContactno(e) {
    this.setState({
        Contactno: e.target.value,
    });
}



    onSubmit(e) {
        e.preventDefault();

        const { Contactno, Amount } = this.state;

        const cup = /^[0-9\b]+$/;
        if (!cup.test(String(Contactno))|| (Contactno.length != 10)) {
            swal(
                "Invalid Contact no !",
                "Contact no Should be number & length shuld be 10!",
                "error"
            );


        } else if (!cup.test(String(Amount))) {
            swal(
                "Invalid  Amount!",
                " Amount Should be number!",
                "error"
            );
        } else {

            const Delivery = {
                DPID: this.state.DPID,
                DPname: this.state.DPname,
                Amount: this.state.Amount,
                Date: this.state.Date,
                Contactno: this.state.Contactno,
            };

            console.log(Delivery);

            axios
                .post('http://localhost:5000/Delivery/update/' + this.props.match.params.id, Delivery)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Edit Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Delivery/"));
            });
        }

    }

    render() {
        return (<div  >
            <div class = "row ">
            <div class = "col-6" >
            <br/>
            <img src="/images/cupcake_logo.gif" width="60%" height="40%" />
            </div> <div class = "col-6" >
            <div div class = "myformstyle" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > Update Delivery Payment </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >


            <div className = "form-group" >
            <label > Delivery Person's ID: </label> 
            <input type = "text"
            placeholder = "Delivery Person's ID"
            required className = "form-control"
            value = { this.state.DPID }
            onChange = { this.onChangeDPID }
            /> 
            </div> <div className = "form-group" >
        
            <label > Delivery Person's Name: </label> 
            <input type = "text"
            placeholder = "Delivery Person's Name"
            required className = "form-control"
            value = { this.state.DPname }
            onChange = { this.onChangeDPname }
            /> 
            </div >  
            <div className = "form-group" >
            
            <label > Amount: </label> 
            
            <input type = "text"
            placeholder = "Amount"
            required  className = "form-control"
            value = { this.state.Amount }
            onChange = { this.onChangeAmount }/>
             </div > 
             
              <div className = "form-group" >
            <label > Bill Date: </label>
           

            <input type = "date"
            placeholder = "Contact No"
            required  className = "form-control"
            value = { this.state.Date }
            onChange = { this.onChangeDate }/> 
            </div >  

            <div className = "form-group" >
            <label > Contact No: </label> 
            <input type = "text"
            placeholder = "Contact No"
            required  className = "form-control"
            value = { this.state.Contactno }
            onChange = { this.onChangeContactno }/>
             </div > 

             

            <div className = "form-group" >
            <input type = "submit"
            value = "Update"
            className = "btn btn-primary" />
            </div>{" "} </form >  </div> </div > </div>
             </div ><br/> <br/>  </div>
        )
    }
}