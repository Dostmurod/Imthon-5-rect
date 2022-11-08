import React from "react";
import Navbar from "./components/Navbar";
import SectionManger from "./components/Section-Manger"
import Footer from "./components/Footer"
// import Box from "./componentss/box"
// import Search from "./search";
const App = () => {
  return (
    <>
      <Navbar />
      <main>
      
        <SectionManger/>
       
      </main>
      <Footer/>
    </>
  );
};

export default App;
