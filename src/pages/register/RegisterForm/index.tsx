'use client';

import Button from '@/components/Button';
import CheckboxText from '@/components/CheckboxText';
import ContentBox from '@/components/ContentBox';
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

const RegisterForm = () => {
  const {
    formValues, handleChange, errors, handleBlur,
  }: any = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    newsletter: false,
    termsAndConditions: false,
  }, validationSchema);
  return (
    <div className='flex flex-grow flex-col justify-center items-start mx-auto w-full max-w-[396px] xsm:max-w-[420px] xmd:max-w-4xl py-6 px-3 xsm:px-6'>
      <h4 className='text-2xl font-medium text-thrive-dark leading-7'>Create An Account</h4>
      <div className="flex flex-col items-center xmd:items-start mt-8 gap-4 w-full xmd:flex-row xmd:justify-between">
        <div className="pinfo w-full max-w-[368px]">
          <h5 className="font-medium text-thrive-dark mb-4">Personal information</h5>
          <div className=" w-full">
            <Input
              name='firstName'
              type='text'
              value={formValues?.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Type your First name'
              label='First Name'
              required
              error={errors?.firstName}
              parentClassName='mb-4'
            />
            <Input
              name='lastName'
              type='text'
              value={formValues?.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Type your last name'
              label='Last Name'
              required
              error={errors?.lastName}
              parentClassName='mb-4'
            />
            <CheckboxText
              text='Sign Up for newsletter'
              className='mb-4'
              id="newsletter"
              name="newsletter"
              onChange={handleChange}
              value={formValues?.newsletter}
            />
          </div>

        </div>
        <div className="sinfo w-full max-w-[368px]">
          <h5 className="font-medium text-black mb-4">Sign In Information</h5>
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
              parentClassName='mb-4'
            />
            <CheckboxText
              text='By using this form you agree with the storage
              and handling of your data by this website.'
              className=''
              id="termsAndCondition"
              name="termsAndCondition"
              onChange={handleChange}
              value={formValues?.termsAndCondition}
            />
            <Button name='Create An Account' className='mt-8 py-2 px-6 rounded-lg' />
            <span className='leading-6 text-grey-ash mt-10 block'>Already have an account? <Link href='/login'><strong className='font-medium text-thrive-blue'>Sign in</strong></Link></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
