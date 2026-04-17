import { Star, Share2, Download, ChevronRight } from 'lucide-react';

const chapters = [
  { title: '第一章：日常保健', active: true },
  { title: '第二章：常见疾病预防', active: false },
  { title: '第三章：急救知识', active: false },
];

const manuals = [
  { title: '高血压家庭管理手册', tag: '慢病管理', color: '#DC2626', bg: '#FEF2F2' },
  { title: '糖尿病日常护理指南', tag: '慢病管理', color: '#D97706', bg: '#FFFBEB' },
  { title: '老年养生四季手册', tag: '养生保健', color: '#059669', bg: '#ECFDF5' },
  { title: '家庭急救知识手册', tag: '急救安全', color: '#2E6BC4', bg: '#EBF2FF' },
];

export default function ManualPage() {
  return (
    <div className="flex flex-col gap-3 px-4 pb-4 pt-3">
      {/* Header card */}
      <div className="bg-gradient-to-br from-[#1A4B8C] to-[#2E6BC4] rounded-2xl p-4 text-white">
        <div className="text-base font-bold mb-1">家庭健康指南</div>
        <div className="text-[11px] opacity-80 leading-relaxed">权威内容拆解，易读可收藏可分享</div>
      </div>

      {/* Chapter nav */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="text-sm font-semibold text-gray-800 mb-3">目录导航</div>
        <div className="flex flex-col divide-y divide-gray-100">
          {chapters.map(({ title, active }) => (
            <button key={title} className="flex items-center justify-between py-2.5">
              <span className={`text-xs ${active ? 'text-[#1A4B8C] font-semibold' : 'text-gray-600'}`}>
                {title}
              </span>
              <ChevronRight size={14} className="text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Content preview */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="text-sm font-semibold text-gray-800 mb-2">合理饮食</div>
        <p className="text-xs text-gray-600 leading-relaxed">
          建议每天摄入<span className="text-[#1A4B8C] font-semibold">谷物类 250–400g</span>，
          <span className="text-[#059669] font-semibold">蔬菜 300–500g</span>，
          <span className="text-[#D97706] font-semibold">水果 200–350g</span>，
          保证充足蛋白质与钙质摄入。
        </p>
        <div className="flex gap-2 mt-3">
          {[{ Icon: Star, label: '收藏' }, { Icon: Share2, label: '分享' }, { Icon: Download, label: '下载' }].map(({ Icon, label }) => (
            <button key={label} className="flex-1 flex items-center justify-center gap-1 bg-gray-50 text-gray-500 text-[11px] py-1.5 rounded-lg">
              <Icon size={12} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Manual list */}
      <div className="text-sm font-semibold text-gray-800">精选手册</div>
      {manuals.map(({ title, tag, color, bg }) => (
        <button key={title} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 w-full text-left active:scale-[0.98] transition-transform">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: bg }}>
            <span className="text-lg">📖</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-800">{title}</div>
            <span className="text-[10px] px-2 py-0.5 rounded-full font-medium mt-1 inline-block" style={{ color, background: bg }}>
              {tag}
            </span>
          </div>
          <ChevronRight size={16} className="text-gray-400" />
        </button>
      ))}
    </div>
  );
}
