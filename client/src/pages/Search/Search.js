import React, {useState,Fragment} from "react";
import "./Account.css";
import Axios from "axios";
import {FaSearch} from 'react-icons/fa'


const SearchBar= ()=>{
  const [name, setName] = useState("");
const [searchStatus, setsearchStatus] = useState("");

  const search = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/search", {
      search: search,
    
    }).then((response) => {
      if(response.data.message){
        setRegisterStatus(response.data.message);
      }else{
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    })
  }




    return(<Fragment>
   <div className="container">
  
     <FaSearch id="input_wrapper"/>
          <input value={name} type="text" onChange={(e) => {setName(e.target.value)}} placeholder="Type to search" required />
 <h1 style={{fontSize: '15px', textAlign: 'center', marginTop:'20px'}}>{registerStatus}</h1>
      
      
      
    </div>

    </Fragment>

    )
}

export default SearchBar;