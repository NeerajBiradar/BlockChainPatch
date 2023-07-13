import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DeveloperTable from './Developer';
import DeveloperNavabar from './DeveloperNavbar'
import IntroductionPage from './DeveloperHome';
import Upload from './DeveloperUpload';
import LoginPage from '../Prelogin/LoginPage';
import TransactionDetails from './Transcation';

function DeveloperRoute(props) {
    const handleLogin = (s) =>{
        props.LoginUpdate(s);
    }
    return (
        <div className="App">
            <Router>
                <DeveloperNavabar LoginState={handleLogin}/>
                <Routes>
                    <Route path='/developer' element={<IntroductionPage/>}/>
                    <Route path='/uploadpatch' element={<DeveloperTable/>} />
                    <Route path='/upload' element={<Upload/>}/>
                    <Route path='/login' element={<LoginPage/>} />
                    <Route path='/transcations' element={<TransactionDetails/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default DeveloperRoute;
