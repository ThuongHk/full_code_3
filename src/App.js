import './App.css';
import { Outlet} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getStaffs } from './components/staff/staffSlice';


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getStaffs())
  }, [dispatch])

  return (
    <div className="App">
    <Navbar/>
   <Outlet/>
   <Footer/>
    </div>
  );
}

export default App;
