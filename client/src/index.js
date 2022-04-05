import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/navigation';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login'
import Signup from './pages/signup'
import Deposit from './pages/deposit'
import Withdraw from './pages/withdraw'
import Balance from './pages/balance'
import Transactions from './pages/transactions'


ReactDOM.render(
  <React.StrictMode>
    <Router>   
      <div className= "background">
          <h1 className= "text-center"> West Valley Bank </h1>
          <Navigation />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/balance" element={<Balance/>} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </div> 
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
