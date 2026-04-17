import { ChevronRight } from 'lucide-react';

const sections = [
  {
    title: '养生课程',
    desc: '八段锦、太极拳等传统养生功法，适合日常练习',
    emoji: '🧘',
    bg: '#ECFDF5',
    border: '#059669',
    items: ['八段锦', '太极拳', '气功'],
    itemEmojis: ['🧘', '🥋', '🌬️'],
  },
  {
    title: '医学资料科普',
    desc: '常见老年疾病预防与护理，高血压、糖尿病、冠心病等',
    emoji: '📋',
    bg: '#EBF2FF',
    border: '#2E6BC4',
    items: ['高血压', '糖尿病', '冠心病'],
    itemEmojis: ['❤️', '💉', '🫀'],
  },
  {
    title: '营养与健康',
    desc: '老年人合理膳食指南，科学营养搭配建议',
    emoji: '🥗',
    bg: '#FFFBEB',
    border: '#D97706',
    items: ['膳食搭配', '营养补充', '四季食补'],
    itemEmojis: ['🥗', '💊', '🍵'],
  },
  {
    title: '心理健康',
    desc: '老年人心理调适与关爱，保持积极乐观的心态',
    emoji: '💭',
    bg: '#FEF2F2',
    border: '#DC2626',
    items: ['情绪调节', '家庭关系', '社交活动'],
    itemEmojis: ['😊', '👨‍👩‍👧', '🤝'],
  },
];

export default function SilverPage() {
  return (
    <div className="flex flex-col gap-3 px-4 pb-4 pt-3">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1A4B8C] to-[#2E6BC4] rounded-2xl p-4 text-white">
        <div className="text-base font-bold">银发健康专区</div>
        <div className="text-[11px] opacity-80 mt-0.5">老年健康权威知识库 · 中国大百科全书第三版</div>
      </div>

      {sections.map(({ title, desc, emoji, bg, border, items, itemEmojis }) => (
        <div
          key={title}
          className="bg-white rounded-2xl p-4 shadow-sm border-l-4"
          style={{ borderLeftColor: border }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">{emoji}</span>
              <span className="text-sm font-semibold text-gray-800">{title}</span>
            </div>
            <button className="text-[10px] text-gray-400 flex items-center gap-0.5">
              更多 <ChevronRight size={11} />
            </button>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed mb-3">{desc}</p>
          <div className="flex gap-2">
            {items.map((item, i) => (
              <button
                key={item}
                className="flex-1 flex flex-col items-center gap-1 rounded-xl py-2.5 active:scale-95 transition-transform"
                style={{ background: bg }}
              >
                <span className="text-xl">{itemEmojis[i]}</span>
                <span className="text-[10px] text-gray-700 font-medium">{item}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
