/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';

import { useContext, useEffect, useState } from "react";
import "./ResultBuzz.css";
import axios from "axios";
import Page21 from '../Page21/Page21';
import { Questioncontext } from "../../context/Context";
function Result  () {
  const [data, setdata] = useState([]);
  const score = props.score;

  const fetchData = async () => {
    const response=await axios.get(`http://localhost:3001/getdata50`)
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

 
    //format questions like this (increment personality types based on answer)
    function callback(score){
if(score>0){
  return (
 
      <div className="home">
        
        {data.map((item) => {
          
          return (
  <div >
  <h1 className="Heading"> Result </h1>
             
            <div className="question" key={item}>
          
         <div dangerouslySetInnerHTML={{__html:item.map1}}/>
       

     
       
          <p>Share</p>
          <a href="https://twitter.com/share?url=<http://localhost:3000/BuzzPage21/2>" target="_blank"><i className="fab fa-twitter"></i>  </a>

<a href="https://www.https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/BuzzPage21/2" target="_blank"><i className="fab fa-facebook"></i>  </a>

              
         
            </div>
            
            </div>
            
          );
        })}
        
      </div>
    );

      }
      else if(score<0){


        return(
        <div className="home">
    
        {data.map((item) => {
          
          return (
    <div >
    <h1 className="Heading"> Result </h1>
             
            <div className="question" key={item}>
            <div dangerouslySetInnerHTML={{__html:item.map2}}/>

         <div />
       
    
     
          <p>Share</p>
          <a href="https://www.https://www.facebook.com/sharer/sharer.php?u=<URL>.com" target="_blank"><i className="fab fa-facebook"></i>  </a>
          <a href="https://twitter.com/share?url=<URL>&text=<TEXT>via=<USERNAME>" target="_blank"><i className="fab fa-twitter"></i>  </a>
     
    
              
            </div>
            
            </div>
            
          );
        })}
        
      </div>
    );
      }

else  {return (
    
  <div className="home">
    
    {data.map((item) => {
      
      return (
<div >
<h1 className="Heading"> Result </h1>
         
        <div className="question" key={item}>
      
   

    

          
        </div>
        </div>
        
 
        
      );
    })}
    
  </div>
);
  }
  }

























     };
    
   
     
 
     
 
export default Result;



