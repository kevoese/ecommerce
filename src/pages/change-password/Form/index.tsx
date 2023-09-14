'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import useForm from '@/customHooks/useForm';
import React from 'react';

const validationSchema = {
  password: {
    required: true,
    /* password pattern should be between 8-16 characters,
    contain lower case letters,
    at least an uppercase letter, a Special Character and at least one number
    */
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
    errorMessage: `Password should be between 8-16 characters, contain
    lower case letters, at least an uppercase letter, a Special
    Character and at least one number`,
  },
  confirmPassword: {
    required: true,
    /* password pattern must Password should be between 8-16 characters,
    contain lower case letters,
    at least an uppercase letter, a Special Character and at least one number
    */
    customValidator: (value: any, formValues: any) => {
      if (value !== formValues.password) {
        return 'Password does not match';
      }
      return '';
    },
  },
};

const Form = () => {
  const {
    formValues, handleChange, resetForm, errors, validateInputs, handleBlur,
  }: any = useForm({
    password: '',
    confirmPassword: '',
  }, validationSchema);
  return (
    <div className='flex flex-grow flex-col justify-center items-start mx-auto w-full max-w-[396px] xsm:max-w-[420px] xmd:max-w-4xl py-6 px-3 xsm:px-6'>
      <div className="flex flex-col items-center xmd:items-start mt-8 gap-4 w-full xmd:flex-row xmd:justify-between">
        <div className="w-full max-w-[368px]">
          <h5 className="text-2xl leading-7 font-medium text-thrive-dark mb-8">Change Password</h5>
          <p className="text-sm leading-6 text-thrive-dark-500 mb-4">
            Enter your new password and confirm it.
          </p>
          <div className=" w-full">
            <Input
              name='password'
              type='password'
              value={formValues?.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Type your password'
              label='Password'
              required
              error={errors?.password}
              parentClassName='mb-4'
            />
            <Input
              name='confirmPassword'
              type='password'
              value={formValues?.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Re-enter your password'
              label='Confirm Password'
              required
              error={errors?.confirmPassword}
              parentClassName='mb-8'
            />
            <Button name='Reset password' className='py-2 items-center flex justify-center rounded-lg w-44' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
