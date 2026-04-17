import { ChevronRight } from 'lucide-react';

const topics = [
  { title: '儿童生长发育标准', desc: '身高、体重、智力全周期指南', emoji: '📏' },
  { title: '儿童营养膳食指南', desc: '科学喂养，权威机构发布', emoji: '🥕' },
  { title: '儿童常见疾病护理', desc: '安全可靠，不慌不乱', emoji: '🤒' },
  { title: '儿童安全与急救', desc: '家庭必备，百科权威内容', emoji: '🛡️' },
];

const videos = [
  { title: '洗手小课堂', emoji: '👐' },
  { title: '刷牙歌', emoji: '🦷' },
  { title: '蔬菜宝宝', emoji: '🥕' },
];

export default function ChildrenPage() {
  return (
    <div className="flex flex-col gap-3 px-4 pb-4 pt-3">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl p-4 text-white">
        <div className="text-base font-bold">儿童健康百科</div>
        <div className="text-[11px] opacity-80 mt-0.5">中国大百科第三版 · 专为家庭打造</div>
      </div>

      {/* Animation videos */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-pink-100">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-gray-800">健康科普动画</span>
          <button className="text-[10px] text-pink-500 flex items-center gap-0.5">
            全部 <ChevronRight size={11} />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {videos.map(({ title, emoji }) => (
            <button
              key={title}
              className="flex flex-col items-center gap-2 bg-pink-50 rounded-xl py-4 active:scale-95 transition-transform"
            >
              <span className="text-3xl">{emoji}</span>
              <span className="text-[10px] text-pink-600 font-medium">{title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Topics */}
      {topics.map(({ title, desc, emoji }) => (
        <button
          key={title}
          className="bg-white rounded-2xl p-4 shadow-sm border border-pink-100 flex items-center gap-3 active:scale-[0.98] transition-transform text-left w-full"
        >
          <div className="w-11 h-11 rounded-xl bg-pink-50 flex items-center justify-center text-2xl shrink-0">
            {emoji}
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-800">{title}</div>
            <div className="text-[10px] text-gray-500 mt-0.5">{desc}</div>
          </div>
          <ChevronRight size={16} className="text-gray-400" />
        </button>
      ))}
    </div>
  );
}
