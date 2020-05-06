import React, { useContext } from "react";
import imageContext from "../../contexts/imageContext";

function ImageDisplay(){
	const [link] = useContext(imageContext);
    return(
        <div>
            <img src={link} alt="" style={{"width":"500px","height":"auto"}} />
            <p> Link : {link}</p>
            
        </div>
    );
}
export default ImageDisplay;