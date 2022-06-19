import './App.css';
import {Routes,Route,} from "react-router-dom";
import Home from './components/homePage/Home';
import Setting from './components/settingsPage/Setting'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/settings" element={<Setting />}/>
    </Routes>
  );
}

export default App;
