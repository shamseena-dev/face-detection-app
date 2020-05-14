import React from 'react';
import "./home.css";
import logo from '../../logo.png';
import "../Navbar/navbar.css";
import sample from "../../sample.JPG";

function Home(){
    return( <>
			
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