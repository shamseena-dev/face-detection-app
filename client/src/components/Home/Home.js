import React from 'react';
import "./home.scss";

import sample from "../../sample.JPG";

function Home(){
    return( <>
			      <div>
            <h4> Enter Image URL to detect face/s in  it </h4>
            <ImageInputForm
                        onInputChange={this.onInputChange}
                        onButtonSubmit={this.onButtonSubmit}
                      />
            <ImageDisplay boxes={boxes} imageUrl={imageUrl} />

    	<div className="container caption">
      <h4> Enter Image link to detect <span style={{color:"blue"}}>Face</span> in it!!</h4>

      
      </div>
      </>
    );
}
export default Home;