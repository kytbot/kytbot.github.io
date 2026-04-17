import { Play, Pause, Maximize2, SkipForward, Captions, ChevronRight } from 'lucide-react';

const courses = [
  {
    title: '八段锦入门精讲',
    desc: '传统养生功法，适合中老年日常练习',
    expert: '张教授',
    views: '1,234',
    emoji: '🧘',
    bg: '#ECFDF5',
    tag: '养生',
  },
  {
    title: '老年人膳食营养指南',
    desc: '合理饮食搭配，提高身体免疫力',
    expert: '李主任医师',
    views: '987',
    emoji: '🥗',
    bg: '#FFFBEB',
    tag: '营养',
  },
  {
    title: '保持积极心态的方法',
    desc: '老年人心理调适与关爱，享受幸福晚年',
    expert: '王院士',
    views: '756',
    emoji: '💭',
    bg: '#EBF2FF',
    tag: '心理',
  },
];

export default function CoursePage() {
  return (
    <div className="flex flex-col gap-3 px-4 pb-4 pt-3">
      {/* Video player */}
      <div className="bg-black rounded-2xl overflow-hidden shadow-lg">
        <div className="relative h-44 bg-gradient-to-br from-[#0f1f3d] to-[#1a3a6b] flex flex-col items-center justify-center">
          <div className="text-[11px] text-blue-300 mb-3 tracking-wide uppercase">大百科权威健康课</div>
          <button className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
            <Play size={24} className="text-white ml-1" />
          </button>
          <div className="text-white text-xs mt-2 opacity-70">科学健身指南 · 八段锦入门</div>
        </div>

        {/* Subtitle */}
        <div className="bg-black/90 text-white text-center py-2 text-xs">
          欢迎收看大百科健康科普课程
        </div>

        {/* Controls */}
        <div className="bg-[#1a1a1a] px-4 py-2.5 flex items-center gap-3">
          <button><Pause size={16} className="text-white" /></button>
          <button><SkipForward size={16} className="text-white" /></button>
          <span className="text-white text-[10px]">03:24 / 10:00</span>
          <div className="flex-1 h-1 bg-gray-700 rounded-full mx-1">
            <div className="w-1/3 h-full bg-[#2E6BC4] rounded-full" />
          </div>
          <button className="text-[#2E6BC4] text-[10px] font-bold">1.0x</button>
          <button><Captions size={14} className="text-[#2E6BC4]" /></button>
          <button><Maximize2 size={14} className="text-white" /></button>
        </div>
      </div>

      {/* Current course info */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm font-bold text-gray-800">科学健身指南 · 八段锦入门</div>
            <div className="text-xs text-gray-500 mt-1">专业教练指导，传统养生功法</div>
          </div>
          <span className="text-[10px] text-[#059669] bg-emerald-50 px-2 py-0.5 rounded-full font-medium shrink-0">养生</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[10px] text-[#1A4B8C] bg-blue-50 px-2 py-0.5 rounded-full">🏅 大百科专属专家 张教授</span>
          <span className="text-[10px] text-gray-400">1,234人学习</span>
        </div>
      </div>

      {/* More courses */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-800">更多课程</span>
        <button className="text-[10px] text-[#1A4B8C] flex items-center gap-0.5">
          全部 <ChevronRight size={12} />
        </button>
      </div>

      {courses.map(({ title, desc, expert, views, emoji, bg, tag }) => (
        <button key={title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex active:scale-[0.98] transition-transform text-left">
          <div className="w-20 flex items-center justify-center shrink-0 text-4xl" style={{ background: bg }}>
            {emoji}
          </div>
          <div className="flex-1 p-3">
            <div className="flex items-start justify-between">
              <div className="text-xs font-semibold text-gray-800 leading-tight flex-1 mr-2">{title}</div>
              <span className="text-[9px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-full shrink-0">{tag}</span>
            </div>
            <div className="text-[10px] text-gray-500 mt-1 leading-snug">{desc}</div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[10px] text-[#1A4B8C]">🏅 {expert}</span>
              <span className="text-[10px] text-gray-400">{views}人学习</span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
