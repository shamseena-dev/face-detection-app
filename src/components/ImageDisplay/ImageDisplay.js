import React, {useContext} from "react";
import imageContext from "../../contexts/imageContext";

function ImageDisplay(){
    
    return(
        <div className="display">
            <img src={useContext(imageContext)} alt="display" style={{"width":"400px","height":"auto"}}/>
        </div>
    );
}
export default ImageDisplay;