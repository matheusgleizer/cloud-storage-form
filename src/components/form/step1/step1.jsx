import React from "react";
import {Button, InputLabel, Select, MenuItem} from "@material-ui/core";
import {Field} from "formik";

const Step1 = (props) => {
  if (props.currentStep !== 1) return null;
  console.log(props.values);

  const step1Map = [
    {
      label: "Duration:",
      name: "duration",
      items: [3, 6, 12],
      itemsType: "Months",
    },
    {
      label: "Amount of gigabytes in a cloud:",
      name: "gigabytes",
      items: [3, 5, 10, 20, 30, 50],
      itemsType: "GB",
    },
    {
      label: "Upfront payment:",
      name: "upfrontPayment",
      items: ["Yes", "No"],
      itemsType: "",
    },
  ];

  return (
    <div>
      {step1Map.map(({label, name, items, itemsType}) => (
        <div>
          <InputLabel className='input-label'>{label}</InputLabel>
          <Field
            id={name}
            as={Select}
            className='input-area'
            fullWidth
            name={name}
            type='number'
            defaultValue={props.values.name}>
            {items.map((value) => (
              <MenuItem value={value}>
                {value} {itemsType}
              </MenuItem>
            ))}
          </Field>
        </div>
      ))}

      <div className='footer-button'>
        <Button
          color='primary'
          variant='contained'
          size='medium'
          onClick={() => props.setStep(2)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step1;
