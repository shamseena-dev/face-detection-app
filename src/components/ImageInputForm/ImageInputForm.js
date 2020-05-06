import React, { useState } from "react";

function ImageInputForm() {
  const [imageLink, setImageLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setImageLink("");
  };
  return (
    <div className="container">
      <div class="card blue-grey darken-1">
        <div className="card-content">
          <h6 className="white-text">Add Image Link here:</h6>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add Image link..."
              value={imageLink}
              onChange={(e) => setImageLink(e.target.value)}
            ></input>

            <button className="btn waves-effect waves-light" type="submit">
              Submit Image
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ImageInputForm;
