import React from 'react';
import './MyTasks.css';

function MyTasks() {
  return (
    <div className="my-tasks">
      <h1>我的任務</h1>
      <div className="task-tabs">
        <button className="tab-btn active">進行中</button>
        <button className="tab-btn">已完成</button>
        <button className="tab-btn">已發布</button>
      </div>
      <div className="task-list">
        <div className="task-card">
          <div className="task-header">
            <h3>找人幫我搬宿舍</h3>
            <span className="status in-progress">進行中</span>
          </div>
          <p>從女14舍搬到後門，有推車可用...</p>
          <div className="task-meta">
            <span>酬勞: $300</span>
            <span>任務日期: 2025/06/30</span>
          </div>
          <div className="task-actions">
            <button className="action-btn">查看詳情</button>
            <button className="action-btn">聯繫接案者</button>
          </div>
        </div>
        {/* 更多任務卡片將在這裡動態生成 */}
      </div>
    </div>
  );
}

export default MyTasks; 