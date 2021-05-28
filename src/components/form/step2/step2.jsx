import React from "react";
import {Button} from "@material-ui/core";
import {Field} from "formik";
import {TextField} from "formik-material-ui";

const Step2 = (props) => {
  if (props.currentStep !== 2) return null;
  var disabled = true;
  if (
    props.values.firstName &&
    props.values.lastName &&
    props.values.email &&
    props.values.address &&
    !props.errors.firstName &&
    !props.errors.lastName &&
    !props.errors.email &&
    !props.errors.address
  )
    disabled = false;

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

      <div className='footer-button'>
        <Button
          color='primary'
          variant='contained'
          size='medium'
          onClick={() => props.setStep(1)}>
          Back
        </Button>

        <Button
          color='primary'
          variant='contained'
          size='medium'
          disabled={disabled}
          onClick={() => props.setStep(3)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step2;
