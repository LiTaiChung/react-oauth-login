import { MainNav } from './components/MainNav';
import { Search } from './components/Search';
import { UserNav } from './components/UserNav';

const Header = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
