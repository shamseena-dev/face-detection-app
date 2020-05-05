import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import './App.css';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ImageInputForm/>

    </div>
  )
}

export default App;
