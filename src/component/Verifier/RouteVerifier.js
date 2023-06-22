import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import VerifierNavbar from './VerifierNavbar';
import Verify from './Verifier';
import IntroductionPage from './VerifierHome';
import LoginPage from '../Prelogin/LoginPage';

function VerifierRoute(props) {
    const handleLogin = (s) =>{
        props.LoginUpdate(s);
    }
    return (
        <div className="App">
            <Router>
                <VerifierNavbar LoginState={handleLogin}/>
                <Routes>
                    <Route path='/Verifier' element={<IntroductionPage/>}/>
                    <Route path='/VerifyPatch' element={<Verify/>} />
                    <Route path='/Login' element={<LoginPage/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default VerifierRoute;
