

/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams,useHistory } from 'react-router-dom'

import { useContext, useEffect, useState } from "react";
import "./Page2424.css";
import axios from "axios";
import Result from './ResultBuzz'
import { Questioncontext } from "../../context/Context";
import { number } from 'prop-types';

import { Link } from 'react-router-dom';


function BuzzPage21  ()  {
  const {id}= useParams()
  const [answer, setAnswer1] = useState("")
  const [score,setScore] = useState(0);

  const [score1,setScore1] = useState(0);
  const [score2,setScore2] = useState(0);

  const [score3,setScore3] = useState(0);

  const [score4,setScore4] = useState(0);

  const [score5,setScore5] = useState(0);

  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(-1);
  const [counter3, setCounter3] = useState(1);
  const [counter4, setCounter4] = useState(-1);
  const [counter5, setCounter5] = useState(1);
  const [counter6, setCounter6] = useState(-1);
  const [counter7, setCounter7] = useState(1);
  const [counter8, setCounter8] = useState(-1);
  const [counter9, setCounter9] = useState(1);
  const [counter10, setCounter10] = useState(-1);


   const [initialCount, setInitialCount] = useState(0);
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response=await axios.get(`http://localhost:3001/getdata24`)
    setdata(response.data);
    console.log(data);
  };
  const onAnswerSelected = e => {
    setAnswer1(e.target.value)
  }

   const handleInitialCountChange = (event) => {
      setInitialCount(event.target.value);
   };
   function handleClick()
   {
     
     setScore2 (Number(score2)+ score ); // set number to the state
   
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
   <h1  className="question"  > Question 4 </h1>
   
             <div key={item}>
           
           
              <h1 className="Heading"> {item.heading}</h1>
               
              <h2 className="subHeading"> {item.subheading}</h2>
    
              <h3 className="decerption"> {item.descrption}</h3>
              <br/>
              </div>
         
              <form  > 
   
   <form>
   <div class="form-control">
                
   
               < input type="radio" name="answer"
                 value1= "1"
                 id="answer1" 
                 onClick={() => setScore2(-1)}/>
                 <label for ="answer1">            <div dangerouslySetInnerHTML={{__html:item.answer1}}/>
          </label>
   
   </div>
 
   <div class="form-control">
   <input type="radio" 
                 name="answer" 
                 value2= "-1"
                 id="answer2" 
                 onClick={() => setScore2(1)}
              />     <label for ="answer2">  <div dangerouslySetInnerHTML={{__html:item.answer2}}/>
           </label>
           
   
    
   
           </div>
   
           <br/>
   </form>
   </form>
        
        <br/>
       


        
        <div>
        <br/>

<br/>


        <Link   className="btn btn-primary"
 role="button" to={`/result/${score2+3}`}> 
       Submit
     </Link>
     </div>

       
  
      <Result score={score1+ score2+score3}/>          
            
          </div>
        
          </div>

       
          
        );

        
        
      }
      
      )}
      
    </div>
    
  );








  
  
};

export default BuzzPage21;


