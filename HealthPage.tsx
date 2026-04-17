import { Bell, TrendingUp } from 'lucide-react';

const metrics = [
  { key: 'sleep', label: '睡眠', emoji: '😴', color: '#2E6BC4', bg: '#EBF2FF', borderColor: '#2E6BC4' },
  { key: 'bp', label: '血压', emoji: '❤️', color: '#DC2626', bg: '#FEF2F2', borderColor: '#DC2626' },
  { key: 'sugar', label: '血糖', emoji: '💉', color: '#D97706', bg: '#FFFBEB', borderColor: '#D97706' },
  { key: 'weight', label: '体重', emoji: '⚖️', color: '#059669', bg: '#ECFDF5', borderColor: '#059669' },
];

const barHeights = [60, 65, 55, 70, 62, 58, 55];
const days = ['一', '二', '三', '四', '五', '六', '日'];
const maxH = Math.max(...barHeights);

export default function HealthPage() {
  return (
    <div className="flex flex-col gap-3 px-4 pb-4 pt-3">
      {/* Overview */}
      <div className="bg-gradient-to-br from-[#1A4B8C] to-[#2E6BC4] rounded-2xl p-4 text-white flex items-center gap-4">
        <div className="text-5xl">💪</div>
        <div>
          <div className="text-base font-bold">今日健康状态</div>
          <div className="text-sm mt-0.5 opacity-90">状态良好</div>
          <div className="text-[10px] opacity-70 mt-1">2024年4月17日</div>
        </div>
      </div>

      {/* Quick record */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="text-sm font-semibold text-gray-800 mb-3">快速记录</div>
        <div className="grid grid-cols-4 gap-2">
          {metrics.map(({ key, label, emoji, bg, borderColor }) => (
            <button
              key={key}
              className="flex flex-col items-center gap-1.5 rounded-xl py-3 border-2 active:scale-95 transition-transform"
              style={{ background: bg, borderColor }}
            >
              <span className="text-2xl">{emoji}</span>
              <span className="text-[11px] font-medium text-gray-700">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Trend chart */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp size={15} className="text-[#1A4B8C]" />
          <span className="text-sm font-semibold text-gray-800">近7天血压趋势</span>
        </div>
        <div className="flex items-end justify-between gap-1 h-20 px-1">
          {barHeights.map((h, i) => (
            <div key={i} className="flex flex-col items-center gap-1 flex-1">
              <div
                className="w-full rounded-t-sm"
                style={{
                  height: `${(h / maxH) * 72}px`,
                  background: 'linear-gradient(180deg, #2E6BC4 0%, #1A4B8C 100%)',
                  opacity: i === 3 ? 1 : 0.6,
                }}
              />
              <span className="text-[9px] text-gray-400">周{days[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Health suggestion */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="text-sm font-semibold text-gray-800 mb-2">今日健康建议</div>
        <div className="bg-blue-50 border-l-4 border-[#1A4B8C] rounded-r-xl px-3 py-2.5">
          <div className="text-xs font-semibold text-[#1A4B8C] mb-1">血压控制良好！</div>
          <div className="text-xs text-gray-600 leading-relaxed">
            继续保持低盐低脂饮食，适量运动。建议每天测量一次血压并记录，保持规律作息。
          </div>
        </div>
      </div>

      {/* Medication reminder */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <Bell size={15} className="text-[#D97706]" />
          <span className="text-sm font-semibold text-gray-800">用药提醒</span>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-3 py-2.5 flex items-center gap-3">
          <span className="text-2xl">💊</span>
          <div>
            <div className="text-xs font-bold text-amber-800">08:00 降压药</div>
            <div className="text-[10px] text-amber-600 mt-0.5">请记得按时服药</div>
          </div>
        </div>
      </div>
    </div>
  );
}
