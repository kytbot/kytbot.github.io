import { ChevronRight } from 'lucide-react';

const doctors = [
  { name: '张教授', title: '大百科专属专家', dept: '心血管内科', level: '主任医师', emoji: '👨‍⚕️', bg: '#EBF2FF' },
  { name: '李医生', title: '三甲医院专家', dept: '营养科', level: '副主任医师', emoji: '👩‍⚕️', bg: '#ECFDF5' },
  { name: '王院士', title: '大百科医学顾问', dept: '老年医学', level: '研究员', emoji: '👨‍🔬', bg: '#FFFBEB' },
  { name: '陈医生', title: '三甲医院专家', dept: '中医科', level: '主治医师', emoji: '👨‍⚕️', bg: '#FEF2F2' },
];

export default function DoctorPage() {
  return (
    <div className="flex flex-col gap-3 px-4 pb-4 pt-3">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#1A4B8C] to-[#2E6BC4] rounded-2xl p-4 text-white">
        <div className="text-sm font-bold">医生合作专区</div>
        <div className="text-[11px] opacity-80 mt-0.5">大百科专属专家团队 · 权威审核</div>
      </div>

      {doctors.map(({ name, title, dept, level, emoji, bg }) => (
        <button
          key={name}
          className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 active:scale-[0.98] transition-transform text-left w-full"
        >
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
            style={{ background: bg }}
          >
            {emoji}
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-gray-800">{name}</div>
            <div className="text-[10px] text-[#1A4B8C] mt-0.5 font-medium">🏅 {title}</div>
            <div className="text-[10px] text-gray-500 mt-0.5">
              {dept} · {level}
            </div>
          </div>
          <ChevronRight size={16} className="text-gray-400" />
        </button>
      ))}

      <div className="bg-blue-50 rounded-2xl p-3 text-center">
        <div className="text-[11px] text-[#1A4B8C] leading-relaxed">
          所有科普内容均经过三甲医院专家严格审核<br />
          <span className="font-semibold">仅科普，不诊疗</span>
        </div>
      </div>
    </div>
  );
}
