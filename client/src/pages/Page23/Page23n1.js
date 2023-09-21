/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams,useHistory } from 'react-router-dom'

import { useContext, useEffect, useState } from "react";
import "./Page23.css";
import axios from "axios";
import { Link } from 'react-router-dom';

import { Questioncontext } from "../../context/Context";

const Page23 = () => {
  const [answer, setAnswer] = useState("answer")
  const [data, setdata] = useState([]);
  const [score7,setScore7] = useState(-1);
  const [score,setScore] = useState("");

  const fetchData = async () => {
    const response=await axios.get(`http://localhost:3001/getdata42`)
    setdata(response.data);
    console.log(data);
  };


   function handleClick()
{
  
  setScore (Number(score)); // set number to the state

}


  useEffect(() => {
    
    fetchData();
     // eslint-disable-next-line 
  }, []);

  const Globalstate = useContext(Questioncontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  return (

    <div className="home">
      
    {data.map((item) => {
      
      return (
        <div className="container">

<div className="quiz-container">
<h1  className="question"  > Question 2 </h1>

        <div key={item}>
      
      
         <h1 className="Heading"> {item.heading}</h1>
          
         <h2 className="subHeading"> {item.subheading}</h2>

         <h3 className="decerption"> {item.descrption}</h3>
         <br/>
         </div>
    

           <form  > 

<form>
<label className="form-control">
<input type="radio" name="answer"
          value= "1"

  id="answer1"
              onClick={() => setScore(score7+1)}/>
                         <div dangerouslySetInnerHTML={{__html:item.answer1}}/>
       </label>
      
       <label className="form-control1">

            < input type="radio" name="answer"
              value1= "1"
              id="answer1" 
              onClick={() => setScore(score7+1)}/>
                     <div dangerouslySetInnerHTML={{__html:item.answer2}}/>
       </label>

       <br/>
<br/>
       <label className="form-control1">
<input type="radio" 
              name="answer" 
              value2= "-1"
              id="answer2" 
              onClick={() => setScore(score7-1)}
           />       <div dangerouslySetInnerHTML={{__html:item.answer3}}/>
        </label>
        

        <label className="form-control">
<input type="radio" 
              name="answer" 
              value2= "-1"
              id="answer2" 
              onClick={() => setScore(score7-1)}
           />      <div dangerouslySetInnerHTML={{__html:item.answer4}}/>
        </label>
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>

      
        <br/>
</form>
</form>

        <div>
<br/>

<br/>

        <Link   className="btn btn-primary"
 role="button" to={`/BuzzPage21/${score}`}> 
       Next
     </Link>
     </div>

      
          </div>
        
          </div>

        );       
      }
      )}
    </div>
  );
};
export default Page23;


