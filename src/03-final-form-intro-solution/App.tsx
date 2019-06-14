import React from "react";
import { Form, Field } from "react-final-form";

type dataType = {
  firstName?: string;
};

export const App = () => {
  const onSubmit = (data: dataType) => alert(JSON.stringify(data));

  return (
    <div className="wrapper flex">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <Field name="firstName" component="input" />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
};
