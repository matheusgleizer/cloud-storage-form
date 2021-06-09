import React from "react";
import {Field} from "formik";
import {TextField} from "formik-material-ui";

const Step2 = (props) => {
  if (props.currentStep !== 2) return null;

  const step2Map = [
    {
      label: "First name:",
      name: "firstName",
      type: "text",
    },
    {
      label: "Last name:",
      name: "lastName",
      type: "text",
    },
    {
      label: "Email:",
      name: "email",
      type: "email",
    },
    {
      label: "Address:",
      name: "address",
      type: "text",
    },
  ];

  return (
    <div>
      {step2Map.map(({label, name, type}) => (
        <div>
          <Field
            className='form-field'
            fullWidth
            component={TextField}
            name={name}
            type={type}
            label={label}></Field>
        </div>
      ))}
    </div>
  );
};

export default Step2;
