import React, {useState,Fragment} from "react";
import "./Welcome.css";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

//import { Link } from 'react-router-dom';

function Welcome (){
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading]= useState("");
  const [butn, setButn] = useState("");
  const [firstStatus, setFirstStatus] = useState("");
 
  const first = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/first", {
      heading: heading,
      subheading: subheading,
      butn: butn,
    }).then((response) => {
      if(response.data.message){
        setFirstStatus(response.data.message);
      }else{
        setFirstStatus("QUIZ CREATED SUCCESSFULLY");
      }
    })
  }

    return(<Fragment>
       
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

<a href="/question1" className="btn btn-primary ">Question Type</a>

<br/>
<br/>
    <section className="container1">

   <div className="loginForm">
    
        <form>
          
          <h4>Welcome Page</h4>
          <label htmlFor="heading">Heading*</label>
          <input className="textInput1" type="text" name="heading" onChange={(e) => {setHeading(e.target.value)}} placeholder="Enter Heading" required />
          <label htmlFor="subheading">Subheading</label>
          <input className="textInput1" type="text" name="subheading" onChange={(e) => {setSubheading(e.target.value)}} placeholder="Enter Subheading" required />
          <label htmlFor="butn">Button*</label>
          <input className="textInput1" type="text" name="butn" onChange={(e) => {setButn(e.target.value)}} placeholder="Enter Button" required />
          
          <input className="btn-btn btn-primary" type="submit" onClick={first} value="Create Welcome page" />
          <h1 style={{fontSize: '15px', textAlign: 'center', marginTop:'20px'}}>{firstStatus}</h1>
        </form>
        </div>
       
    </section>
    <br/>


    </Fragment>

    )
}

export default Welcome;



