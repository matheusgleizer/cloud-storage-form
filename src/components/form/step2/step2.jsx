import React from "react";
import {Button} from "@material-ui/core";
import {Field} from "formik";
import {TextField} from "formik-material-ui";

const Step2 = (props) => {
  console.log(props.errors);
  if (props.currentStep !== 2) return null;
  var disabled = true;
  console.log(props.values);
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

  return (
    <div>
      <Field
        className='form-field'
        fullWidth
        component={TextField}
        name='firstName'
        type='text'
        label='First name:'
      />
      <Field
        className='form-field'
        fullWidth
        component={TextField}
        name='lastName'
        type='text'
        label='Last name:'
      />
      <Field
        className='form-field'
        fullWidth
        component={TextField}
        name='email'
        type='email'
        label='Email:'
      />
      <Field
        className='form-field'
        fullWidth
        component={TextField}
        name='address'
        type='text'
        label='Address:'
      />

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
