'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import useForm from '@/customHooks/useForm';
import React from 'react';

const validationSchema = {
  email: {
    required: true,
    // email pattern max length of 30 characters
    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    errorMessage: 'Please enter a valid email address',
  },
};

const Form = () => {
  const {
    formValues, handleChange, errors, handleBlur,
  }: any = useForm({
    email: '',
  }, validationSchema);
  return (
    <div className='flex flex-grow flex-col justify-center items-start mx-auto w-full max-w-[396px] xsm:max-w-[420px] xmd:max-w-4xl py-6 px-3 xsm:px-6'>
      <div className="flex flex-col items-center xmd:items-start mt-8 gap-4 w-full xmd:flex-row xmd:justify-between">
        <div className="w-full max-w-[368px]">
          <h5 className="text-2xl leading-7 font-medium text-thrive-dark mb-8">Forgot password</h5>
          <p className="text-sm leading-6 text-thrive-dark-500 mb-4">Type your email and we will send you a reset link for your password.</p>
          <div className=" w-full">
            <Input
              name='email'
              type='email'
              value={formValues?.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Type your email'
              label='Email'
              required
              error={errors?.email}
              parentClassName='mb-8'
            />
            <Button name='Get Reset link' className='py-2 items-center flex justify-center rounded-lg w-44' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
