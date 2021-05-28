import React from "react";

const Congratulation = ({currentStep}) => {
  if (currentStep !== 5) return null;
  return (
    <div className='order-review'>
      <br />
      <br />
      <br />
      <h1>Congratulations!</h1>
      <h2>Your subscription was succeeded</h2>
      <h2>Enjoy our service!</h2>
    </div>
  );
};

export default Congratulation;
