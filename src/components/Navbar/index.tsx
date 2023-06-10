import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from "../../assets/Logo.png";
import Link from './Link';
import { SelectedPage } from "../../shared/types"

type NavbarProps = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: NavbarProps) => {

  const flexBetween = "flex items-center justify-between"

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 w-full z-30 py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-small`}>
                <Link 
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link 
                  page="Benefitts"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} 
                />
                <Link 
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} 
                />
                <Link 
                  page="Contacts"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} 
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  ) 
}

export default Navbar