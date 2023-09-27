
/** @format */

import "./App.css";
//import "./Home.css";
import { Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1/Page1.js";
import Page11 from "./pages/Page11/Page11.js";
import Page111 from "./pages/Page111/Page111.js";
import Page1111 from "./pages/Page1111/Page1111.js";
import Page11111 from "./pages/Page11111/Page11111.js";
import Page111111 from "./pages/Page111111/Page111111.js";

import Page21 from "./pages/Page21/Page21.js";
import Page22 from "./pages/Page22/Page22.js";
import Page23 from "./pages/Page23/Page23.js";

import Page24 from "./pages/Page24/Page24.js";
import Page25 from "./pages/Page25/Page25.js";
import Editor from "./pages/Editor/Editor.js";

import Page41 from "./pages/Page41/Page41.js";
import Page42 from "./pages/Page42/Page42.js";
import Page43 from "./pages/Page43/Page43.js";
import Page44 from "./pages/Page44/Page44.js";
import Page45 from "./pages/Page45/Page45.js";
import BuzzPage21n1 from "./pages/BuzzPage21/BuzzPage21n1.js";
import BuzzPage211 from "./pages/BuzzPage21/BuzzPage211.js";
import BuzzPage21 from "./pages/BuzzPage21/BuzzPage21.js";
import Page2323n1 from "./pages/Page2323/Page2323n1.js";
import Page23231 from "./pages/Page2323/Page23231.js";
import Page2323 from "./pages/Page2323/Page2323.js";
import Page2324n1 from "./pages/Page2324/Page2324n1.js";
import Page23241 from "./pages/Page2324/Page23241.js";
import Page2324 from "./pages/Page2324/Page2324.js";
import Page2325n1 from "./pages/Page2325/Page2325n1.js";
import Page23251 from "./pages/Page2325/Page23251.js";
import Page2325 from "./pages/Page2325/Page2325.js";

import Page2424n1 from "./pages/Page2424/Page2424n1.js";
import Page24241 from "./pages/Page2424/Page24241.js";
import Page2424 from "./pages/Page2424/Page2424.js";

import Page2425n1 from "./pages/Page2425/Page2425n1.js";
import Page24251 from "./pages/Page2425/Page24251.js";
import Page2425 from "./pages/Page2425/Page2425.js";
import Page2525n1 from "./pages/Page2525/Page2525n1.js";
import Page25251 from "./pages/Page2525/Page25251.js";
import Page2525 from "./pages/Page2525/Page2525.js";

import Home from "./pages/Home/Home.js";
import Start from "./pages/Start/Start.js";
import Account from "./pages/Account/Account.js";
import Welcome from "./pages/Welcome/Welcome.js";
import Question12 from "./pages/Question12/Question12.js";
import Question14 from "./pages/Question14/Question14.js";
import Question22 from "./pages/Question22/Question22.js";
import Question24 from "./pages/Question24/Question24.js";
import Question32 from "./pages/Question32/Question32.js";
import Question34 from "./pages/Question34/Question34.js";
import Question42 from "./pages/Question42/Question42.js";
import Question44 from "./pages/Question44/Question44.js";
import Question52 from "./pages/Question52/Question52.js";
import Question54 from "./pages/Question54/Question54.js";
import Question1 from "./pages/Question1/Question1.js";
import Buzzquestion12 from "./pages/Buzzquestion12/Buzzquestion12.js";
import  Result1 from "./pages/Result/Result1.js";
import  Result0 from "./pages/Result/Result0.js";
import  Page221 from "./pages/Page22/Page221";
import  Page22n1 from "./pages/Page22/Page22n1";
import  Page231 from "./pages/Page23/Page231";
import  Page23n1 from "./pages/Page23/Page23n1";
import  Page2222n1 from "./pages/Page2222/Page2222n1";
import  Page22221 from "./pages/Page2222/Page22221";
import  Page22223n1 from "./pages/Page22223/Page22223n1";
import  Page222231 from "./pages/Page22223/Page222231";
import  Page22224n1 from "./pages/Page22224/Page22224n1";
import  Page222241 from "./pages/Page22224/Page222241";
import  Page22225n1 from "./pages/Page22225/Page22225n1";
import  Page222251 from "./pages/Page22225/Page222251";

import  Page2121 from "./pages/Page2121/Page2121.js";
import  Page21214 from "./pages/Page21214/Page21214.js";
import  Page21215 from "./pages/Page21215/Page21215.js";

import  Page23233 from "./pages/Page23233/Page23233.js";

import  Page21211 from "./pages/Page21211/Page21211.js";

import  Result from "./pages/Result/Result.js";
import  Result2 from "./pages/Result2/Result2.js";

import ResultBuzz from "./pages/BuzzPage21/ResultBuzz.js";

import Contact from "./pages/Contact/Contact.js";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./pages/About/About.js";

import Seeresult from "./pages/BuzzPage21/seeresult.js";


function App() {
  return (
    <div className="App">
      <Navbar />
   
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Start />} />
      <Route path="/Page1" element={<Page1 />} />
      <Route path="/Page11" element={<Page11 />} />
      <Route path="/Page111" element={<Page111 />} />
      <Route path="/Page1111" element={<Page1111 />} />
      <Route path="/Page11111" element={<Page11111 />} />
      <Route path="/Page111111" element={<Page111111 />} />

      <Route path="/Page21" element={<Page21 />} />
      <Route path="/Page22" element={<Page22 />} />
      <Route path="/Page2121" element={<Page2121 />} />
      <Route path="/Page21211" element={<Page21211 />} />
      <Route path="/Page23233" element={<Page23233 />} />
      <Route path="/Page21214" element={<Page21214 />} />
      <Route path="/Page21215" element={<Page21215 />} />

      <Route path="/Page23" element={<Page23 />} />
      <Route path="/Page25" element={<Page25 />} />
      <Route path="/Page24" element={<Page24 />} />
      <Route path="/Page41" element={<Page41 />} />
      <Route path="/Page42" element={<Page42 />} />
      <Route path="/Page43" element={<Page43 />} />
      <Route path="/Page44" element={<Page44 />} />
      <Route path="/Page45" element={<Page45 />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/Buzzquestion12" element={<Buzzquestion12 />} />
      <Route path="/BuzzPage21/2" element={<BuzzPage211 />} />
      <Route path="/BuzzPage21/-2" element={<BuzzPage21n1 />} />
      <Route path="/BuzzPage21/0" element={<BuzzPage21 />} />
      <Route path="/page2323/2" element={<Page23231 />} />
      <Route path="/page2323/-2" element={<Page2323n1 />} />
      <Route path="/page2323/0" element={<Page2323 />} />

      <Route path="/page2324/2" element={<Page23241 />} />
      <Route path="/page2324/-2" element={<Page2324n1 />} />
      <Route path="/page2324/0" element={<Page2324 />} />

      <Route path="/page2325/2" element={<Page23251 />} />
      <Route path="/page2325/-2" element={<Page2325n1 />} />
      <Route path="/page2325/0" element={<Page2325 />} />

      <Route path="/page2424/3" element={<Page24241 />} />
      <Route path="/page2424/-3" element={<Page2424n1 />} />
      <Route path="/page2424/0" element={<Page2424 />} />
      <Route path="/page2424/-1" element={<Page2424n1 />} />
      <Route path="/page2424/1" element={<Page2424 />} />
      

      
      <Route path="/page2425/4" element={<Page24251 />} />
      <Route path="/page2425/-4" element={<Page2425n1 />} />
      <Route path="/page2425/3" element={<Page24251 />} />
      <Route path="/page2425/-3" element={<Page2425n1 />} />
      <Route path="/page2425/0" element={<Page2425 />} />
      <Route path="/page2425/-1" element={<Page2425n1 />} />
      <Route path="/page2425/1" element={<Page2425 />} />
      <Route path="/page2425/-2" element={<Page2425n1 />} />
      <Route path="/page2425/2" element={<Page2425 />} />

      <Route path="/page2525/4" element={<Page25251 />} />
      <Route path="/page2525/-4" element={<Page2525n1 />} />
      <Route path="/page2525/3" element={<Page25251 />} />
      <Route path="/page2525/-3" element={<Page2525n1 />} />
      <Route path="/page2525/0" element={<Page2525 />} />
      <Route path="/page2525/-1" element={<Page2525n1 />} />
      <Route path="/page2525/1" element={<Page25251 />} />
      <Route path="/page2525/-2" element={<Page2525n1 />} />
      <Route path="/page2525/2" element={<Page2525 />} />


      <Route path="/account" element={<Account />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/question12" element={<Question12 />} />
      <Route path="/question1" element={<Question1 />} />
      <Route path="/question14" element={<Question14 />} />
      <Route path="/question22" element={<Question22 />} />
      <Route path="/question24" element={<Question24 />} />
      <Route path="/question32" element={<Question32 />} />
      <Route path="/question34" element={<Question34 />} />
      <Route path="/question42" element={<Question42 />} />
      <Route path="/question44" element={<Question44 />} />
      <Route path="/question52" element={<Question52 />} />
      <Route path="/question54" element={<Question54 />} />

      <Route path="/result2" element={<Result2 />} />
      
      <Route path="/result/-3" element={<Result1 />} />
      <Route path="/result/3" element={<Result />} />
      <Route path="/result/-1" element={<Result1 />} />
      <Route path="/result/1" element={<Result />} />

      <Route path="/result/-2" element={<Result1 />} />
      <Route path="/result/2" element={<Result />} />
      <Route path="/result/0" element={<Result0/>} />
      <Route path="/result/4" element={<Result />} />

      <Route path="/page22/-1" element={<Page22n1 />} />
      <Route path="/page22/1" element={<Page221 />} />
      <Route path="/page23/-1" element={<Page23n1 />} />
      <Route path="/page23/1" element={<Page231 />} />
      <Route path="/page2222/-1" element={<Page2222n1 />} />
      <Route path="/page2222/1" element={<Page22221 />} />
      <Route path="/page22223/-1" element={<Page22223n1 />} />
      <Route path="/page22223/1" element={<Page222231 />} />
      <Route path="/page22224/-1" element={<Page22224n1 />} />
      <Route path="/page22224/1" element={<Page222241 />} />
      <Route path="/page22225/-1" element={<Page22225n1 />} />
      <Route path="/page22225/1" element={<Page222251 />} />

      <Route path="/resultbuzz" element={<ResultBuzz />} />
      <Route path="/seeresult" element={<Seeresult />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
       
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
