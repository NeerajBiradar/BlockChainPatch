import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import PatchRequest from './PatchRequest';
import ApprovedPatch from './ApprovedPatch'; 
import RejectedPatch from './RejectedPatch';
import DeployedPatch from './DeployedPatch';
import LoginPage from '../Prelogin/LoginPage';
import IntroductionPage from './AdminHome';

function AdminRoute(props) {
    const handleLogin = (s) =>{
        props.LoginUpdate(s);
    }
    return (
        <div className="App">
            <Router>
                <AdminNavbar LoginState={handleLogin} />
                <Routes>
                    <Route path='/Admin' element={<IntroductionPage/>}/>
                    <Route path='/PatchRequest' element={<PatchRequest/>}/>
                    <Route path='/ApprovedPatches' element={<ApprovedPatch/>} />
                    <Route path='/RejectedPatches' element={<RejectedPatch/>} />
                    <Route path='/DeployedPatches' element={<DeployedPatch/>} />
                    <Route path='/Login' element={<LoginPage/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default AdminRoute;
