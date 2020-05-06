import React,{useContext, useState} from "react";
import imageContext from "../../contexts/imageContext";
import Clarifai from 'clarifai';
      

function ImageInputForm() {
 const [imageLink, setImageLink] = useContext(imageContext);
  const [image, setImage] = useState("")
  const app = new Clarifai.App({apiKey: '4e2ee373c4444f918cb57d903b6843a1'});

  
  return (
    <div className="container">
      <div className="card blue-grey darken-1">
      
        <div className="card-content">
          <h6 className="white-text">Add Image Link here:</h6>

          <form onSubmit={(e)=>{e.preventDefault();
          setImageLink(image);}}>
            <input
              type="text"
              placeholder="Add Image link..."
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></input>
  
            <button className="btn waves-effect waves-light" type="submit">
              Submit Image
            </button>
            <p> here: {imageLink}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ImageInputForm;
