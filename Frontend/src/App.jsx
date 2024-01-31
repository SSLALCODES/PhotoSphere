import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';


import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword'
import Home from './components/Home';
import MainLayout from './components/Mainlayout';

import AdminDashboard from './components/adminDashboard';
import CreatePost from './components/createpost';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/reset/:token" element={<ResetPassword />} />
        <Route path="/createPosts" element={<CreatePost />} />



        <Route element={<MainLayout />}>
        <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route exact path="/home" element={<Home />} />
           
        </Route>
      </Routes>
    </Router>
  );
}

export default App;