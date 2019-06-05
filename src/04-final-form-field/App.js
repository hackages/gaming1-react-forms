import React from "react";
import { Form, Field } from "react-final-form";

const customInput = ({ input }) => <></>;
export const App = () => {
  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <div className="wrapper flex">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {/* // */}
            {/* TODO: Convert the following input and label into a Field using the customInput component as a COMPONENT prop */}
            <div>
              <label>First Name</label>
              <input name="firstName" type="text" style={{ color: "red" }} />
            </div>
            {/* // */}

            {/* TODO: Convert the following input and label into a Field using the RENDER function */}
            <div>
              <label>Message</label>
              <textarea name="message" />
            </div>

            {/* TODO: Convert the following input and label into a Field using the CHILDREN prop */}
            <div>
              <label>Company</label>
              <input type="text" placeholder="Company" />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
};
