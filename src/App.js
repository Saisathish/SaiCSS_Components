import './App.css';
import Loaders from './components/Loaders';
import BorderHoverButton from './components/BorderHoverButton';
import BottomBarNavigation from './components/BottomBarNavigation';
import HamburgerMenu from './components/HamburgerMenu';
import CardHover from './components/CardHover';
import MenuDropdownComplex from './components/MenuDropdownComplex';

function App() {
  return (
    <div className="App">
      <Loaders />
      <BorderHoverButton />
      <BottomBarNavigation />
      <HamburgerMenu />
      <CardHover />
      <MenuDropdownComplex />
    </div>
  );
}

export default App;
