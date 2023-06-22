import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PreLoginNavbar from './PreloginNav';
import Signup from './Signup';
import PageNotFound from './Page404';
import PreloginHome from './PreloginHome';
import Contactus from './Contactus';
import AboutUs from './Aboutus';
import LoginPage from './LoginPage';
import { useState } from 'react';

function PreloginRoute(props) {
    const handletype=(s)=>{
        props.typeofUser(s);
    }
    return (
        <div className="App">
            <Router>
                <PreLoginNavbar />
                <Routes>
                    <Route path='/' element={<PreloginHome/>}/>
                    <Route path='/Signup' element={<Signup />} />
                    <Route path='/ContactUs'element={<Contactus/>} />
                    <Route path='/AboutUs'element={<AboutUs/>} />
                    <Route path='/Login' element={<LoginPage typeUser={handletype}/>} />
                </Routes>
            </Router>

        </div>
    );
}

export default PreloginRoute;
