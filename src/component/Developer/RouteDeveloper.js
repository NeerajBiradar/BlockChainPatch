import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DeveloperTable from './Developer';
import DeveloperNavabar from './DeveloperNavbar'
import IntroductionPage from './DeveloperHome';
import Upload from './DeveloperUpload';
import LoginPage from '../Prelogin/LoginPage';

function DeveloperRoute(props) {
    const handleLogin = (s) =>{
        props.LoginUpdate(s);
    }
    return (
        <div className="App">
            <Router>
                <DeveloperNavabar LoginState={handleLogin}/>
                <Routes>
                    <Route path='/Developer' element={<IntroductionPage/>}/>
                    <Route path='/UploadPatch' element={<DeveloperTable/>} />
                    <Route path='/Upload' element={<Upload/>}/>
                    <Route path='/Login' element={<LoginPage/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default DeveloperRoute;
