import React from 'react';

interface Props {
  isOpen: boolean;
  handleClick: () => void;
}

const Show = () => (
  <svg width="16" height="14" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.1609 8.0536C13.1609 9.7996 11.7449 11.2146 9.99889 11.2146C8.25289 11.2146 6.83789 9.7996 6.83789 8.0536C6.83789 6.3066 8.25289 4.8916 9.99889 4.8916C11.7449 4.8916 13.1609 6.3066 13.1609 8.0536Z" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M9.998 15.355C13.806 15.355 17.289 12.617 19.25 8.05298C17.289 3.48898 13.806 0.750977 9.998 0.750977H10.002C6.194 0.750977 2.711 3.48898 0.75 8.05298C2.711 12.617 6.194 15.355 10.002 15.355H9.998Z" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

const Hide = () => (
  <svg width="16" height="14" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.76094 11.3677C7.18594 10.7937 6.83594 10.0137 6.83594 9.13866C6.83594 7.38566 8.24794 5.97266 9.99994 5.97266C10.8669 5.97266 11.6649 6.32366 12.2299 6.89766" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.1054 9.69922C12.8734 10.9892 11.8574 12.0072 10.5684 12.2412" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.655 14.473C3.068 13.227 1.724 11.407 0.75 9.13796C1.734 6.85896 3.087 5.02896 4.684 3.77296C6.271 2.51696 8.102 1.83496 10 1.83496C11.909 1.83496 13.739 2.52696 15.336 3.79196" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.4487 5.99121C18.1367 6.90521 18.7417 7.96021 19.2507 9.13721C17.2837 13.6942 13.8077 16.4392 10.0008 16.4392C9.13775 16.4392 8.28675 16.2992 7.46875 16.0262" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.8873 1.25L2.11328 17.024" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

);

const EyeIcon = (props: Props) => (
  <div className='cursor-pointer' onClick={props.handleClick}>
    {props.isOpen ? <Hide /> : <Show />}
  </div>

);

export default EyeIcon;
