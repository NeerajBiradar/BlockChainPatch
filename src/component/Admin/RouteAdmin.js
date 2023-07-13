import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import PatchRequest from './PatchRequest';
import ApprovedPatch from './ApprovedPatch'; 
import RejectedPatch from './RejectedPatch';
import DeployedPatch from './DeployedPatch';
import LoginPage from '../Prelogin/LoginPage';
import IntroductionPage from './AdminHome';
import TransactionDetails from './Transcation';

function AdminRoute(props) {
    const handleLogin = (s) =>{
        props.LoginUpdate(s);
    }
    return (
        <div className="App">
            <Router>
                <AdminNavbar LoginState={handleLogin} />
                <Routes>
                    <Route path='/admin' element={<IntroductionPage/>}/>
                    <Route path='/patchrequest' element={<PatchRequest/>}/>
                    <Route path='/approvedpatches' element={<ApprovedPatch/>} />
                    <Route path='/rejectedpatches' element={<RejectedPatch/>} />
                    <Route path='/deployedpatches' element={<DeployedPatch/>} />
                    <Route path='/transcations' element={<TransactionDetails/>}/>
                    <Route path='/login' element={<LoginPage/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default AdminRoute;
