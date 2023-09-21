import React, {useState,Fragment} from "react";
import "./Question1.css";
import Axios from "axios";
//import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function Question1 (){
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading]= useState("");
  const [descrption, setDescrption]= useState("");
  const [answer, setAnswer]= useState("");
  const [map, setMap]= useState("");
  const [secondStatus, setSecondStatus] = useState("");


  const second = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/second", {
      heading: heading,
      subheading: subheading,
      descrption: descrption,
      answer:answer,
      map:map,
  
    }).then((response) => {
      if(response.data.message){
        setSecondStatus(response.data.message);
      }else{
        setSecondStatus("QUIZ QUESTION AND ANSWER CREATED SUCCESSFULLY");
        window.location = "http://localhost:3000/Page2"
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

<a href="/welcome" className="btn btn-primary ">Welcome page</a>


   <div className="container1">
   <div className="loginForm13">
   <div className="btnn">
        <form>
       
          <h4>Question Types</h4>
        
          <div className="btn">
       
<a href="/question12" className="btn btn-secondary ">Multiple Choice</a>


<a href="/Buzzquestion12" className="btn btn-secondary ">Icould Buzz Quiz</a>

</div>

        </form>
        </div>
    </div>

     
    </div>

    </Fragment>

    )
}

export default Question1;