/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams,useHistory } from 'react-router-dom'

import { useContext, useEffect, useState } from "react";
import "./Page43.css";
import axios from "axios";

import { Questioncontext } from "../../context/Context";
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';


const Page43 = () => {
  const {id}= useParams()
  const [answer, setAnswer1] = useState("")

  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response=await axios.get(`http://localhost:3001/getdata43`)
    setdata(response.data);
    console.log(data);
  };
  const onAnswerSelected = e => {
    setAnswer1(e.target.value)
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
<div className="quiz-container">
<h1 className="Heading"> Question 3 </h1>
            <div className="row">
          <div className="question" key={item}>
        
        
           <h1 className="Heading"> {item.heading}</h1>
            
           <h3 className="subHeading"> {item.subheading}</h3>
 
           <h3 className="subHeading"> {item.descrption}</h3>
           <form>
           <label className="form-control">
       

            <input type="radio" name="radio"
             value= {item.map1}
             id="answer1" 
            checked={answer === "answer1"} 
            onChange={onAnswerSelected}/>   {item.answer1}
            <span2 className="option"></span2>
           
        </label>

        <label className="form-control">
            <input type="radio" 
            name="radio" 
            value= {item.map2}
             id="answer2" 
            checked={answer === "answer2"} 
            onChange={onAnswerSelected}/>{item.answer2}
            <span2 className="option"></span2>
          
        </label>
        <label className="form-control">
       

       <input type="radio" name="radio"
        value= {item.map3}
        id="answer3" 
       checked={answer === "answer3"} 
       onChange={onAnswerSelected}/>   {item.answer3}
       <span2 className="option"></span2>
      
   </label>
   <label className="form-control">
       

       <input type="radio" name="radio"
        value= {item.map4}
        id="answer4" 
       checked={answer === "answer4"} 
       onChange={onAnswerSelected}/>   {item.answer4}
       <span2 className="option"></span2>
      
   </label>
        </form>

        <p>
        Select topping <strong>{answer}</strong>
      </p>
      
        <span21>  <a href="/page44" className="btn btn-primary "  onClick={() => this.handleNext()}>Next</a>
        </span21>
            
          </div>
          </div>
          
          </div>
          
        );
      })}
      
    </div>
  );
};

export default Page43;


