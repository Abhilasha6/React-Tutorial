import React,{useState} from "react";
// state is equivalent to variable
export default function TextForm(props) {

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
          <input
            type="email"
            class="form-control"
            id="myBox"
            aria-describedby="emailHelp"
            rows="8"

            value={text} //adds state to the variable
          />
          <button className="btn btn-primary">Convert to uppercase</button>
        </div>
      </form>
    </div>
  );
}
