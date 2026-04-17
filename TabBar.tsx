import { Home, BarChart2, Heart, MessageCircle, User } from 'lucide-react';
import { PageId } from '../types';

interface TabBarProps {
  current: PageId;
  onSwitch: (id: PageId) => void;
}

const tabs = [
  { id: 'home' as PageId, label: '首页', Icon: Home },
  { id: 'health' as PageId, label: '健康', Icon: BarChart2 },
  { id: 'silver' as PageId, label: '银发', Icon: Heart },
  { id: 'ai' as PageId, label: 'AI问答', Icon: MessageCircle },
  { id: 'me' as PageId, label: '我的', Icon: User },
];

export default function TabBar({ current, onSwitch }: TabBarProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[56px] bg-white border-t border-gray-100 flex items-center z-50">
      {tabs.map(({ id, label, Icon }) => {
        const active = current === id;
        return (
          <button
            key={id}
            onClick={() => onSwitch(id)}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 py-1"
          >
            <Icon
              size={22}
              strokeWidth={active ? 2.2 : 1.6}
              className={active ? 'text-[#1A4B8C]' : 'text-gray-400'}
            />
            <span className={`text-[10px] font-medium ${active ? 'text-[#1A4B8C]' : 'text-gray-400'}`}>
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
