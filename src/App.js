import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Hoc/Dashboard';
import Register from './Hoc/Register';
import Setting from './Hoc/Setting';
import About from './Hoc/About';
import Contact from './Hoc/Contact';
import Login from './Hoc/Login';
import { useState } from 'react';
import SignUp from './Hoc/SignUp';

function App() {

  const [isLogin, setisLogin] = useState(JSON.parse(localStorage.getItem('isLogin')));

  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            isLogin ?
              <>
                <Route path='/' element={<Navigate to='/dashbord' />} />
                <Route path='/dashbord' element={<Dashboard setisLogin={setisLogin} />} />
                <Route path='/about' element={<About />} />
                <Route path='/register' element={<Register />} />
                <Route path='/setting' element={<Setting />} />
                <Route path='/contact' element={<Contact />} />
              </>
              :
              <>
                <Route path='/login' element={<Login setisLogin={setisLogin} />} />
                <Route path='/' element={<Login />} />
              </>
          }
          <Route path='/signup' element={<SignUp />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
