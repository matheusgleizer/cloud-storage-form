import React from "react";
import {Button} from "@material-ui/core";

const ButtonBackward = (props) => {
  if (props.currentStep === 1) return null;
  else
    return (
      <div className='footer-button'>
        <Button
          color='primary'
          variant='contained'
          size='medium'
          onClick={() => props.setStep(props.currentStep - 1)}>
          Back
        </Button>
      </div>
    );
};

export default ButtonBackward;
