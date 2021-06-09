import React from "react";
import {Button} from "@material-ui/core";

const ButtonForward = (props) => {
  console.log(props.values);
  var disabled = true;
  if (
    props.currentStep === 1 ||
    (props.currentStep === 2 &&
      props.values.firstName &&
      props.values.lastName &&
      props.values.email &&
      props.values.address &&
      !props.errors.firstName &&
      !props.errors.lastName &&
      !props.errors.email &&
      !props.errors.address) ||
    (props.currentStep === 3 &&
      props.values.cardNumber &&
      props.values.expiration &&
      props.values.securityCode &&
      !props.errors.cardNumber &&
      !props.errors.expiration &&
      !props.errors.securityCode)
  ) {
    disabled = false;
  } else if (props.currentStep === 4) {
    return (
      <div className='footer-button'>
        <Button
          color='primary'
          variant='contained'
          size='medium'
          type='submit'
          onClick={(values) => props.handleSubmit(values)}>
          Submit
        </Button>
      </div>
    );
  }

  return (
    <div className='footer-button'>
      <Button
        color='primary'
        variant='contained'
        size='medium'
        disabled={disabled}
        onClick={() => props.setStep(props.currentStep + 1)}>
        Next
      </Button>
    </div>
  );
};

export default ButtonForward;
