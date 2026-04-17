import { useState } from 'react';
import { PageId } from './types';
import TabBar from './components/TabBar';
import HomePage from './components/pages/HomePage';
import AIPage from './components/pages/AIPage';
import ManualPage from './components/pages/ManualPage';
import CoursePage from './components/pages/CoursePage';
import HealthPage from './components/pages/HealthPage';
import DoctorPage from './components/pages/DoctorPage';
import SilverPage from './components/pages/SilverPage';
import ChildrenPage from './components/pages/ChildrenPage';
import FeedbackPage from './components/pages/FeedbackPage';
import MePage from './components/pages/MePage';

const pageTitles: Record<PageId, string> = {
  home: '大百科健康百科',
  ai: 'AI健康问答',
  manual: '家庭健康手册',
  course: '健康课程',
  health: '我的健康',
  doctor: '医生合作专区',
  silver: '银发健康专区',
  children: '儿童健康专区',
  feedback: '用户反馈',
  me: '我的',
};

const tabPages: PageId[] = ['home', 'health', 'silver', 'ai', 'me'];

export default function App() {
  const [current, setCurrent] = useState<PageId>('home');
  const [history, setHistory] = useState<PageId[]>([]);

  const goTo = (id: PageId) => {
    setHistory((h) => [...h, current]);
    setCurrent(id);
  };

  const goBack = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setCurrent(prev);
  };

  const switchTab = (id: PageId) => {
    setHistory([]);
    setCurrent(id);
  };

  const showBack = history.length > 0 && !tabPages.includes(current);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center py-10">
      <div
        className="relative bg-white"
        style={{
          width: 375,
          height: 667,
          borderRadius: 44,
          overflow: 'hidden',
          boxShadow: '0 0 0 10px #1a1a1a, 0 30px 80px rgba(0,0,0,0.4)',
        }}
      >
        {/* Status bar */}
        <div className="bg-[#1A4B8C] h-11 flex items-center justify-between px-5 shrink-0 relative z-40">
          {showBack ? (
            <button onClick={goBack} className="text-white text-sm flex items-center gap-1">
              ‹ 返回
            </button>
          ) : (
            <span className="text-white text-xs">9:41</span>
          )}
          <span className="text-white text-sm font-semibold tracking-wide absolute left-1/2 -translate-x-1/2 truncate max-w-[200px]">
            {pageTitles[current]}
          </span>
          <span className="text-white text-xs">100%</span>
        </div>

        {/* Page content */}
        <div
          className="overflow-y-auto bg-gray-50"
          style={{ height: 667 - 44 - 56 }}
        >
          {current === 'home' && <HomePage onSwitch={goTo} />}
          {current === 'ai' && <AIPage />}
          {current === 'manual' && <ManualPage />}
          {current === 'course' && <CoursePage />}
          {current === 'health' && <HealthPage />}
          {current === 'doctor' && <DoctorPage />}
          {current === 'silver' && <SilverPage />}
          {current === 'children' && <ChildrenPage />}
          {current === 'feedback' && <FeedbackPage />}
          {current === 'me' && <MePage onSwitch={goTo} />}
        </div>

        {/* Tab bar */}
        <div className="absolute bottom-0 left-0 right-0 z-40">
          <TabBar current={current} onSwitch={switchTab} />
        </div>
      </div>
    </div>
  );
}
