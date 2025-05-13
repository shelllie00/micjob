import React from 'react';
import './Membership.css';

function Membership() {
  return (
    <div className="membership">
      <h1>升級會員</h1>
      <div className="membership-plans center">
        <div className="plan-card">
          <h2>基本會員</h2>
          <div className="price">免費</div>
          <ul className="features-list">
            <li>發布基本任務</li>
            <li>查看任務列表</li>
            <li>酬勞抽成10%</li>
          </ul>
          <button className="plan-btn">當前方案</button>
        </div>
        <div className="plan-card premium">
          <h2>進階會員</h2>
          <div className="price">$100/月</div>
          <ul className="features-list">
            <li>符合任務推播通知</li>
            <li>優先任務曝光</li>
            <li>專屬客服支援</li>
            <li>進階搜尋功能</li>
            <li>酬勞不抽成</li>
          </ul>
          <button className="plan-btn">升級方案</button>
        </div>
      </div>
    </div>
  );
}

export default Membership; 