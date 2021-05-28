import React, {useState} from "react";
import {Formik, Form} from "formik";
import {Container, createMuiTheme, ThemeProvider} from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import * as yup from "yup";
import Step1 from "./step1/step1.jsx";
import Step2 from "./step2/step2.jsx";
import "./form.scss";

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
    .min(3, "Too short!")
    .max(50, "Too long")
    .required("Last name is required."),
  firstName: yup
    .string()
    .min(3, "Too short!")
    .max(50, "Too long")
    .required("First name is required."),
  email: yup
    .string()
    .email("E-mail not valid.")
    .required("E-mail is required."),
  address: yup.string().required("Address is required."),
});

function FormContainer() {
  const [currentStep, setStep] = useState(1);

  return (
    <Formik
      initialValues={{
        duration: 12,
        gigabytes: 5,
        upfrontPayment: 0,
        lastName: "",
        firstName: "",
        email: "",
        address: "",
        creditCard: "",
        number: "",
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
              </div>
            </Container>
          </Form>
        </ThemeProvider>
      )}
    </Formik>
  );
}

export default FormContainer;
