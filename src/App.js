import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PostsList from "./components/PostsList";


function App(){
  return(
    <div>
      <Header/>
      <HomePage/>
      <PostsList/>
      <Footer/>
    </div>
  );
}

export default App;