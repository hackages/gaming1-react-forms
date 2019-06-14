import React from "react";
import { Form, Field } from "react-final-form";

export const App = () => {
  const onSubmit = data => alert(JSON.stringify(data));

  return (
    // TODO: Implement a FinalForm Form Component and use it to display the form below.
    // IMPORTANT : You'll need to use the onSubmit prop on the "Form component" and bind it to the onSubmit function you created.
    // The html form below will receive handleSubmit as a render prop.
    <form>
      <div>
        <label htmlFor="firstName">First Name</label>
        {/* TODO: Transform the input below into a FinalForm Field. */}
        <input name="firstName" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
