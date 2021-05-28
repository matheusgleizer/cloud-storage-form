import React from "react";
import {Field} from "formik";
import {TextField} from "formik-material-ui";

const Step4 = (props) => {
  console.log(props.values);
  if (props.currentStep !== 4) return null;
  return (
    <div className='order-review'>
      <h3>Order Review</h3>
      <div className='display-data'>
        <div>
          <p>Name:</p>
          <h4>{props.values.firstName + " " + props.values.lastName}</h4>
        </div>
        <div>
          <p>Contract period:</p>
          <h4>{props.values.duration}</h4>
        </div>
        <div>
          <p>Amount of gigabytes:</p>
          <h4>{props.values.gigabytes}</h4>
        </div>
        <div>
          <p>Upfront payment:</p>
          <h4>{props.values.upfrontPayment}</h4>
        </div>
        <div>
          <p>Email:</p>
          <h4>{props.values.email}</h4>
        </div>
        <div>
          <p>Address:</p>
          <h4>{props.values.address}</h4>
        </div>
        <div>
          <p>Credit card number:</p>
          <h4>{props.values.cardNumber}</h4>
        </div>
        <div>
          <p>Card expiration date:</p>
          <h4>{props.values.expiration}</h4>
        </div>
        <div>
          <p>Security code:</p>
          <h4>{props.values.securityCode}</h4>
        </div>
      </div>
    </div>
  );
};

export default Step4;
