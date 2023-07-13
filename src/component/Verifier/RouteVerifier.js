import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import VerifierNavbar from './VerifierNavbar';
import Verify from './Verifier';
import IntroductionPage from './VerifierHome';
import LoginPage from '../Prelogin/LoginPage';
import TransactionDetails from './Transcation';

function VerifierRoute(props) {
    const handleLogin = (s) =>{
        props.LoginUpdate(s);
    }
    return (
        <div className="App">
            <Router>
                <VerifierNavbar LoginState={handleLogin}/>
                <Routes>
                    <Route path='/verifier' element={<IntroductionPage/>}/>
                    <Route path='/verifypatch' element={<Verify/>} />
                    <Route path='/login' element={<LoginPage/>} />
                    <Route path='/transcations' element={<TransactionDetails/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default VerifierRoute;
