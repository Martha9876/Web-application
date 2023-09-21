
import React, { Fragment } from 'react';
import "./Start.css";
//import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

function Index (){
    return( <Fragment>
                 <div>
                <br/>       <br/>    <br/>   <br/>
                <div className="code-nav1">
                    <div  className="cnav">
                    <ul>
                <li><NavLink to="/account">Logout</NavLink></li>    
                </ul>   
                </div>
                </div>  

</div> 
<br/> 
<br/>
<h1 className="Quiz-start">Get Started to Create your own Quiz </h1>

<br/>
<br/>
<br/>
<br/>
<br/> 
<br/>



< section >

<span6>
<a href="/welcome" className="btn btn-primary ">Welcome Page</a>
</span6>
<span6>
<a href="/question1" className="btn btn-primary ">Question Type</a>
</span6>
<span6></span6>


        </section>

        <br/>
<br/>
<br/>
<br/>

<br/>
<br/>
<br/>




</Fragment>
    )
}
export default Index;