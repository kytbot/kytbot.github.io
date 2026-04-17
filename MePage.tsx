import { Star, Clock, Video, MessageSquare, Settings, ChevronRight } from 'lucide-react';
import { PageId } from '../../types';

interface MePageProps {
  onSwitch: (id: PageId) => void;
}

const menuItems = [
  { Icon: Star, label: '我的收藏', color: '#D97706' },
  { Icon: Clock, label: '阅读历史', color: '#2E6BC4' },
  { Icon: Video, label: '学习记录', color: '#059669' },
  { Icon: MessageSquare, label: '用户反馈', color: '#DC2626', page: 'feedback' as PageId },
  { Icon: Settings, label: '设置', color: '#6B7280' },
];

export default function MePage({ onSwitch }: MePageProps) {
  return (
    <div className="flex flex-col gap-3 px-4 pb-4 pt-3">
      {/* Profile card */}
      <div className="bg-gradient-to-br from-[#1A4B8C] to-[#2E6BC4] rounded-2xl p-5 flex items-center gap-4 text-white">
        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-3xl">
          👤
        </div>
        <div>
          <div className="text-base font-bold">用户昵称</div>
          <div className="text-[11px] opacity-80 mt-0.5">欢迎使用大百科健康百科</div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="grid grid-cols-3 divide-x divide-gray-100">
          {[
            { label: '收藏', value: '12' },
            { label: '阅读', value: '38' },
            { label: '课程', value: '5' },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1 py-1">
              <span className="text-lg font-bold text-[#1A4B8C]">{value}</span>
              <span className="text-[10px] text-gray-500">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {menuItems.map(({ Icon, label, color, page }, i) => (
          <button
            key={label}
            onClick={() => page && onSwitch(page)}
            className={`w-full flex items-center gap-3 px-4 py-3.5 active:bg-gray-50 transition-colors text-left ${
              i < menuItems.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `${color}18` }}
            >
              <Icon size={16} style={{ color }} />
            </div>
            <span className="flex-1 text-sm text-gray-700">{label}</span>
            <ChevronRight size={15} className="text-gray-400" />
          </button>
        ))}
      </div>

      <div className="text-center text-[10px] text-gray-400">版本 1.0.0 · 中国大百科全书出版社</div>
    </div>
  );
}
