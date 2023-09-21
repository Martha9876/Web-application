/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import "./Result2.css";
import axios from "axios";
import { Questioncontext } from "../../context/Context";
function Result2  (props) {
  const [data, setdata] = useState([]);
  const score2 = props.score2;

  const fetchData = async () => {
    const response=await axios.get(`http://localhost:3001/getdata42`)
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
    
if(score2==-1){
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
      else if(score2==1){


        return(
        <div className="home">
    
        {data.map((item) => {
          
          return (
    <div >
    <h1 className="Heading"> Result </h1>
             
            <div className="question" key={item}>
            <div dangerouslySetInnerHTML={{__html:item.map2}}/>

          
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

      else if(score2==2){


        return(
        <div className="home">
    
        {data.map((item) => {
          
          return (
    <div >
    <h1 className="Heading"> Result </h1>
             
            <div className="question" key={item}>
            <div dangerouslySetInnerHTML={{__html:item.map3}}/>

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
      
     
else if(score2==3)  {return (
    
  <div className="home">
    
    {data.map((item) => {
      
      return (
<div >
<h1 className="Heading"> Result </h1>
         
        <div className="question" key={item}>
      
     <div dangerouslySetInnerHTML={{__html:item.map4}}/>
   

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
    
   
     
 
     
 
export default Result2;



