/* eslint-disable no-restricted-syntax */

'use client';

import { useState } from 'react';

interface IFormInput {
  [key: string]: string;
}

interface IValidationObj {
  [key: string]: {
    required?: boolean;
    pattern?: RegExp;
    errorMessage?: string;
    smallFormatter?: any;
    customValidator?: any;
  };
}

const useForm = (formInput: any, validationObj: undefined | IValidationObj = undefined) => {
  const [formValues, setFormValues] = useState(formInput);
  const [errors, setErrors] = useState({});

  const resetForm = (resetInput: any) => {
    if (resetInput) {
      // setFormValues((prevVal) => ({ ...prevVal, ...resetInput }));
      setFormValues((prevVal: any) => {
        const newVals: any = {};
        Object.keys(prevVal).forEach((key) => {
          newVals[key] = resetInput[key] || prevVal[key];
        });
        return newVals;
      });
    } else {
      setFormValues((prevVal: any) => {
        const newVals: any = {};
        Object.keys(prevVal).forEach((key) => {
          newVals[key] = '';
        });
        return newVals;
      });
    }
  };

  const handleChange = ({ target: { name, value } }: any) => {
    setFormValues((prev: any) => ({
      ...prev,
      [name]: value,
    }));
    // reset errors
    setErrors((prev: any) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validateInputs = (except: string[] = []) => {
    setErrors({});
    const formKeys: string[] = Object.keys(formValues);
    for (const keyVal of formKeys) {
      if (!except?.includes(keyVal) && validationObj?.[keyVal]) {
        const testObj = validationObj[keyVal];
        // check if it is required
        if (testObj?.required && !formValues[keyVal]) {
          setErrors((prevErr: any) => ({
            ...prevErr,
            [keyVal]: `${keyVal} is a required field`,
          }));
        }
        const func = testObj.smallFormatter;
        const formatted = func ? func(formValues[keyVal]) : formValues[keyVal];
        if (testObj?.customValidator) {
          const customError = testObj.customValidator(formatted, formValues);
          if (customError) {
            setErrors((prevErr: any) => ({
              ...prevErr,
              [keyVal]: customError,
            }));
          } else if (testObj?.pattern && !testObj?.pattern?.test(formatted)) {
            setErrors((prevErr: any) => ({
              ...prevErr,
              [keyVal]: testObj.errorMessage || `${keyVal} validation error`,
            }));
          }
        }
      }
    }
    return true;
  };

  const handleBlur = (e: any) => {
    const { name } = e.target;
    const testObj = validationObj?.[name];
    if (testObj) {
      const func = testObj.smallFormatter;
      const formatted = func ? func(formValues[name]) : formValues[name];
      if (testObj?.customValidator) {
        const customError = testObj.customValidator(formatted, formValues);
        if (customError) {
          setErrors((prevErr: any) => ({
            ...prevErr,
            [name]: customError,
          }));
        }
      } else if (
        testObj?.pattern && !testObj?.pattern?.test(formatted)
      ) {
        setErrors((prevErr: any) => ({
          ...prevErr,
          [name]: testObj.errorMessage || `${name} validation error`,
        }));
      }
    }
  };

  return {
    handleChange,
    formValues,
    resetForm,
    validateInputs,
    errors,
    setErrors,
    handleBlur,
  };
};

export default useForm;
