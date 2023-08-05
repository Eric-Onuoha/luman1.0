import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

import LandingPage from './pages/landingPage/landingPage.component';
import CareersPage from './pages/careersPage/careersPage.component';
import ApplicationPage from './pages/applicationPage/applicationPage.component';
import Footer from './components/footer/footer.component';
import Navigation from './components/navigation/navigation.component';
import OperationsPage from './pages/operationsPage/operationsPage.component';


import Authenticate from './authenticator/authenticate.component';
import SignUp from './authenticator/signUp/signUp.component';
import { useSelector } from 'react-redux';
import { getMultipleDocuments } from './firestore/getFromFirestore.utils';

import { updateCurrentUser } from './reduxStore/reducers/user.reducer';
import { updateProductList } from './reduxStore/reducers/productList.reducer';
import { updateStaffList } from './reduxStore/reducers/staff.reducer';
import { updateSalesRecord } from './reduxStore/reducers/sales.reducer';
import { updateSalesRepRecord } from './reduxStore/reducers/salesRep.reducer';
import { updateStock } from './reduxStore/reducers/stock.reducer';
import { updateExpense } from './reduxStore/reducers/expense.reducer';
import { updateUtilities } from './reduxStore/reducers/utilities.reducer';
import { updateDebtRecord } from './reduxStore/reducers/debt.reducer';
import { updateAccount } from './reduxStore/reducers/account.reducer';

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.currentUser) || "";

  useEffect(() => {
    getMultipleDocuments("Products").then((ProductDB) => dispatch(updateProductList(ProductDB)));
  }, []);

  useEffect(() => {
    getMultipleDocuments("Staff").then((StaffDB) => dispatch(updateStaffList(StaffDB)));
  }, []);

  useEffect(() => {
    getMultipleDocuments("DTCSales").then((SalesDB) => dispatch(updateSalesRecord(SalesDB)));
  }, []);

  useEffect(() => {
    getMultipleDocuments("SRSales").then((SRSalesDB) => dispatch(updateSalesRepRecord(SRSalesDB)));
  }, []);

  useEffect(() => {
    getMultipleDocuments("Stock").then((StockDB) => dispatch(updateStock(StockDB)));
  }, []);

  useEffect(() => {
    getMultipleDocuments("Expenses").then((ExpenseDB) => dispatch(updateExpense(ExpenseDB)));
  }, []);

  useEffect(() => {
    getMultipleDocuments("Utilities").then((UtilitiesDB) => dispatch(updateUtilities(UtilitiesDB)));
  }, []);

  useEffect(() => {
    getMultipleDocuments("Debt").then((DebtDB) => dispatch(updateDebtRecord(DebtDB)));
  });

  useEffect(() => {
    getMultipleDocuments("Account").then((AccountDB) => dispatch(updateAccount(AccountDB)));
  });

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={[<Navigation />, <Footer/>]}>
        <Route index element={<LandingPage />}/>
        <Route path='careers' element={<CareersPage/>}></Route>
        <Route path='careers/:position' element={<ApplicationPage/>}></Route>
        <Route path='announcements' element={<LandingPage/>}></Route>
        <Route path='operations' element={<Authenticate component={OperationsPage} user={currentUser}/>}></Route>
        <Route path='pricing' element={<LandingPage/>}></Route>
        <Route path='signup' element={<Authenticate component={SignUp} user={currentUser}/>}></Route>
      </Route>
      <Route path='*' element={[<Navigation></Navigation>, <LandingPage></LandingPage>, <Footer></Footer>]}></Route>
    </Routes>
    </div>
  );
}

export default App;
