import React, { FC } from "react";
import { Form, Field, FieldRenderProps } from "react-final-form";

type dataType = {
  firstName?: string;
};
type CustomInputProps = {
  color?: string;
};

const customInput: FC<FieldRenderProps<HTMLInputElement> & CustomInputProps> = ({
  color,
  input
}) => <input {...input} style={{ color: color }} />;
export const App = () => {
  const onSubmit = (data: dataType) => alert(JSON.stringify(data));

  return (
    <div className="wrapper flex">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <Field
              name="firstName"
              component={customInput}
              type="text"
              color="red"
            />
            <Field
              name="message"
              render={({ input }) => (
                <div>
                  <label>Message</label>
                  <textarea {...input} />
                </div>
              )}
            />
            <Field name="company" type="text">
              {({ input }) => (
                <div>
                  <label>Company</label>
                  <input {...input} placeholder="Company" />
                </div>
              )}
            </Field>
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
};
