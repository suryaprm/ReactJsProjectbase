import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './page/home/Home';
import NotFound from './components/NotFound';
import Users from './page/masterdata/users/Users';
import Login from './page/auth/Login';
import Register from './page/auth/Register';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/masterdata/users" element={<Users />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
