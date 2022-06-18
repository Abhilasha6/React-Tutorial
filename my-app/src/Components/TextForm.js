import React from "react";

export default function TextForm(props) {
  return (
    <div>
      <form>
        <div class="mb-3">
          {/* <label for="myBox" class="form-label">Email address</label> */}
          <input
            type="email"
            class="form-control"
            id="myBox"
            aria-describedby="emailHelp"
            rows="8"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
          <button className="btn btn-primary">Convert to uppercase</button>
        </div>
      </form>
    </div>
  );
}
