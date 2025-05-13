import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTasks } from '../context/TaskContext';
import './PostTask.css';

function PostTask() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    budget: '',
    location: '',
    deadline: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addTask } = useTasks();

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

    if (!user) {
      setError('請先登入後再發布任務');
      return;
    }

    if (!formData.title || !formData.category || !formData.description || !formData.budget || !formData.location || !formData.deadline) {
      setError('請填寫所有必填欄位');
      return;
    }

    const newTask = {
      ...formData,
      publisher: user.username,
      publisherEmail: user.email
    };

    addTask(newTask);
    navigate('/find-task');
  };

  return (
    <div className="post-task">
      <h1>發布任務</h1>
      {error && <div className="error-message">{error}</div>}
      <div className="task-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>任務標題</label>
            <input 
              type="text" 
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="請輸入任務標題" 
              required
            />
          </div>
          <div className="form-group">
            <label>任務標籤</label>
            <select 
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">請選擇任務標籤</option>
              <option value="日常代辦">日常代辦（幫買東西、代領包裹、代排隊等等）</option>
              <option value="協助服務">協助服務（搬宿舍、協助活動等等）</option>
              <option value="數位支援">數位支援（問卷調查、修電腦等等）</option>
              <option value="其他">其他</option>
            </select>
          </div>
          <div className="form-group">
            <label>任務描述</label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="請詳細描述您的任務需求"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>預算範圍</label>
            <input 
              type="number" 
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="請輸入預算金額" 
              required
            />
          </div>
          <div className="form-group">
            <label>任務地點</label>
            <input 
              type="text" 
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="請輸入任務地點" 
              required
            />
          </div>
          <div className="form-group">
            <label>截止日期</label>
            <input 
              type="date" 
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">發布任務</button>
        </form>
      </div>
    </div>
  );
}

export default PostTask; 