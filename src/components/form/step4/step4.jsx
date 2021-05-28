import React from "react";
import {Button} from "@material-ui/core";

const Step4 = (props) => {
  console.log(props.values);
  if (props.currentStep !== 4) return null;

  const displayValues = Object.entries(props.values).map(([key, value]) => {
    return (
      <div className='display-data'>
        <label>{key.toUpperCase()}: &nbsp;</label>
        <h4>{value}</h4>
      </div>
    );
  });

  return (
    <div className='order-review'>
      <h3>Order Review</h3>
      {displayValues}

      <div className='footer-button'>
        <Button
          color='primary'
          variant='contained'
          size='medium'
          onClick={() => props.setStep(3)}>
          Back
        </Button>

        <Button color='primary' variant='contained' size='medium' type='submit'>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Step4;
