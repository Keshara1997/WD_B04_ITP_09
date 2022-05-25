import React, { Component } from 'react';

export default class AdminDashboard extends Component{

  render(){

    return(
    <div className="jumbotron">
    <div className>

      
    <h1 className="text-center" style = {{backgroundColor:'white'}}><font face = "Comic sans MS" size ="8"><b>Manamperi Hardware</b></font></h1><br/>
    <h2 className="text-center" style = {{color:'#0066d3'}}><font face = "Comic sans MS" size ="6"><b>Admin Dashboard</b></font></h2>

    <table class="center">
    
    <br/>
    <tr>
      <th>
    <div class="col-sm">
    <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://www.bergerpaints.com/blog/wp-content/uploads/2019/10/Weekday-colours--1280x720.png")'}}>
    <div className="card-body text-white">
    <h5 className="text-center"><b>---------------1--------------<br/>-</b></h5>
    <p className="text-center"></p> <p> <br/>
    <div class="text-center">
    <div className="row">
    <div className="col-sm">
    <a className="btn btn-primary btn-lg" href="/Employee-List/" role="button">Employee Management</a><br /><br />
    </div></div></div></p></div></div></div>&nbsp;
     </th>
          
    
    <br/>
    <th>
    <div class="col-sm">
    <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://www.bergerpaints.com/blog/wp-content/uploads/2019/10/Weekday-colours--1280x720.png")'}}>
    <div className="card-body text-white">
    <h5 className="text-center"><b>---------------2--------------<br/>-</b></h5>
    <p className="text-center"></p> <p> <br/>
    <div class="text-center">
    <div className="row">
    <div className="col-sm">
    <a className="btn btn-primary btn-lg" href="/Stock/" role="button">Stock Management</a><br /><br />
    </div></div></div></p></div></div></div>&nbsp;
    </th>

    <br/>
    <th>
    <div class="col-sm">
    <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://www.bergerpaints.com/blog/wp-content/uploads/2019/10/Weekday-colours--1280x720.png")'}}>
    <div className="card-body text-white">
    <h5 className="text-center"><b>---------------3--------------</b></h5>
    <p className="text-center"></p> <p> <br/>
    <div class="text-center">
    <div className="row">
    <div className="col-sm">
    <a className="btn btn-primary btn-lg" href="/Supplier/" role="button">Supplier Management</a><br /><br />
    </div></div></div></p></div></div></div>&nbsp;
    </th>
      </tr>

      <tr>
      <th>
    <div class="col-sm">
    <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://www.bergerpaints.com/blog/wp-content/uploads/2019/10/Weekday-colours--1280x720.png")'}}>
    <div className="card-body text-white">
    <h5 className="text-center"><b>---------------4--------------<br/>-</b></h5>
    <p className="text-center"></p> <p> <br/>
    <div class="text-center">
    <div className="row">
    <div className="col-sm">
    <a className="btn btn-primary btn-lg" href="/" role="button">Salary Management</a><br /><br />
    </div></div></div></p></div></div></div>&nbsp;
    </th> 
          
    
    <br/>
    <th>
    <div class="col-sm">
    <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://www.bergerpaints.com/blog/wp-content/uploads/2019/10/Weekday-colours--1280x720.png")'}}>
    <div className="card-body text-white">
    <h5 className="text-center"><b>---------------5--------------<br/>-</b></h5>
    <p className="text-center"></p> <p> <br/>
    <div class="text-center">
    <div className="row">
    <div className="col-sm">
    <a className="btn btn-primary btn-lg" href="/Customer/" role="button">Customer Management</a><br /><br />
    </div></div></div></p></div></div></div>&nbsp;
    </th>

    <br/>
    <th>
    <div class="col-sm">
    <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://www.bergerpaints.com/blog/wp-content/uploads/2019/10/Weekday-colours--1280x720.png")'}}>
    <div className="card-body text-white">
    <h5 className="text-center"><b>---------------6--------------<br/>-</b></h5>
    <p className="text-center"></p> <p> <br/>
    <div class="text-center">
    <div className="row">
    <div className="col-sm">
    <a className="btn btn-primary btn-lg" href="/Delivery/" role="button">Delivery Management</a><br /><br />
    </div></div></div></p></div></div></div>&nbsp;
    </th>
      </tr>
    {/*} <tr>
      <th>
    <div class="col-sm">
    <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://www.bergerpaints.com/blog/wp-content/uploads/2019/10/Weekday-colours--1280x720.png")'}}>
    <div className="card-body text-white">
    <h5 className="text-center"><b>---------------7--------------</b></h5>
    <p className="text-center"></p> <p> <br/>
    <div class="text-center">
    <div className="row">
    <div className="col-sm">
    <a className="btn btn-primary btn-lg" href="/" role="button">Customer Care<br/>Management</a><br /><br />
    </div></div></div></p></div></div></div>&nbsp;
     </th>
          
    
    <br/>
    <th>
    <div class="col-sm">
    <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://www.bergerpaints.com/blog/wp-content/uploads/2019/10/Weekday-colours--1280x720.png")'}}>
    <div className="card-body text-white">
    <h5 className="text-center"><b>---------------8--------------</b></h5>
    <p className="text-center"></p> <p> <br/>
    <div class="text-center">
    <div className="row">
    <div className="col-sm">
    <a className="btn btn-primary btn-lg" href="/stockHome" role="button">Product Management<br/>(Web Page)</a><br /><br />
    </div></div></div></p></div></div></div>&nbsp;
    </th>

    <br/>
    <th>
    <div class="col-sm">
    <div className="bg-image card shadow-1-strong" style={{backgroundImage: 'url("https://www.bergerpaints.com/blog/wp-content/uploads/2019/10/Weekday-colours--1280x720.png")'}}>
    <div className="card-body text-white">
    <h5 className="text-center"><b>---------------9--------------<br/>-</b></h5>
    <p className="text-center"></p> <p> <br/>
    <div class="text-center">
    <div className="row">
    <div className="col-sm">
    <a className="btn btn-primary btn-lg" href="/stockHome" role="button">Stock Management</a><br /><br />
    </div></div></div></p></div></div></div>&nbsp;
    </th>
  </tr> */} 

     
    </table>

    </div> </div>

    
    )
  }
}