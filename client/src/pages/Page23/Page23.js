/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';

import { useContext, useEffect, useState } from "react";
import "./Page23.css";
import axios from "axios";
import { Link } from 'react-router-dom';

import { Questioncontext } from "../../context/Context";

const Page23 = () => {
  const [answer, setAnswer] = useState("answer")
  const [data, setdata] = useState([]);
  const [score7,setScore7] = useState();
  const [score,setScore] = useState("");

  const fetchData = async () => {
    const response=await axios.get(`http://localhost:3001/getdata23`)
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
<div class="form-control">
             

            < input type="radio" name="answer"
              value1= "1"
              id="answer1" 
              onClick={() => setScore(1)}/>
              <label for ="answer1">            <div dangerouslySetInnerHTML={{__html:item.answer1}}/>
       </label>

</div>
<div class="form-control">
<input type="radio" 
              name="answer" 
              value2= "-1"
              id="answer2" 
              onClick={() => setScore(-1)}
           />     <label for ="answer2">  <div dangerouslySetInnerHTML={{__html:item.answer2}}/>
        </label>
        <br/>
        <br/>
        <br/>

        </div>
        <br/>
</form>
</form>
<Link   className="btn btn-primary"
 role="button" to={`/page24/${score}`}> 
       Next
     </Link>
      
          </div>
        
          </div>

        );       
      }
      )}
    </div>
  );
};
export default Page23;


