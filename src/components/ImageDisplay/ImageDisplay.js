import React, { useContext } from "react";
import imageContext from "../../contexts/imageContext";
import "./imageDisplay.css";

function ImageDisplay(){
	const [link] = useContext(imageContext);
    return(
        <div>
            <img className="img1" src={link} alt="" style={{"width":"500px","height":"100%"}} />
            <div className="bounding_box" style={{top: "4%" ,"bottom":"93%","right":"96%","left":"4%"}}>ki</div>
            <p> Link : {link}</p>
            
        </div>
    );
}
export default ImageDisplay;