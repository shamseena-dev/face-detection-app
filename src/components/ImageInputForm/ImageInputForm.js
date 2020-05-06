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

          <form onSubmit={(e)=>{
                     e.preventDefault();
                     setImageLink(image);     
      app.models.predict(Clarifai.FACE_DETECT_MODEL, image)
        .then(response => {
          const boxArray= response.outputs[0].data.regions.map(box=>{
            return {
              top_row :box.region_info.bounding_box.top_row,
               left_col :box.region_info.bounding_box.left_col,
                bottom_row :box.region_info.bounding_box.bottom_row,
                 right_col :box.region_info.bounding_box.right_col

            }
          });
          console.log("here", boxArray);
        })
        .catch(err => {
          console.log(err);
        });
      }}>
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
