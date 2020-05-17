import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";

import './App.scss';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';
import Clarifai from 'clarifai';
import Footer from './components/Footer/Footer';
import SignUp from './components/SignUp/SignUp';
import Register from './components/Register/Register';



import "./components/Navbar/navbar.scss";

const app = new Clarifai.App({apiKey: '4e2ee373c4444f918cb57d903b6843a1'});


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
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
      <Route path='/home' render={()=> <div>
                      <h4 className="header-caption" style={{color:"grey"}} > Enter Image link to detect Face in it!!</h4>
                      <ImageInputForm
                        onInputChange={this.onInputChange}
                        onButtonSubmit={this.onButtonSubmit}
                      />
                      <ImageDisplay boxes={boxes} imageUrl={imageUrl} />
            </div>} />

     <Route path='/signup' component={SignUp} />
     <Route path='/register' component={Register} />
     <Route path='/' exact component = {SignUp} />
    
    </div>
     <Footer />
    </BrowserRouter>
    
  );
}
}

export default App;
