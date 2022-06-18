import React,{useState} from "react";
// state is equivalent to variable
export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText); // converts the old text to uppercase and displays it on the page
    // setText("you have clicked on handleUpClick");
  }
  const handleOnChange = ()=>{
    console.log("on change");
  }
  const[text, setText] = useState('Enter text here');
  // setText("hellooo");
// hooks help us use the properties of a class without using the class
//we cannot update the value of a status as we update a normal variable, we have to always define a function to updat a state's value as mentioned in above statement
  return (
    <div>
      { /* <h1>{props.heading} - {text}</h1> */}
      <h1>{props.heading}</h1>

      <form>
        <div class="mb-3">
          {/* <label for="myBox" class="form-label">Email address</label> */}
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleOnChange} // it  is required to perform the onclick action we have defined below
            value={text} //adds state to the variable
          ></textarea>
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        </div>
      </form>
    </div>
  );
}
