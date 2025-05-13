import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('密碼不匹配');
      return;
    }

    if (isLogin) {
      // 在實際應用中，這裡應該發送 API 請求到後端
      login({
        email: formData.email,
        username: formData.email.split('@')[0] // 臨時使用 email 前綴作為用戶名
      });
      navigate('/');
    } else {
      register({
        username: formData.username,
        email: formData.email
      });
      navigate('/');
    }
  };

  return (
    <div className="login-page">
      <div className="auth-container">
        <div className="auth-tabs">
          <button 
            className={`tab-btn ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            登入
          </button>
          <button 
            className={`tab-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            註冊
          </button>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>用戶名稱</label>
              <input 
                type="text" 
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="請輸入用戶名稱" 
                required
              />
            </div>
          )}
          <div className="form-group">
            <label>電子郵件</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="請輸入電子郵件" 
              required
            />
          </div>
          <div className="form-group">
            <label>密碼</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="請輸入密碼" 
              required
            />
          </div>
          {!isLogin && (
            <div className="form-group">
              <label>確認密碼</label>
              <input 
                type="password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="請再次輸入密碼" 
                required
              />
            </div>
          )}
          <button type="submit" className="submit-btn">
            {isLogin ? '登入' : '註冊'}
          </button>
        </form>

        <div className="social-login">
          <p>或使用以下方式{isLogin ? '登入' : '註冊'}</p>
          <div className="social-buttons">
            <button className="social-btn google">Google</button>
            <button className="social-btn facebook">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login; 