

/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState } from "react";
import "./BuzzPage21.css";
import axios from "axios";




const Page90  =(props)  =>{
  
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
    
  return 

  <br/>;

  <br/>;

  <br/>;
  <h2>{props.score}</h2>  ;
  
          
        

        
        
      }
      
    








  
  


export default Page90;
