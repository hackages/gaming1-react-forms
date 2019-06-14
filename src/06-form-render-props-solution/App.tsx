import React, { FC } from "react";
import { Form, Field, FieldRenderProps } from "react-final-form";

const FIRSTNAME_LABEL = "First Name";
const LASTNAME_LABEL = "Last Name";
const EMAIL_LABEL = "Email";
const AGE_LABEL = "Age";

const initialValues = {
  firstName: "John"
};

const requiredEmail = (value: string) => {
  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return !emailRegex.test(String(value).toLowerCase()) && "Invalid email";
};

const requiredField = (value: string) => !value && "Required";

type CustomInputProps = {
  labelText?: string;
  required?: boolean;
};

const CustomInput: FC<FieldRenderProps<HTMLElement> & CustomInputProps> = ({
  input,
  meta: { touched, error },
  labelText,
  required
}) => {
  const hasError = !!touched && !!error;
  return (
    <div>
      <label>
        {labelText}
        {required && "*"}
      </label>
      <input {...input} className={hasError ? "error" : ""} />
      <span className="error-text">{hasError && error}</span>
    </div>
  );
};

type dataType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  age?: number;
};

export const App: FC = () => {
  const onSubmit = (data: dataType) => alert(JSON.stringify(data));
  return (
    <div className="wrapper flex">
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, pristine, invalid, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <Field
              component={CustomInput}
              labelText={FIRSTNAME_LABEL}
              name="firstName"
              validate={requiredField}
              type="text"
              required
            />
            <Field
              component={CustomInput}
              labelText={LASTNAME_LABEL}
              name="lastName"
              validate={requiredField}
              type="text"
              required
            />
            <Field
              component={CustomInput}
              labelText={EMAIL_LABEL}
              name="email"
              required
              type="email"
              validate={requiredEmail}
            />
            <Field
              component={CustomInput}
              labelText={AGE_LABEL}
              name="age"
              required
              type="number"
              validate={requiredField}
            />
            <button type="submit" disabled={pristine || invalid}>
              Submit
            </button>
            <div>Invalid Fields : {Object.entries(errors).length}</div>
            <ul>
              Completed Fields :{" "}
              {Object.keys(values).map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </form>
        )}
      />
    </div>
  );
};
