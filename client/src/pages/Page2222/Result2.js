/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import "./Result2.css";
import React, {Component} from 'react';
import axios from "axios";
import { Questioncontext } from "../../context/Context";

function Result1  () {
  const [data, setdata] = useState([]);
  const { score} = useParams();
  const fetchData = async () => {
    const response=await axios.get(`http://localhost:3001/getdata21`)
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
    
if({score}>0){
  return (
 
      <div className="home">
        
        {data.map((item) => {
          
          return (
  <div >
  <h1 className="Heading"> Result </h1>
             
            <div className="question" key={item}>
          
 <div dangerouslySetInnerHTML={{__html:item.map1}}/>
       

        <div>
      
          <p>Share</p>
          <a href="https://www.https://www.facebook.com/sharer/sharer.php?u=<URL>.com" target="_blank"><i className="fab fa-facebook"></i>  </a>
          <a href="https://twitter.com/share?url=<URL>&text=<TEXT>via=<USERNAME>" target="_blank"><i className="fab fa-twitter"></i>  </a>
    

              
            </div>
            </div>
            
            </div>
            
          );
        })}
        
      </div>
    );

      }
      else if(score==0){


        return(
        <div className="home">
    
        {data.map((item) => {
          
          return (
    <div >
    <h1 className="Heading"> Result </h1>
             
            <div className="question" key={item}>
          
         <div />
       
    
        <div>
        
          <p>Share</p>
          <a href="https://www.https://www.facebook.com/sharer/sharer.php?u=<URL>.com" target="_blank"><i className="fab fa-facebook"></i>  </a>
          <a href="https://twitter.com/share?url=<URL>&text=<TEXT>via=<USERNAME>" target="_blank"><i className="fab fa-twitter"></i>  </a>
      </div>
    
              
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
      
     <div dangerouslySetInnerHTML={{__html:item.map2}}/>
   

    <div>

      <p>Share</p>
      <a href="https://www.https://www.facebook.com/sharer/sharer.php?u=<URL>.com" target="_blank"><i className="fab fa-facebook"></i>  </a>
      <a href="https://twitter.com/share?url=<URL>&text=<TEXT>via=<USERNAME>" target="_blank"><i className="fab fa-twitter"></i>  </a>
  </div>

          
        </div>
        </div>
        
        
      );
    })}
    
  </div>
);

  }

























     };
    
   
     
 
     
 
export default Result1;


