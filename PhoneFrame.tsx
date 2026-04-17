import { ArrowLeft } from 'lucide-react';
import { PageId } from '../types';

interface PhoneFrameProps {
  title: string;
  showBack: boolean;
  onBack: () => void;
  children: React.ReactNode;
}

export default function PhoneFrame({ title, showBack, onBack, children }: PhoneFrameProps) {
  return (
    <div className="relative mx-auto" style={{ width: 375 }}>
      {/* Phone shell */}
      <div
        className="relative bg-white overflow-hidden"
        style={{
          width: 375,
          height: 667,
          borderRadius: 44,
          boxShadow: '0 0 0 10px #1a1a1a, 0 30px 80px rgba(0,0,0,0.4)',
        }}
      >
        {/* Status bar */}
        <div className="bg-[#1A4B8C] h-11 flex items-center justify-between px-6 shrink-0">
          {showBack ? (
            <button onClick={onBack} className="flex items-center gap-1 text-white">
              <ArrowLeft size={16} />
            </button>
          ) : (
            <span className="text-white text-xs font-medium">9:41</span>
          )}
          <span className="text-white text-sm font-semibold tracking-wide truncate max-w-[180px]">{title}</span>
          <span className="text-white text-xs">100%</span>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto" style={{ height: 667 - 44 - 56 }}>
          {children}
        </div>

        {/* Bottom nav placeholder handled by parent */}
        <div className="absolute bottom-0 left-0 right-0 h-14" />
      </div>
    </div>
  );
}
