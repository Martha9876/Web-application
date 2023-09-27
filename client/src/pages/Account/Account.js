import React, {useState,Fragment} from "react";
import "./Account.css";
import Axios from "axios";


function Account (){
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register", {
      email: email,
      firstname: firstname,
      surname: surname,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setRegisterStatus(response.data.message);
      }else{
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    })
  }

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
    
      }else{
        setLoginStatus(response.data[0].email);
        window.location = "http://localhost:3000/start"
      }
    })
  }



    return(<Fragment>
   <div className="container">
   <div className="loginForm">
        <form>
          <h4>Register Here</h4>
          <label htmlFor="email">Email Address*</label>
          <input className="textInput" type="text" name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter your Email Address" required />
          <label htmlFor="firstname">Firstname*</label>
          <input className="textInput" type="firstname" name="firstname" onChange={(e) => {setFirstname(e.target.value)}} placeholder="Enter your firstname" required />
          <label htmlFor="firstname">Last Name*</label>
          <input className="textInput" type="surname" name="surname" onChange={(e) => {setSurname(e.target.value)}} placeholder="Enter your surname" required />

          <label htmlFor="password">Password*</label>
          <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your Password" required />
          <input className=".btn-btn btn-success" type="submit" onClick={register} value="Create Account" />
          <h1 style={{fontSize: '15px', textAlign: 'center', marginTop:'20px'}}>{registerStatus}</h1>
        </form>
      </div>
      <span/>
      <div className="loginForm">
        <form>
          <h4>Login Here</h4>
          <label htmlFor="email">Email Address*</label>
          <input className="textInput" type="text" name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter your Email Address" required />
           <label htmlFor="password">Password*</label>
          <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your Password" required />
          <input className=".btn-success" type="submit" onClick={login} value="Login" />
       
          <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
        </form>
      </div>
      
    </div>

    </Fragment>

    )
}

export default Account;