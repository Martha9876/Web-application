
import React, { Fragment } from 'react';
import "./Home.css";
//import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from '../Video/Video.mp4'
function Index (){
    return( <Fragment>

<section className="product">

<div className="Quiz-maker">
<span7>
<div className="left-colomon">

<form className="search" action="/">
  <input type="text" placeholder="Search.." name="search"/>
  <button type="submit"><i class="fa fa-search"></i></button>
</form>
<div>
<h1>Welcome to Our Diagnostic Test Maker</h1>
</div>
<div>
<h3>Create your own diagnostic Test</h3>
</div>
<p> Using develop diagnostic test you can build quizzes that are entertaining and exciting with instant feedback. </p>
<h3>
<a href="/account" className="btn btn-primary ">Create a Diagnostic Test</a>
</h3>
</div>

</span7>

<div className="right-colomon">
<div className="center">
<span7>
<video  className= "center" width="450"  height="600" controls autoPlay >
      <source src={Video} type="Video/mp4"/>
</video>
</span7>
</div></div>

</div>
</section>


</Fragment>
    )
}
export default Index;