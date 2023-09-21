/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams,useHistory } from 'react-router-dom'

import { useContext, useEffect, useState } from "react";
import "./Page25.css";
import axios from "axios";

import { Questioncontext } from "../../context/Context";

const Page25 = () => {
const {id}= useParams()
  const [answer, setAnswer] = useState("answer")
  const [data, setdata] = useState([]);
  const [counter, setCounter] = useState(true);
  const [counter1, setCounter1] = useState(true);
  const fetchData = async () => {
    const response=await axios.get(`http://localhost:3001/getdata25`)
    setdata(response.data);
    console.log(data);
  };
  const onAnswerSelected = e => {
    setAnswer(e.target.value)
  }
  useEffect(() => {
    
    fetchData();
     // eslint-disable-next-line 
  }, []);
  const Globalstate = useContext(Questioncontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

 
 
  
    //format questions like this (increment personality types based on answer)
    
  
  
  return (
    
    <div className="home">
      
      {data.map((item) => {
        
        return (
<div className="quiz-container">
<h1  className="question"  > Question 5 </h1>

          <div key={item}>
        
        
           <h1 className="Heading"> {item.heading}</h1>
            
           <h2 className="subHeading"> {item.subheading}</h2>
 
           <h3 className="decerption"> {item.descrption}</h3>
           <br/></div>
           <form>

           <label className="form-control">
       
      

            <input type="radio" name="answer"
                      value= {item.map1}

             id="answer1" 
            checked={answer === "answer1"} 
            onChange={onAnswerSelected} onClick={() => setCounter(counter + 4)}/>     <div dangerouslySetInnerHTML={{__html:item.answer1}}/>
            <span2 className="option"></span2>
           
        </label>
        <br/>

        <label className="form-control">
            <input type="radio" 
            name="answer" 
            value= {item.map2}
             id="answer2" 
            checked={answer === "answer2"} 
            onChange={onAnswerSelected} onClick={() => setCounter1(counter1 + 10)}/> <div dangerouslySetInnerHTML={{__html:item.answer2}}/>
            <span2 className="option"></span2>
          
        </label>
        <br/>
        </form>


         <p>
        Select topping <strong>{answer}</strong>
      </p>
      <p>
        Select topping <strong>{counter}</strong>
       
      </p>
      <p>
        Select topping <strong>{counter1}</strong>
      </p>
    
      <br/>

<a href="/result" className="btn btn-primary "  onClick={() => this.handleNext()}>Next</a>
               
     </div>
   
          
        );
      })}
      
    </div>
  );
};
export default Page25;


