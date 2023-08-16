import React, { useState } from 'react';

export default function TextForm(props) {
  const handleClick = () => {
    // console.log("Uppercase Was Clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    // console.log("On Click");
    setText(event.target.value);
  }

  const [text, setText] = useState('Hello Rajendra');
  //setText("Hello Rajendra Jat");

  return (
    <div>
      <h1>
        {props.heading}
      </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myVBox" rows="8" />
      </div>
      <button className="btn btn-primary" onClick={handleClick}>Convert To UpperCase</button>
    </div>
  );
}
