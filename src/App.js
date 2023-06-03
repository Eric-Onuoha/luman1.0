import { Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './pages/landingPage/landingPage.component';
import Careers from './components/careers/careers.component';
import ApplicationPage from './pages/applicationPage/applicationPage.component';
import ContactDetailsPreview from './components/contactDetails/contatcDetailsPreview/contactDetailsPreview.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={[<LandingPage/>, <ContactDetailsPreview/>]}/>
        <Route path='/careers' element={<Careers/>} />
        <Route path='/careers/:position' element={<ApplicationPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
