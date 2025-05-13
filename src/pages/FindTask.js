import React from 'react';
import './FindTask.css';

function FindTask() {
  return (
    <div className="find-task">
      <h1>尋找任務</h1>
      
      <div className="search-section">
        <div className="search-bar">
          <input type="text" placeholder="搜尋任務..." />
          <button className="search-btn">搜尋</button>
        </div>
        
        <div className="filters">
          <select>
            <option value="">任務類型</option>
            <option value="daily-task">日常代辦</option>
            <option value="assistance-service">協助服務</option>
            <option value="digital-support">數位支援</option>
            <option value="other">其他</option>
          </select>
          <select>
            <option value="">酬勞金額</option>
            <option value="0-100">$0 - $100</option>
            <option value="100-500">$100 - $500</option>
            <option value="500-1000">$500 - $1000</option>
            <option value="1000+">$1000+</option>
          </select>
        </div>
      </div>

      <div className="task-list">
        <div className="task-card">
          <h3>找人幫我搬宿舍</h3>
          <p>從女14舍搬到後門，有推車可用，需要幫忙搬運大型家具和箱子。時間約2小時，酬勞可議。</p>
          <div className="task-meta">
            <span>酬勞: $300</span>
            <span>任務日期: 2025/06/30</span>
          </div>
          <button className="apply-btn">申請接案</button>
        </div>

        <div className="task-card">
          <h3>代領包裹</h3>
          <p>需要幫忙從7-11領取包裹，並送到男宿。包裹不大，約A4大小。酬勞可議。</p>
          <div className="task-meta">
            <span>酬勞: $100</span>
            <span>任務日期: 2025/06/28</span>
          </div>
          <button className="apply-btn">申請接案</button>
        </div>

        <div className="task-card">
          <h3>協助填寫問卷</h3>
          <p>需要協助填寫一份關於校園生活的問卷調查，約15分鐘可完成。線上填寫即可。</p>
          <div className="task-meta">
            <span>酬勞: $50</span>
            <span>任務日期: 2025/06/25</span>
          </div>
          <button className="apply-btn">申請接案</button>
        </div>

        <div className="task-card">
          <h3>代買午餐</h3>
          <p>需要幫忙從校外買午餐，送到圖書館。預算$200以內，可選擇自己喜歡的店家。</p>
          <div className="task-meta">
            <span>酬勞: $50</span>
            <span>任務日期: 2025/06/27</span>
          </div>
          <button className="apply-btn">申請接案</button>
        </div>
      </div>
    </div>
  );
}

export default FindTask; 