import './App.css';
import Ratings from './components/Ratings';
import Analysis from './components/Analysis';
import Reviews from './components/Reviews';
import Visitors from './components/Visitors';
import SideBar from './components/SideBar'; 



function App() {
  return (
    <div className="App">
      <SideBar/>
      <div className="secA">
      <Ratings/>
      <Analysis/>
      <Reviews/>
      <Visitors/>
      </div>
    </div>
  );
}

export default App;
