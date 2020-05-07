import React from "react";

    

function ImageInputForm({ onInputChange, onButtonSubmit }) {
 
  
    
  return (
    <div className="container">
      <div className="card darken-1">
      
        <div className="card-content">
          <h6 className="white-text">Add Image Link here:</h6>

          <form >
            <input
              type="text"
              placeholder="Add Image link..."
              
             onChange={onInputChange}></input>
  
            <button className="btn waves-effect waves-light" type="submit" onClick={onButtonSubmit}>
              Detect 
            </button>
          
          </form>
        </div>
      </div>
    </div>
  );
}
export default ImageInputForm;



