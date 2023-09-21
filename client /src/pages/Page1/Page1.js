/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from "react";
import "./Page1.css";
import axios from "axios";
import { Questioncontext } from "../../context/Context";

const Page1 = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/getvalues");
    setdata(response.data);
    console.log(data);
  };
  useEffect(() => {
    
    fetchData();

  }, []);
  const Globalstate = useContext(Questioncontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
    
    <div className="home">
      
      {data.map((item, index) => {
        item.quantity = 1;
        
        return (
          <div className="container mt-5">
          <div className="row">
          <div className="card" key={index}>
        
        
           <h1 className="Heading"> {item.heading}</h1>
            
           <h3 className="subHeading"> {item.subheading}</h3>

            <a href="/page21" className="btn btn-primary mb-4" onClick={() => dispatch({ type: "text", payload: item })}>
              {item.butn}
            </a>
            
          </div>
          </div>
          
          </div>
          
        );
      })}
      
    </div>
  );
};

export default Page1;
