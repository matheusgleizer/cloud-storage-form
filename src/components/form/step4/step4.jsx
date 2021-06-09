import React from "react";

const Step4 = (props) => {
  if (props.currentStep !== 4) return null;

  const displayValues = Object.entries(props.values).map(([key, value]) => {
    var parameterUnity = "";
    if (key === "duration") parameterUnity = "Months";
    else if (key === "gigabytes") parameterUnity = "GB";
    else if (key === "price") parameterUnity = "$";

    if (props.values.upfrontPayment === "Yes") {
      props.values.price = 0.9 * (2 * props.values.gigabytes);
    } else {
      props.values.price = 2 * props.values.gigabytes;
    }

    return (
      <div className='display-data'>
        <label>{key.toUpperCase()}: &nbsp;</label>
        <h4>
          {value} {parameterUnity}
        </h4>
      </div>
    );
  });

  return (
    <div className='order-review'>
      <h3>Order Review</h3>
      {displayValues}
    </div>
  );
};

export default Step4;
