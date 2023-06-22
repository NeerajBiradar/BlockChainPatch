import React, { useState, useEffect } from 'react';
//import { Link, useNavigate } from 'react-router-dom';

import PreloginRoute from './component/Prelogin/RoutePrelogin';
import AdminRoute from './component/Admin/RouteAdmin';
import UserRoute from './component/User/RouteUser';
import LabelRoute from './component/Labeller/RouteLabel';
import DeveloperRoute from './component/Developer/RouteDeveloper';
import VerifyRoute from './component/Verifier/RouteVerifier';

function App() {
  const [type, setType] = useState('');
  const [login,isLogin] = useState(false);

  const handleType = (t) => {
    setType(t);
    isLogin(true);
  };

  const handleLogin = (s) => {
    isLogin(false);
  }
  console.log(login,"Login");



  return (
    <div className="App">
      {/* {type === 'user' && login ? (
        <UserRoute LoginUpdate={handleLogin} />
      ) : type === 'admin' && login ? (
        <AdminRoute LoginUpdate={handleLogin} />
      ) : type === 'labeller' && login ? (
        <LabelRoute LoginUpdate={handleLogin} />
      ) : type === 'verifier' && login ? (
        <VerifyRoute LoginUpdate={handleLogin} />
      ) : type === 'developer' && login ? (
        <DeveloperRoute LoginUpdate={handleLogin} />
      ) : (
        <PreloginRoute typeofUser={handleType} />
      )} */}
      <AdminRoute/>
    </div>
  );
}

export default App;

