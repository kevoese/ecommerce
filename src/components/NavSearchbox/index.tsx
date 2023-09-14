import NavSearchboxMobile from './NavSearchboxMobile';
import NavSearchboxWeb from './NavSearchboxWeb';

type ISearchProps = {
  onClick: () => void;
  isSearchOpen: boolean;
};

const NavSearchbox = ({ onClick, isSearchOpen }: ISearchProps) => (
  <div className="flex-grow flex w-full">
    <div className="mx-auto w-full max-w-[700px] hidden sm:block">
      <NavSearchboxWeb />
    </div>
    <div className="mx-auto w-full block sm:hidden">
      <NavSearchboxMobile
        onClick={onClick}
        isSearchOpen={isSearchOpen}
      />
    </div>
  </div>
);

export default NavSearchbox;
