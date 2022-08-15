import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Staff from './components/staff/Staff';
import Department from './components/department/Department';
import Salary from './components/salary/Salary';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailStaff from './components/staff/DetailStaff';
import NotFound from './components/notfound/NotFound';
import { Provider } from 'react-redux';
import store from './components/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>      
      <Route path='/' element={<App/>}>
        <Route path='staff' element={<Staff/>}/>
        <Route path='staff/:id' element={<DetailStaff/>}/>
        <Route path='department' element={<Department/>}/>
        <Route path='salary' element={<Salary/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>    
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
