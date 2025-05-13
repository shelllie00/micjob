import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PostTask from './pages/PostTask';
import FindTask from './pages/FindTask';
import MyTasks from './pages/MyTasks';
import Membership from './pages/Membership';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">MicJob</Link>
      </div>
      <div className="nav-links">
        <Link to="/post-task">發任務</Link>
        <Link to="/find-task">找任務</Link>
        <Link to="/my-tasks">我的任務</Link>
        <Link to="/membership">升級會員</Link>
        {user ? (
          <button onClick={logout} className="login-btn">登出</button>
        ) : (
          <Link to="/login" className="login-btn">登入/註冊</Link>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post-task" element={<PostTask />} />
              <Route path="/find-task" element={<FindTask />} />
              <Route path="/my-tasks" element={<MyTasks />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
