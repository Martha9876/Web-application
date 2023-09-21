/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import "./Result.css";
import axios from "axios";
import { Questioncontext } from "../../context/Context";

function Result1  () {
  const [data, setdata] = useState([]);
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
    
{
  return (
 
      <div className="home">
        
        {data.map((item) => {
          
          return (
  <div >

<br/>
    <br/>

    <br/>

    <br/>
  <h1 className="Heading"> Result </h1>
             
            <div className="question" key={item}>
          

           

        <div>
      
 
        <p>Share</p>
          <a href="https://twitter.com/share?url=<http://localhost:3000/result/0>" target="_blank"><i className="fab fa-twitter"></i>  </a>
          <a href="https://www.instagram.com/sharer/?u=http://localhost:3000/result/0" target="_blank"><i className="fab fa-instagram"></i>  </a>
          <h1> Print </h1> 
          <span29>  <a href = "https://copper-mirabelle-81.tiiny.site" download> 
 
 <i class="fa fa-print"></i></a> </span29> 

              
              
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


