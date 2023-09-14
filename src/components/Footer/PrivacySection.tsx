import React from 'react';
import Link from 'next/link';
import DarkInstagram from '../icons/DarkInstagram';
import DarkLinkedIn from '../icons/DarkLinkedIn';
import DarkTwitter from '../icons/DarkTwitter';
import DarkFacebook from '../icons/DarkFacebook';
import ContentBox from '../ContentBox';

const socialLinks = [
  {
    Icon: DarkInstagram,
    href: '#',
  },
  {
    Icon: DarkLinkedIn,
    href: '#',
  },
  {
    Icon: DarkTwitter,
    href: '#',
  },
  {
    Icon: DarkFacebook,
    href: '#',
  },
];

const PrivacySection = () => (
  <ContentBox parentClassName='border-t border-grey-lightest-200' className='flex justify-between items-center h-auto sm-h-14 flex-col sm:flex-row gap-2 py-3'>
    <div className="terms text-grey-ash text-2sm">
      <span>Terms of Use  -  Privacy Policy  -  Terms of Return</span>
    </div>
    <div className="links flex gap-4">
      {socialLinks.map(({ Icon, href }, index) => (
        <Link href={href} key={index} >
          <Icon />
        </Link>
      ))}
    </div>
    <div className="date">
      <span className='text-grey-ash text-2xs'>© 2023 Thrivepay. All rights reserved</span>
    </div>
  </ContentBox>
);

export default PrivacySection;
