import React from "react";
import { Form, Field } from "react-final-form";

// Create a validation function that return a string containing an error message only if the value is not empty.
// You'll need to assign that validation function to the Field

const CustomInput = ({ input, meta }) => {
  // Find a way to display the error message returned by the validation function
  // HINT: you can console.log the meta object to find useful values
  return (
    <div>
      <label>Last Name*</label>
      <input {...input} />
    </div>
  );
};

export const App = () => {
  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <div className="wrapper flex">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="lastName"
              component={CustomInput}
              type="text"
              validate=""
            />
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
};
