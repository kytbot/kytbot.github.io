export default function FeedbackPage() {
  return (
    <div className="flex flex-col gap-3 px-4 pb-4 pt-3">
      <div className="bg-gradient-to-r from-[#1A4B8C] to-[#2E6BC4] rounded-2xl p-4 text-white">
        <div className="text-sm font-bold">用户反馈</div>
        <div className="text-[11px] opacity-80 mt-0.5">您的建议是我们进步的动力</div>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col gap-4">
        <div>
          <label className="text-xs font-semibold text-gray-700 block mb-1.5">反馈类型</label>
          <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#1A4B8C]">
            <option>功能建议</option>
            <option>内容纠错</option>
            <option>Bug反馈</option>
            <option>其他</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-700 block mb-1.5">反馈内容</label>
          <textarea
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#1A4B8C] resize-none"
            rows={5}
            placeholder="请详细描述您的问题或建议..."
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-700 block mb-1.5">联系方式（选填）</label>
          <input
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#1A4B8C]"
            placeholder="手机号或邮箱"
          />
        </div>

        <button className="w-full bg-[#1A4B8C] text-white rounded-xl py-3 text-sm font-semibold active:bg-[#153d74] transition-colors">
          提交反馈
        </button>
      </div>
    </div>
  );
}
