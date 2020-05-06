import React,{useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import './App.css';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';
import imageContext from './contexts/imageContext';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';

class App extends Component{
  const [imageLink,setImageLink] = useState("https://www.google.com");
  return (
    <imageContext.Provider value={[imageLink,setImageLink]}>
    <div className="App">
      <Navbar />
      <Home />
      <ImageInputForm/>
      <ImageDisplay />

    </div>
    </imageContext.Provider>
  )
}

export default App;
