import { Mic, Send, ExternalLink } from 'lucide-react';

const messages = [
  {
    role: 'ai',
    content: '您好！我是大百科健康博士，有什么健康问题可以咨询我？',
  },
  {
    role: 'user',
    content: '高血压患者应该注意什么？',
  },
  {
    role: 'ai',
    content: '高血压患者需要注意以下几点：\n1. 定期监测血压，做好记录\n2. 低盐低脂饮食，多吃蔬菜水果\n3. 适量运动，控制体重\n4. 保持良好心态，避免情绪激动\n5. 遵医嘱按时服药',
    source: true,
  },
];

const suggestions = ['血糖偏高怎么办', '如何改善睡眠', '高血压饮食建议'];

export default function AIPage() {
  return (
    <div className="flex flex-col h-full">
      {/* Chat area */}
      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'ai' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1A4B8C] to-[#2E6BC4] flex items-center justify-center text-white text-xs font-bold shrink-0 mr-2 mt-0.5">
                百
              </div>
            )}
            <div className={`max-w-[80%] ${msg.role === 'user' ? 'order-1' : ''}`}>
              <div
                className={`rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed whitespace-pre-line ${
                  msg.role === 'user'
                    ? 'bg-[#1A4B8C] text-white rounded-tr-sm'
                    : 'bg-white text-gray-700 border border-gray-100 shadow-sm rounded-tl-sm'
                }`}
              >
                {msg.content}
              </div>
              {msg.source && (
                <div className="flex items-center gap-1 mt-1.5">
                  <span className="text-[10px] text-[#1A4B8C] bg-blue-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <ExternalLink size={9} />
                    来源：中国大百科全书第三版
                  </span>
                </div>
              )}
              {msg.source && (
                <div className="text-[9px] text-gray-400 mt-1 pl-1">*仅科普，不替代医疗建议</div>
              )}
            </div>
          </div>
        ))}

        {/* Suggestion chips */}
        <div className="flex flex-wrap gap-2 mt-1">
          {suggestions.map((s) => (
            <button key={s} className="text-[11px] text-[#1A4B8C] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 active:bg-blue-100">
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Input bar */}
      <div className="px-4 pb-4 pt-2 bg-white border-t border-gray-100">
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 bg-[#1A4B8C] rounded-full flex items-center justify-center shrink-0">
            <Mic size={16} className="text-white" />
          </button>
          <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 h-9">
            <input
              className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
              placeholder="请输入您的问题..."
            />
          </div>
          <button className="w-9 h-9 bg-[#1A4B8C] rounded-full flex items-center justify-center shrink-0">
            <Send size={14} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
