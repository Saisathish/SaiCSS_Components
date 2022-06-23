import './App.css';
import Loaders from './components/Loaders';
import BorderHoverButton from './components/BorderHoverButton';
import BottomBarNavigation from './components/BottomBarNavigation';
import HamburgerMenu from './components/HamburgerMenu';

function App() {
  return (
    <div className="App">
      <Loaders />
      <BorderHoverButton />
      <BottomBarNavigation />
      <HamburgerMenu />
    </div>
  );
}

export default App;
