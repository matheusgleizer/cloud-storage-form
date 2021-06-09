import React, {useState} from "react";
import {Formik, Form} from "formik";
import {
  Container,
  createMuiTheme,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import ButtonBackward from "./buttons/button-backward";
import ButtonForward from "./buttons/button-forward";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";
import Step4 from "./step4/step4";
import Congratulation from "./congratulation/congratulation";
import "./form.scss";
import {validationSchema} from "./validationSchema";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: blue[50],
    },
  },
});

function FormContainer() {
  const [currentStep, setStep] = useState(1);

  const handleSubmit = async (values) => {
    console.log(values);
    await fetch("https://httpbin.org/post", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(values),
    }).then(setStep(currentStep + 1));
  };

  return (
    <Formik
      initialValues={{
        duration: 12,
        gigabytes: 5,
        upfrontPayment: "No",
        lastName: "",
        firstName: "",
        email: "",
        address: "",
        cardNumber: "",
        expiration: "",
        securityCode: "",
        price: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({errors, values, handleChange}) => (
        <ThemeProvider theme={theme}>
          <Form className='main-form'>
            <Container className='container-component'>
              <div className='form-header'>Create Your Cloud Account</div>

              <div className='step-content'>
                <Step1
                  handleChange={handleChange}
                  currentStep={currentStep}
                  setStep={setStep}
                  values={values}
                />
                <Step2
                  currentStep={currentStep}
                  setStep={setStep}
                  errors={errors}
                  values={values}
                />
                <Step3
                  currentStep={currentStep}
                  setStep={setStep}
                  errors={errors}
                  values={values}
                />
                <Step4
                  currentStep={currentStep}
                  setStep={setStep}
                  errors={errors}
                  values={values}
                />
                <Congratulation currentStep={currentStep} />
                <ButtonForward
                  currentStep={currentStep}
                  setStep={setStep}
                  error={errors}
                  values={values}
                />
                <ButtonBackward
                  currentStep={currentStep}
                  setStep={setStep}
                  error={errors}
                  values={values}
                />
              </div>
            </Container>
          </Form>
        </ThemeProvider>
      )}
    </Formik>
  );
}

export default FormContainer;
