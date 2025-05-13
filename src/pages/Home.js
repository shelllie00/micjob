import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-left">
          <img src={require('./task.png')} alt="任務插圖" className="hero-img" />
        </div>
        <div className="hero-right align-left">
          <h1 className="hero-title">
            <span className="bold">不想自己跑腿？</span><br />
            在 <span className="highlight">MicJob</span> 找到幫手
          </h1>
          <p className="hero-desc">
            快速找到附近同學幫你解任務：倒垃圾、遛狗、取貨...等等<br />立即註冊發布任務！
          </p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate('/post-task')}>立即發任務</button>
            <button className="secondary-btn" onClick={() => navigate('/login')}>註冊帳號</button>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="feature-section">
        <div className="feature-left align-right">
          <h2 className="feature-title">
            <span className="bold">每一個任務<br />都是你的小收入</span>
          </h2>
          <p className="feature-desc">
            有空就接任務，想賺就出門！<br />
            MicJob 幫你找到鄰近的小任務，從領貨到打掃整理，什麼都能賺！
          </p>
          <div className="feature-buttons">
            <button className="primary-btn" onClick={() => navigate('/find-task')}>逛逛任務牆</button>
            <button className="secondary-btn" onClick={() => navigate('/login')}>註冊帳號</button>
          </div>
        </div>
        <div className="feature-right">
          <img src={require('./income.png')} alt="收入插圖" className="feature-img" />
        </div>
      </section>
    </div>
  );
}

export default Home; 