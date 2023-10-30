import { Route, Routes } from 'react-router-dom';
import './App.css';
import PFHome from './Pages/PFHome';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';
import Auth from './Components/Auth';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<PFHome/>}></Route>
      <Route path='/login' element={<Auth/>}></Route>
      <Route path='/register' element={<Auth register/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>

    </Routes>
    <Footer/>
    </>
  );
}

export default App;
