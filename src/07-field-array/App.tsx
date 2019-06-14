import React from "react";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

type dataType = {
  students?: string[];
};

const onSubmit = (data: dataType) => {
  alert(JSON.stringify(data));
};
export const App = () => (
  <Form
    onSubmit={onSubmit}
    mutators={{
      ...arrayMutators
    }}
    render={({
      handleSubmit,
      form: {
        mutators: { push }
      },
      values
    }) => (
      <div className="wrapper flex fxcolumn">
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <button type="button" onClick={() => push("students", undefined)}>
              Add Student
            </button>
          </div>
          <FieldArray name="students">
            {({ fields }) =>
              fields.map((name, index) => (
                <div key={name}>
                  <label>Student #{index + 1}</label>
                  <Field
                    name={`${name}.firstName`}
                    component="input"
                    placeholder="First Name"
                  />
                  <Field
                    name={`${name}.lastName`}
                    component="input"
                    placeholder="Last Name"
                  />
                  <Field
                    name={`${name}.age`}
                    type="number"
                    component="input"
                    placeholder="Age"
                  />
                  <span
                    onClick={() => fields.remove(index)}
                    style={{ cursor: "pointer" }}
                  >
                    delete
                  </span>
                </div>
              ))
            }
          </FieldArray>
          <button type="submit">Submit</button>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "100px"
            }}
          >
            {JSON.stringify(values)}
          </div>
        </form>
      </div>
    )}
  />
);
