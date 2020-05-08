import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import './App.css';
import ImageInputForm from './components/ImageInputForm/ImageInputForm';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';
import Clarifai from 'clarifai';
import Footer from './components/Footer/Footer';
import pic from "./girl-pic.jpg";

const app = new Clarifai.App({apiKey: '4e2ee373c4444f918cb57d903b6843a1'});


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      
    }
  }
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

  displayFaceBox = (box) => {
    this.setState({box: box});
    console.log("box",box);
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
    const {  imageUrl, box } = this.state;
  return (
    
    <div className="App">
      <Navbar />
      <Home />
      <ImageInputForm  onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}/>
      <ImageDisplay box={box} imageUrl={imageUrl}/>
      
      <Footer />
    </div>
    
  );
}
}

export default App;
