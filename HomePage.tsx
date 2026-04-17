import {
  Search,
  Mic,
  BookOpen,
  Video,
  BarChart2,
  Stethoscope,
  MessageCircle,
  Star,
  Share2,
  Download,
  ChevronRight,
} from 'lucide-react';
import { PageId } from '../../types';

interface HomePageProps {
  onSwitch: (id: PageId) => void;
}

const features = [
  { id: 'ai' as PageId, label: 'AI问答', Icon: MessageCircle, color: '#2E6BC4', bg: '#EBF2FF' },
  { id: 'manual' as PageId, label: '健康手册', Icon: BookOpen, color: '#059669', bg: '#ECFDF5' },
  { id: 'course' as PageId, label: '健康课程', Icon: Video, color: '#D97706', bg: '#FFFBEB' },
  { id: 'health' as PageId, label: '我的健康', Icon: BarChart2, color: '#DC2626', bg: '#FEF2F2' },
  { id: 'doctor' as PageId, label: '医生合作', Icon: Stethoscope, color: '#7C3AED', bg: '#F5F3FF' },
];

const silverItems = [
  { label: '养生课程', emoji: '🧘' },
  { label: '医学资料', emoji: '📋' },
  { label: '营养健康', emoji: '🥗' },
  { label: '心理健康', emoji: '💭' },
];

export default function HomePage({ onSwitch }: HomePageProps) {
  return (
    <div className="flex flex-col gap-3 px-4 pb-4 pt-3">
      {/* Search */}
      <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-2.5 shadow-sm border border-gray-100">
        <Search size={16} className="text-gray-400 shrink-0" />
        <input
          className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
          placeholder="搜索疾病、症状、健康知识..."
        />
        <button className="bg-[#1A4B8C] rounded-xl p-1.5">
          <Mic size={13} className="text-white" />
        </button>
      </div>

      {/* Authority banner */}
      <div className="bg-gradient-to-r from-[#1A4B8C] to-[#2E6BC4] rounded-2xl px-4 py-4 text-center text-white">
        <div className="text-base font-bold tracking-wide">中国大百科全书·第三版</div>
        <div className="text-[11px] mt-0.5 opacity-80">国家级权威健康科普平台</div>
      </div>

      {/* Feature grid */}
      <div className="grid grid-cols-5 gap-2">
        {features.map(({ id, label, Icon, color, bg }) => (
          <button
            key={id}
            onClick={() => onSwitch(id)}
            className="flex flex-col items-center gap-1.5 rounded-2xl py-3 px-1 active:scale-95 transition-transform"
            style={{ background: bg }}
          >
            <Icon size={22} style={{ color }} strokeWidth={1.8} />
            <span className="text-[10px] font-medium leading-tight text-gray-700">{label}</span>
          </button>
        ))}
      </div>

      {/* Daily tip */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1 h-4 rounded-full bg-[#1A4B8C] inline-block" />
          <span className="text-sm font-semibold text-gray-800">每日健康科普</span>
          <span className="ml-auto text-[10px] text-[#1A4B8C] bg-blue-50 px-2 py-0.5 rounded-full font-medium">春季养生</span>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          <span className="text-[#1A4B8C] font-semibold">春季养肝护肝</span>正当时，建议多吃绿色蔬菜，保持心情舒畅，适量运动，早睡早起顺应节气。
        </p>
        <div className="flex gap-2 mt-3">
          {[
            { Icon: Star, label: '收藏' },
            { Icon: Share2, label: '分享' },
            { Icon: Download, label: '下载' },
          ].map(({ Icon, label }) => (
            <button key={label} className="flex-1 flex items-center justify-center gap-1 bg-gray-50 hover:bg-blue-50 text-gray-500 text-[11px] py-1.5 rounded-lg transition-colors">
              <Icon size={12} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Silver zone */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#1A4B8C]/20">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm font-semibold text-gray-800">银发健康专区</div>
            <div className="text-[10px] text-gray-500 mt-0.5">老年健康权威知识库</div>
          </div>
          <button onClick={() => onSwitch('silver')} className="text-[10px] text-[#1A4B8C] flex items-center gap-0.5">
            查看全部 <ChevronRight size={12} />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {silverItems.map(({ label, emoji }) => (
            <button
              key={label}
              onClick={() => onSwitch('silver')}
              className="flex flex-col items-center gap-1 bg-blue-50 rounded-xl py-3 active:scale-95 transition-transform"
            >
              <span className="text-2xl">{emoji}</span>
              <span className="text-[10px] text-gray-700 font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Children zone */}
      <button
        onClick={() => onSwitch('children')}
        className="bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl px-4 py-3 flex items-center justify-between text-white active:scale-[0.98] transition-transform"
      >
        <div>
          <div className="text-sm font-bold">儿童健康专区</div>
          <div className="text-[10px] opacity-80 mt-0.5">生长发育 · 营养 · 安全百科</div>
        </div>
        <div className="text-3xl">👶</div>
      </button>
    </div>
  );
}
