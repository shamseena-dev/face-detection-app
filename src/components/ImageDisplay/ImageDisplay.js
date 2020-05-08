import React from "react";

import "./imageDisplay.css";



const ImageDisplay =({ imageUrl, boxes }) =>{
	 const facelist = boxes.map((box,index)=>{
                   return <div key={index} className="bounding_box" style={{top: box.toprow , bottom: box.bottomrow, right:box.rightcol,left:box.leftcol}}></div>
                });
    
    
          
    return(
        <div className="center">
        <div className="absoluteDiv">
        <img id='inputimage' className="border-img" alt='' src={imageUrl} width='500px' height='auto'/>
         
            
            {facelist} 
            
            
            
            
            
        </div>
        </div>
    );
}

export default ImageDisplay;