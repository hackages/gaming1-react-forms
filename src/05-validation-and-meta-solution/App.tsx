import React, { FC } from "react";
import { Form, Field, FieldRenderProps } from "react-final-form";

const requiredField = (value: string) => !value && "Required";

type dataType = {
  firstName?: string;
};

const CustomInput: FC<FieldRenderProps<HTMLElement>> = ({
  input,
  meta: { touched, error }
}) => (
  <div>
    <label>Last Name*</label>
    <input {...input} />
    <span>{!!touched && !!error && error}</span>
  </div>
);
export const App = () => {
  const onSubmit = (data: dataType) => alert(JSON.stringify(data));

  return (
    <div className="wrapper flex">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="lastName"
              type="text"
              component={CustomInput}
              validate={requiredField}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
};
