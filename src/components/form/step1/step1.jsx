import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Container,
} from "@material-ui/core";
import {palette} from "@material-ui/system";
import {Field} from "formik";

const Step1 = (props) => {
  if (props.currentStep !== 1) return null;
  console.log(props.values);

  return (
    <div>
      <InputLabel className='input-label'>Duration:</InputLabel>
      <Field
        as={Select}
        className='input-area'
        fullWidth
        name='duration'
        type='number'
        defaultValue={props.values.duration}>
        <MenuItem value='3'>3 Months</MenuItem>
        <MenuItem value='6'>6 Months</MenuItem>
        <MenuItem value='12'>12 Months</MenuItem>
      </Field>

      <InputLabel className='input-label'>
        Amount of gigabytes in a cloud:
      </InputLabel>
      <Field
        as={Select}
        className='input-area'
        fullWidth
        name='gigabytes'
        type='number'
        defaultValue={props.values.gigabytes}>
        <MenuItem value='3'>3 GB</MenuItem>
        <MenuItem value='5'>5 GB</MenuItem>
        <MenuItem value='10'>10 GB</MenuItem>
        <MenuItem value='20'>20 GB</MenuItem>
        <MenuItem value='30'>30 GB</MenuItem>
        <MenuItem value='50'>50 GB</MenuItem>
      </Field>

      <InputLabel className='input-label'>Upfront payment:</InputLabel>
      <Field
        as={Select}
        className='input-area'
        fullWidth
        name='upfrontPayment'
        type='number'
        defaultValue={props.values.upfrontPayment}>
        <MenuItem value={0}>No</MenuItem>
        <MenuItem value={1}>Yes</MenuItem>
      </Field>

      <div className='footer-button'>
        <Button
          color='primary'
          variant='contained'
          size='medium'
          onClick={() => props.setStep(2)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step1;
