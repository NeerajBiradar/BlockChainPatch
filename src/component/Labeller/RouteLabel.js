import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BugLabel from './BugLabel';
import FeatureLabel from './FeatureLabel';
import LabelNavbar from './LabelNavbar';
import LoginPage from '../Prelogin/LoginPage';
import IntroductionPage from './LabelHome';
import TransactionDetails from './Transcation';

function LabelRoute(props) {
    const handleLogin = (s) =>{
        props.LoginUpdate(s);
    }
    return (
        <div className="App">
            <Router>
                <LabelNavbar LoginState={handleLogin} />
                <Routes>
                    <Route path='/labeller' element={<IntroductionPage />} />
                    <Route path='/buglabel' element={<BugLabel />} />
                    <Route path='/featurelabel' element={<FeatureLabel />} />
                    <Route path='/transcations' element={<TransactionDetails/>} />
                    <Route path='/login' element={<LoginPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default LabelRoute;
