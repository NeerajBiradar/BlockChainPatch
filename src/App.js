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
  // const [login,isLogin] = useState(false);

  const handleType = (t) => {
    setType(t);
    
  };
  
  const handleLogin = (s) => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
    
  }
  useEffect(()=>{
    const type=sessionStorage.getItem("Role");
    setType(type);
  },[])



  return (
    <div className="App">
      {type === 'user'  ? (
        <UserRoute LoginUpdate={handleLogin} />
      ) : type === 'admin' ? (
        <AdminRoute LoginUpdate={handleLogin} />
      ) : type === 'labeller' ? (
        <LabelRoute LoginUpdate={handleLogin} />
      ) : type === 'verifier' ? (
        <VerifyRoute LoginUpdate={handleLogin} />
      ) : type === 'developer' ? (
        <DeveloperRoute LoginUpdate={handleLogin} />
      ) : (
        <PreloginRoute typeofUser={handleType} />
      )}
      {/* <LabelRoute/> */}
    </div>
  );
}

export default App;

