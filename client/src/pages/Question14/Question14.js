import React, {useState,Fragment, useCallback} from "react";
import "./Question14.css";
import Axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { NavLink } from "react-router-dom";

//import { Link } from 'react-router-dom';

function Question14 (){
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading]= useState("");
  const [descrption, setDescrption]= useState("");
  const [answer1, setAnswer1]= useState("");
  const [map1, setMap1]= useState("");
  const [answer2, setAnswer2]= useState("");
  const [map2, setMap2]= useState("");
  const [answer3, setAnswer3]= useState("");
  const [map3, setMap3]= useState("");
  const [answer4, setAnswer4]= useState("");
  const [map4, setMap4]= useState("");
  const useUrl=(intialState=false)=>{

    const [state, setState]= useState(intialState);
  const url=useCallback(()=>setState((state)=>!state),[]);
  return [state,url];
  }
  const [url, setUrl]= useUrl();

  const [second4Status, setSecond4Status] = useState("");


  const second4 = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/second4", {
      heading: heading,
      subheading: subheading,
      descrption: descrption,
      answer1:answer1,
      map1:map1,
      answer2:answer2,
      map2:map2,
      answer3:answer3,
      map3:map3,
      answer4:answer4,
      map4:map4,
  
    }).then((response) => {
      if(response.data.message){
        setSecond4Status(response.data.message);
      }else{
        setSecond4Status("QUIZ QUESTION AND ANSWER CREATED SUCCESSFULLY");
   
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
                      url &&(<p>http://localhost:3000/page1</p>)
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
   <section className="container1">
   <div className="loginForm">
        <form>
       
          <h4>Question 1</h4>
          <br/>
          <div  className="cnav"><a href="/question24" className="btn btn-secondary ">New Question</a>
       
       </div>
          <br/>

          <label htmlFor="heading">Heading*</label>
          <input className="textInput" type="text" name="heading" onChange={(e) => {setHeading(e.target.value)}} placeholder="Enter Heading" required />
          <label htmlFor="subheading">Subheading</label>
          <input className="textInput" type="text" name="subheading" onChange={(e) => {setSubheading(e.target.value)}} placeholder="Enter Subheading" required />
          <label htmlFor="descrption">Descrption</label>
          <input className="textInput" type="text" name="descrption" onChange={(e) => {setDescrption(e.target.value)}} placeholder="Enter Descrption" required />
          <label htmlFor="answer">Answer1 * 

<div className="dropdown">
<select className="link" onChange={(e) => { window.location.href = e.target.value }}>
<option value="/question1">1</option>
<option value="/question12">2</option>
<option value="/question14">4</option>
</select>

</div>  </label>
<ReactQuill theme="snow"  value={answer1} onChange= {setAnswer1} placeholder="Enter Answer"  />
          <label htmlFor="map">Outcome1*</label>
        
         <ReactQuill theme="snow" value={map1} onChange={setMap1} placeholder="Map Outcome" />         
          <label htmlFor="answer">Answer2*    </label>
          <ReactQuill theme="snow"  value={answer2} onChange= {setAnswer2} placeholder="Enter Answer"  />
  
          <label htmlFor="map">Outcome2*</label>
          <ReactQuill theme="snow" value={map2} onChange={setMap2} placeholder="Map Outcome"/>
                    <label htmlFor="answer">Answer3*    </label>
          <ReactQuill theme="snow" value={answer3} onChange={setAnswer3} placeholder="Enter Answer"/>          

          <label htmlFor="map">Outcome3*</label>
          <ReactQuill theme="snow" value={map3} onChange={setMap3} placeholder="Map Outcome"/>          
          
          <label htmlFor="answer">Answer4 *   </label>
          <ReactQuill theme="snow"  value={answer4} onChange= {setAnswer4} placeholder="Enter Answer"  />
          
          <label htmlFor="map">Outcome4* </label>
          <ReactQuill theme="snow" value={map4} onChange={setMap4} placeholder="Map Outcome"/>          
          <br/>
          <input className=".btn-btn btn-primary" type="submit" onClick={second4} value="Create Question page" />
          <h1 style={{fontSize: '15px', textAlign: 'center', marginTop:'20px'}}>{second4Status}</h1>
        </form>
        </div>

       
    </section>
    <br/>

    </Fragment>

    )
}

export default Question14;