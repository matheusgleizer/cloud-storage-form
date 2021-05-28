import * as yup from "yup";
var valid = require("card-validator");


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

export {
    validationSchema
};