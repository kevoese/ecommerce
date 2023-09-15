import React from 'react';
import HelpCenterIcon from '../icons/HelpCenterIcon';
import EmailSupportIcon from '../icons/EmailSupportIcon';
import ContactPhoneIcon from '../icons/ContactPhoneIcon';
import ContentBox from '../ContentBox';

type IconAndDetailsProps = {
  Icon: any;
  title: string;
  info: string;
};

const links = [
  {
    title: 'Help Center',
    Icon: HelpCenterIcon,
    info: 'help.buyhere.com',
  },
  {
    title: 'Email Support',
    Icon: EmailSupportIcon,
    info: 'online@buyhere.com',
  },
  {
    title: 'Phone',
    Icon: ContactPhoneIcon,
    info: '+234 000 000 0000',
  },
];

const IconAndDetails = ({ Icon, title, info }: IconAndDetailsProps) => (
  <div className='flex min-w-[220px] sm:min-w-fit'>
    <div className="mr-6">
      <Icon />
    </div>
    <div className="flex flex-col">
      <span className='text-grey-ash text-2sm leading-6 mb-2'>
        {title}
      </span>
      <strong className='text-thrive-dark text-2sm leading-4 font-medium'>
        {info}
      </strong>
    </div>
  </div>
);

const FooterContact = () => (
  <ContentBox parentClassName='px-0 sm:px-2' className='flex flex-col sm:flex-row justify-between items-center gap-11 sm:gap-4 mb-0 sm:mb-12 w-full !max-w-3xl border-t border-grey-lightest-200 sm:border-0 py-5 sm:py-0'>
    {links.map(({ Icon, title, info }, index) => (
      <IconAndDetails Icon={Icon} title={title} info={info} key={index} />
    ))}
  </ContentBox>
);

export default FooterContact;
