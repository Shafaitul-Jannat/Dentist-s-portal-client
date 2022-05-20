
import './App.css';
import Navbar from './Comp/Shared/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Comp/Home/Home';
import About from './Comp/About/About';
import Login from './Comp/Login/Login';
import Footer from './Comp/Shared/Footer/Footer';
import Appointment from './Comp/Appointment/Appointment';


function App() {
  return (

    <div className='max-w-7xl mx-auto px-12' >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/appointment' element={<Appointment />}> </Route >
        <Route path='about' element={<About />}> </Route >

        <Route path='/' element={<Home />}> </Route>
        {/* <Route path='/appointment' element={<Appointment />}> </Route> */}
        <Route path='/about' element={<About />}> </Route>
        <Route path='/login' element={<Login />}> </Route >

      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
