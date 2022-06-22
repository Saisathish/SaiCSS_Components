import './App.css';
import Loaders from './components/Loaders';
import BorderHoverButton from './components/BorderHoverButton';
import BottomBarNavigation from './components/BottomBarNavigation';

function App() {
  return (
    <div className="App">
      <Loaders />
      <BorderHoverButton />
      <BottomBarNavigation />
    </div>
  );
}

export default App;
