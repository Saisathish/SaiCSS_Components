import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './MenuDropdownComplex.css';
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";

function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 35)
  },[])

  function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height + 35);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown" style={{ height: menuHeight}} ref={dropdownRef}>

      <CSSTransition 
        in={activeMenu === 'main'} 
        unmountOnExit 
        timeout={500} 
        classNames="menu-primary"
        onEnter={calcHeight}
        >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
            >
              Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🐼"
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
              Animals
            </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu === 'settings'} 
        unmountOnExit 
        timeout={500} 
        classNames="menu-secondary"
        onEnter={calcHeight}
        >
        <div className="menu">
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" >
            <h2>Settings</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Javascript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awsome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu === 'animals'} 
        unmountOnExit 
        timeout={500} 
        classNames="menu-secondary"
        onEnter={calcHeight}
        >
        <div className="menu">
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" >
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🐰">Rabbit</DropdownItem>
          <DropdownItem leftIcon="🐳">Whale</DropdownItem>
          <DropdownItem leftIcon="🦁">Lion</DropdownItem>
          <DropdownItem leftIcon="🐶">Puppy!</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

export default App;