import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div className="background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// import React, { createContext, useState } from "react";
// import Message from "./Message";
// import Child from "../Child";
// import GrandChild from "../GrandChild";

// const Counter = () => {
//   const [Money] = useState(100);

//   const [Count, SetCount] = useState(0);
//   const increament = () => {
//     SetCount(Count + 1);
//   };
//   const Decrement = () => {
//     if (Count > 0) {
//       SetCount(Count - 1);
//     }
//   };
//   const PropsMessage =
//     "This is the Practice Of State,StateFul,StateManagement,StateLess";
//   return (
//     <>
//       <Child>
//         <GrandChild money={Money} />
//       </Child>
//       <Message text={PropsMessage} />
//       <div>{`The Count Is ${Count}`}</div>
//       <br />
//       <div>
//         <button onClick={increament}>Increament Count</button>
//       </div>
//       <br />
//       <div>
//         <button onClick={Decrement}>Decrement Count</button>
//       </div>
//     </>
//   );
// };

// export default Counter;
