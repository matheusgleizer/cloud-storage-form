import React from "react";
import {Button} from "@material-ui/core";
import {Field} from "formik";
import {TextField} from "formik-material-ui";

const Step3 = (props) => {
  console.log(props.errors);
  if (props.currentStep !== 3) return null;
  var disabled = true;
  if (
    props.values.cardNumber &&
    props.values.expiration &&
    props.values.securityCode &&
    !props.errors.cardNumber &&
    !props.errors.expiration &&
    !props.errors.securityCode
  )
    disabled = false;

  return (
    <div>
      <Field
        className='form-field'
        fullWidth
        component={TextField}
        name='cardNumber'
        type='number'
        label='Credit card number:'
      />
      <Field
        className='form-field'
        fullWidth
        component={TextField}
        name='expiration'
        type='date'
        label='Expiration date:'
      />
      <Field
        className='form-field'
        fullWidth
        component={TextField}
        name='securityCode'
        type='number'
        label='Security code:'
      />

      <div className='footer-button'>
        <Button
          color='primary'
          variant='contained'
          size='medium'
          onClick={() => props.setStep(2)}>
          Back
        </Button>

        <Button
          color='primary'
          variant='contained'
          size='medium'
          disabled={disabled}
          onClick={() => props.setStep(4)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step3;
