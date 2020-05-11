import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import './App.css';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';
import Clarifai from 'clarifai';
import Footer from './components/Footer/Footer';
import SignUp from './components/SignUp/SignUp';
import Register from './components/Register/Register';

import sample from "./kids.JPG";

const app = new Clarifai.App({apiKey: '4e2ee373c4444f918cb57d903b6843a1'});


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: sample,
      boxes: [],
      
    }
  }
  calculateFacePosition = (data)=>{
    const clarifaiFace_Array = data.outputs[0].data.regions;

    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    const positions = clarifaiFace_Array.map(face =>{
        
        return {
            leftcol: face.region_info.bounding_box.left_col * width,
            toprow: face.region_info.bounding_box.top_row * height,
            rightcol: width - (face.region_info.bounding_box.right_col * width),
            bottomrow: height - (face.region_info.bounding_box.bottom_row * height)
    }
    });

    return positions;
  }
  /*
  calculateFacePosition = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftcol: clarifaiFace.left_col * width,
      toprow: clarifaiFace.top_row * height,
      rightcol: width - (clarifaiFace.right_col * width),
      bottomrow: height - (clarifaiFace.bottom_row * height)
    }
  }
  */

  displayFaceBox = (boxes) => {
    this.setState({boxes: boxes});
    
  }

  onInputChange = (event) => {
    event.preventDefault();
    this.setState({input: event.target.value});
  }
  onButtonSubmit = (e) => {
      e.preventDefault();
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        
        this.displayFaceBox(this.calculateFacePosition(response))
      })
      .catch(err => console.log(err));
  }
  render() {
    const {  imageUrl, boxes } = this.state;
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Home />
      <ImageInputForm  onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}/>
      <ImageDisplay boxes={boxes} imageUrl={imageUrl}/>
      <SignUp />
      <Register />
      <Footer />
    </div>
    </BrowserRouter>
    
  );
}
}

export default App;
