import React from 'react';
import Link from 'next/link';
import Facebook from '@/components/icons/Facebook';
import LinkedIn from '@/components/icons/LinkedIn';
import Twitter from '@/components/icons/Twitter';
import Gmail from '@/components/icons/Gmail';
import ContentBox from '../ContentBox';

const socialLinks = [
  {
    Icon: Facebook,
    href: '#',
  },
  {
    Icon: LinkedIn,
    href: '#',
  },
  {
    Icon: Twitter,
    href: '#',
  },
  {
    Icon: Gmail,
    href: '#',
  },
];

const contactLinks = [
  {
    name: 'Contact',
    href: '#',
  },
  {
    name: 'Frequently asked questions',
    href: '#',
  },
];

const ContactSection = () => (
  <ContentBox parentClassName='bg-black' className='hidden sm:flex justify-between items-center py-4'>
    <div className='social-links flex gap-5'>
      {socialLinks.map(({ Icon, href }, index) => (
        <Link href={href} key={index} >
          <Icon />
        </Link>
      ))}
    </div>
    <div className="contact-info flex gap-2">
      {contactLinks.map(({ name, href }, index) => (
        <Link href={href} key={index}>
          <span className='link-text font-worksans text-white'>{name}</span>
        </Link>
      ))}
    </div>
  </ContentBox>

);

export default ContactSection;
