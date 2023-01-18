import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';
import Button from '../Button/Button';
import MySelect from '../Input/MySelect';

const SignupForm = () => {
  let selectedPlan = 'Basic Pack';

  const handlePlanChange = (plan) => {
    selectedPlan = plan;
  };

  function formatNumber(inputVal) {
    let inputNumbersOnly = inputVal.replace(/\D/g, '');
    return inputNumbersOnly;
  }
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phoneNumber: '',
        company: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(20, 'Must be 15 characters or less')
          .required('Name is required')
          .trim(),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        phoneNumber: Yup.string()
          .max(10, 'Invalid phone number')
          .min(10, 'Invalid phone number')
          .required('Phone number is required'),
        company: Yup.string()
          .min(3, 'Must be 3 characters or long')
          .required('Company name is required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log({ ...values, selectedPlan });
        resetForm();
      }}
    >
      {(formik) => {
        return (
          <Form className="w-[327px] px-6 mx-auto pt-6 pb-6 rounded-[13px] bg-white sm:w-[445px] sm:px-[42px] sm:pt-10 sm:pb-[51px] lg:w-[327px] lg:px-6 xl:w-[445px] xl:px-[42px]">
            <div className="flex flex-col gap-6">
              <div>
                <Input
                  label="Name"
                  name="name"
                  type="text"
                  maxLength={20}
                  placeholder="Name"
                />
              </div>
              <div>
                <Input
                  label="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <MySelect onChange={handlePlanChange} />
              </div>
              <div>
                <Input
                  label="phone"
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  maxLength="10"
                  onChange={(e) => {
                    formik.setFieldValue(
                      'phoneNumber',
                      formatNumber(e.target.value)
                    );
                  }}
                />
              </div>
              <div>
                <Input
                  label="company"
                  name="company"
                  type="text"
                  placeholder="Company"
                />
              </div>
            </div>
            <div className="pt-10">
              <Button btnType="blue" type="submit">
                Get on the list
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignupForm;
