import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import FeatureReport from './Feature';
import BugReport from './Bug';
import User from './UserHome';
import Download from './Download';
import LoginPage from '../Prelogin/LoginPage';
import TransactionDetails from './Transcation';


function UserRoute(props) {
    const handleLogin = (s) =>{
        props.LoginUpdate(s);
    }
    return (
        <div className="App">
            <Router>
                <UserNavbar LoginState={handleLogin}/>
                <Routes>
                    <Route path='/user' element={<User/>} />
                    <Route path='/featurereport' element={<FeatureReport/>} />
                    <Route path='/bugreport' element={<BugReport/>} />
                    <Route path='/downloadpatch' element={<Download/>} />
                    <Route path='/login' element={<LoginPage/>} />
                    <Route path='/transcations' element={<TransactionDetails/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default UserRoute;
