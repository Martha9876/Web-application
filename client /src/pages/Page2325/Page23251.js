

/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom'

import { useContext, useEffect, useState } from "react";
import "./Page2325.css";
import axios from "axios";
import { Questioncontext } from "../../context/Context";
import { Link } from 'react-router-dom';



function BuzzPage21  (props)  {
  const {id}= useParams()
  const [answer, setAnswer1] = useState("")
  const [score,setScore] = useState(0);

  const [score2,setScore2] = useState(0);

  
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response=await axios.get(`http://localhost:3001/getdata23`)
    setdata(response.data);
    console.log(data);
  };

   
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
   <h1  className="question"  > Question 3 </h1>
   
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
                 onClick={() => setScore2(1)}/>
                 <label for ="answer1">            <div dangerouslySetInnerHTML={{__html:item.answer1}}/>
          </label>
   
   </div>
 
   <div class="form-control">
   <input type="radio" 
                 name="answer" 
                 value2= "-1"
                 id="answer2" 
                 onClick={() => setScore2(-1)}
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
 role="button" to={`/page2425/${score2+2}`}> 
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

export default BuzzPage21;


