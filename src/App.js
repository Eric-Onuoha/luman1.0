import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/navigation/navigation.component';
import LandingPage from './pages/landingPage/landingPage.component';
import Careers from './components/careers/careers.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/careers' element={<Careers/>} />
      </Routes>
    </div>
  );
}

export default App;
