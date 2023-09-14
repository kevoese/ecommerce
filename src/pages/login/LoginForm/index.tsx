'use client';

import Button from '@/components/Button';
import CheckboxText from '@/components/CheckboxText';
import Input from '@/components/Input';
import useForm from '@/customHooks/useForm';
import Link from 'next/link';
import React from 'react';

const validationSchema = {
  firstName: {
    required: true,
    // string maximum length of 30 characters
    pattern: /^[a-zA-Z]{2,30}$/,
    errorMessage: 'Please enter a valid first name',
  },
  lastName: {
    required: true,
    // string maximum length of 30 characters
    pattern: /^[a-zA-Z]{2,30}$/,
    errorMessage: 'Please enter a valid last name',
  },
  email: {
    required: true,
    // email pattern max length of 30 characters
    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    errorMessage: 'Please enter a valid email address',
  },
  password: {
    required: true,
    /* password pattern should be between 8-16 characters,
    contain lower case letters,
    at least an uppercase letter, a Special Character and at least one number
    */
    pattern: /^[a-zA-Z]{2,30}$/,
    errorMessage: 'Please enter a valid password',
  },
};

const LoginForm = () => {
  const {
    formValues, handleChange, errors, handleBlur,
  }: any = useForm({
    email: '',
    password: '',
    termsAndConditions: false,
  }, validationSchema);
  return (
    <div className='flex flex-grow flex-col justify-center items-start mx-auto w-full max-w-[396px] xsm:max-w-[420px] xmd:max-w-4xl py-6 px-3 xsm:px-6'>
      <div className="flex flex-col items-center xmd:items-start mt-8 gap-4 w-full xmd:flex-row xmd:justify-between">
        <div className="w-full max-w-[368px]">
          <h5 className="text-2xl leading-7 font-medium text-thrive-dark mb-8">Registered Customers</h5>
          <p className="text-sm leading-6 text-thrive-dark-500 mb-4">If you have an account, sign in with your email address.</p>
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
              parentClassName='mb-4'
            />
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
            <CheckboxText
              text='By using this form you agree with the storage and handling of your data by this website.'
              className='mb-4'
              id="newsletter"
              name="newsletter"
              onChange={handleChange}
              value={formValues?.newsletter}
            />
            <div className="flex justify-between items-center mt-8">
              <Button name='Sign in' className='py-2 items-center flex justify-center rounded-lg w-44' />
              <Link href='/forgot-password'><span className="text-thrive-blue text-sm leading-6 underline font-medium">Forgot Password</span></Link>
            </div>
          </div>

        </div>
        <div className="w-full max-w-[368px]">
          <h5 className="text-2xl leading-7 font-medium text-thrive-dark mb-8">New Customers</h5>
          <p className="text-sm leading-6 text-thrive-dark-500 mb-8">Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
          <Link href='/register'><Button name='Create An Account' className='mt-8 py-2 px-6 rounded-lg' /></Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
