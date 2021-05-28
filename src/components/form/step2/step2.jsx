import React from "react";
import {Button, Container} from "@material-ui/core";
import {Field} from "formik";
import {TextField} from "formik-material-ui";

const Step2 = (props) => {
  if (props.currentStep !== 2) return null;
  var disabled = true;
  console.log(props.values);
  if (
    props.values.firstName &&
    props.values.lastName &&
    props.values.email &&
    props.values.address &&
    !props.errors.entries
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
        type='lastName'
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
