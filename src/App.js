import { Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './pages/landingPage/landingPage.component';
import CareersPage from './pages/careersPage/careersPage.component';
import ApplicationPage from './pages/applicationPage/applicationPage.component';
import Footer from './components/footer/footer.component';
import Navigation from './components/navigation/navigation.component';
import OperationsPage from './pages/operationsPage/operationsPage.component';

import Authenticate from './authenticator/authenticate.component';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={[<Navigation />, <Footer/>]}>
        <Route index element={<LandingPage />}/>
        <Route path='careers' element={<CareersPage/>}></Route>
        <Route path='careers/:position' element={<ApplicationPage/>}></Route>
        <Route path='announcements' element={<LandingPage/>}></Route>
        <Route path='operations' element={<Authenticate component={OperationsPage} user={""}/>}></Route>
        <Route path='pricing' element={<LandingPage/>}></Route>
      </Route>
      <Route path='*' element={[<Navigation></Navigation>, <LandingPage></LandingPage>, <Footer></Footer>]}></Route>
    </Routes>
    </div>
  );
}

export default App;
