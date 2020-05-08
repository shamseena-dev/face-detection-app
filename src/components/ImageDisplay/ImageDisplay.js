import React from "react";

import "./imageDisplay.css";



const ImageDisplay =({ imageUrl, box }) =>{
	
    return(
        <div className="center">
        <div className="absoluteDiv">
        <img id='inputimage' className="border-img" alt='' src={imageUrl} width='500px' height='auto'/>
         
            
            <div className="bounding_box" style={{top: box.toprow , bottom: box.bottomrow, right:box.rightcol,left:box.leftcol}}></div>
            
            
            
        </div>
        </div>
    );
}

export default ImageDisplay;