import React, {useState,Fragment, useCallback} from "react";
import "./Question52.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Axios from "axios";
import { NavLink } from "react-router-dom";



function Question52 (){
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading]= useState("");
  const [descrption, setDescrption]= useState("");
  const [answer1, setAnswer1]= useState("");
  const [map1, setMap1]= useState("");
  const [answer2, setAnswer2]= useState("");
  const [map2, setMap2]= useState("");
  const [second25Status, setSecond25Status] = useState("");

  const useUrl=(intialState=false)=>{

    const [state, setState]= useState(intialState);
  const url=useCallback(()=>setState((state)=>!state),[]);
  return [state,url];
  }
  const [url, setUrl]= useUrl();
  const second25 = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/second24", {
      heading: heading,
      subheading: subheading,
      descrption: descrption,
      answer1:answer1,
      map1:map1,
      answer2:answer2,
      map2:map2,
    }).then((response) => {
      if(response.data.message){
        setSecond25Status(response.data.message);
      }else{
        setSecond25Status("QUIZ QUESTION AND ANSWER CREATED SUCCESSFULLY");
      }
    })
  }

    return(<Fragment>
  <div>
                <br/>       <br/>    <br/>   <br/>
                <div className="code-nav1">
                    <div  className="cnav">
                  


                    <ul>
               
                 
                <li><NavLink to="/account">Logout</NavLink></li>    
                </ul> 
                <br/>
                <button  className="button-urls" onClick={setUrl} >Publish Url</button>
                    {
                      url &&(<p>http://localhost:3000/page111111</p>)
                    }
                      <br/>
                      <br/>  
                </div>
                </div>  

</div> 
<span1>
               
<a href="/welcome" className="btn btn-primary ">Welcome page</a>
</span1>
<a href="/question1" className="btn btn-primary ">Question Type</a>

<br/>
<br/>
   <div className="container1">
   <div className="loginForm">
        <form>
       
          <h4>Question 5</h4>
          <br/>
          <div  className="cnav"><a href="/question12" className="btn btn-secondary ">New Question</a>
       
       </div>
          <br/>
          <label htmlFor="heading">Heading*</label>
          <input className="textInput" type="text" name="heading" onChange={(e) => {setHeading(e.target.value)}} placeholder="Enter Heading" required />
          <label htmlFor="subheading">Subheading</label>
          <input className="textInput" type="text" name="subheading" onChange={(e) => {setSubheading(e.target.value)}} placeholder="Enter Subheading" required />
          <label htmlFor="descrption">Descrption</label>
          <input className="textInput" type="text" name="descrption" onChange={(e) => {setDescrption(e.target.value)}} placeholder="Enter Descrption" required />
          <label htmlFor="answer">Answer1* 

<div className="dropdown">
<select className="link" onChange={(e) => { window.location.href = e.target.value }}>

<option value="/question1">1</option>
<option value="/question52">2</option>

<option value="/question54">4</option>
</select>

</div>  </label>
<ReactQuill theme="snow"  value={answer1} onChange= {setAnswer1} placeholder="Enter Answer"  />
   
   <label htmlFor="map">Outcome1*</label>
   <ReactQuill theme="snow" value={map1} onChange={setMap1} placeholder="Map Outcome" />

     <label htmlFor="answer">Answer2*    </label>
     <ReactQuill theme="snow" value={answer2} onChange={setAnswer2} placeholder="Enter Answer" />
     <label htmlFor="map">Outcome2*</label>
     <ReactQuill theme="snow" value={map2} onChange={setMap2} placeholder="Map Outcome" />
     <br/>
       <input className=".btn-btn btn-primary" type="submit" onClick={second25} value="Create Question page" />
          <h1 style={{fontSize: '15px', textAlign: 'center', marginTop:'20px'}}>{second25Status}</h1>
        </form>
        </div>

       
    </div>
<br/>
    </Fragment>

    )
}

export default Question52; 
