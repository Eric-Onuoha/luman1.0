import { Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './pages/landingPage/landingPage.component';
import Careers from './components/careers/careers.component';
import ApplicationPage from './pages/applicationPage/applicationPage.component';
import Footer from './components/footer/footer.component';
import Navigation from './components/navigation/navigation.component';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={[<Navigation />, <Footer/>]}>
        <Route index element={<LandingPage />}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
