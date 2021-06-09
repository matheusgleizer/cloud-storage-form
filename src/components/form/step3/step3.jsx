import React from "react";
import {Field} from "formik";
import {TextField} from "formik-material-ui";

const Step3 = (props) => {
  if (props.currentStep !== 3) return null;

  const step3Map = [
    {
      label: "Credit card number:",
      name: "cardNumber",
      type: "number",
    },
    {
      label: "Expiration date:",
      name: "expiration",
      type: "date",
    },
    {
      label: "Security code:",
      name: "securityCode",
      type: "number",
    },
  ];

  return (
    <div>
      {step3Map.map(({label, name, type}) => (
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

export default Step3;
