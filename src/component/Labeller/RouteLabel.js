import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BugLabel from './BugLabel';
import FeatureLabel from './FeatureLabel';
import LabelNavbar from './LabelNavbar';
import LoginPage from '../Prelogin/LoginPage';
import IntroductionPage from './LabelHome';

function LabelRoute(props) {
    const handleLogin = (s) =>{
        props.LoginUpdate(s);
    }
    return (
        <div className="App">
            <Router>
                <LabelNavbar LoginState={handleLogin} />
                <Routes>
                    <Route path='/Label' element={<IntroductionPage />} />
                    <Route path='/BugLabel' element={<BugLabel />} />
                    <Route path='/FeatureLabel' element={<FeatureLabel />} />
                    <Route path='/Login' element={<LoginPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default LabelRoute;
