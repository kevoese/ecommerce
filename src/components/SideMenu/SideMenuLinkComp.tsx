import React from 'react';
import CategoryListIcon from '../icons/CategoryListIcon';
import PageIcon from '../icons/PageIcon';
import UserIcon from '../icons/UserIcon';

type Props = {
  selectedLink: string
  setSelectedLink: any;
};

type SideMenuProps = {
  isActive: boolean;
  onClick: () => void;
  name: string;
  Icon: any;
  value: string;
}

const SideMenuComp = ({
  isActive, Icon, name, onClick,
}: SideMenuProps) => (
  <div onClick={onClick} className={`flex cursor-pointer border-b-2 pb-1 ${isActive ? ' border-thrive-blue' : 'border-transparent'}`}>
    <div className={'icon'}>
      <Icon color={isActive ? '#1355FF' : ''} />
    </div>
    <span className={`font-medium leading-6 pl-2 text-thrive-blue ${isActive ? '' : 'hidden'}`}>{name}</span>
  </div>
);

const SideMenuLinkComp = ({ setSelectedLink, selectedLink }: Props) => (
  <div className='flex gap-6 justify-between items-center py-3 px-4'>
    <SideMenuComp
      name='Category'
      value="category"
      Icon={CategoryListIcon}
      isActive={selectedLink === 'category'}
      onClick={() => setSelectedLink('category')}
    />
    <div className="flex gap-6">
      <SideMenuComp
        name='Page'
        value="page"
        Icon={PageIcon}
        isActive={selectedLink === 'page'}
        onClick={() => setSelectedLink('page')}
      />
      <SideMenuComp
        name='Account'
        value="account"
        Icon={UserIcon}
        isActive={selectedLink === 'account'}
        onClick={() => setSelectedLink('account')}
      />
    </div>
  </div>
);

export default SideMenuLinkComp;
