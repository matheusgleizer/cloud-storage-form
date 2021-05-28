import React, {useState} from "react";
import {Formik, Form} from "formik";
import {Container, createMuiTheme, ThemeProvider} from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import * as yup from "yup";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";
import Step4 from "./step4/step4";
import "./form.scss";
var valid = require("card-validator");

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

const validationSchema = yup.object({
  lastName: yup
    .string()
    .min(3, "Last name must be at least 3 characters.")
    .max(50, "Last name too long.")
    .required("Last name is required."),
  firstName: yup
    .string()
    .min(3, "First name must be at least 3 characters.")
    .max(50, "First name too long")
    .required("First name is required."),
  email: yup
    .string()
    .email("E-mail not valid.")
    .required("E-mail is required."),
  address: yup.string().required("Address is required."),
  cardNumber: yup
    .string()
    .min(16, "Card number must be at least 16 numbers.")
    .max(18, "Card number invalid.")
    .required("Credit card is required."),
  expiration: yup.date().required("Expiration date is required"),
  securityCode: yup
    .string()
    .min(3, "Security code must be at least 3 numbers.")
    .max(4, "Security code invalid.")
    .required("Security code is required."),

  //   cardNumber: yup
  //     .string()
  //     .test(
  //       "test-number",
  //       "Credit Card number is invalid",
  //       (value) => valid.number(value).isValid
  //     )
  //     .required("Credit card number is required."),
  //   expiration: yup
  //     .string()
  //     .test(                                                                  //Credit card validation - disabled for test reasons
  //       "test-expiration",
  //       "Expiration date is invalid",
  //       (value) => valid.expirationDate(value).isValid
  //     )
  //     .required("Expiration date is required."),
  //   securityCode: yup
  //     .string()
  //     .test(
  //       "test-cvv",
  //       "Security code is invalid",
  //       (value) => valid.cvv(value).isValid
  //     )
  //     .required("Security code is required"),
});

function FormContainer() {
  const [currentStep, setStep] = useState(1);

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
      }}
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}>
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
              </div>
            </Container>
          </Form>
        </ThemeProvider>
      )}
    </Formik>
  );
}

export default FormContainer;
