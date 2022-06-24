import './App.css';
import Loaders from './components/Loaders';
import BorderHoverButton from './components/BorderHoverButton';
import BottomBarNavigation from './components/BottomBarNavigation';
import HamburgerMenu from './components/HamburgerMenu';
import CardHover from './components/CardHover';

function App() {
  return (
    <div className="App">
      <Loaders />
      <BorderHoverButton />
      <BottomBarNavigation />
      <HamburgerMenu />
      <CardHover />
    </div>
  );
}

export default App;
