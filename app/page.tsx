export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="inline-flex items-center gap-2 border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-300 mb-8">
          ✨ Multi-Model AI Workflow Platform
        </div>

        <h1 className="text-6xl font-bold leading-tight max-w-4xl">
          PromptForge-AI
        </h1>

        <p className="text-zinc-400 text-xl mt-6 max-w-2xl leading-relaxed">
          面向 AI 开发者的 Prompt 管理与 AI Workflow 平台。
          支持 GPT、Claude、Gemini、DeepSeek 多模型输出对比。
        </p>

        <div className="flex gap-4 mt-10">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-medium">
            开始使用
          </button>

          <button className="border border-zinc-700 px-6 py-3 rounded-xl text-zinc-300">
            GitHub
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 pb-24">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <h3 className="text-2xl font-semibold mb-4">多模型对比</h3>
          <p className="text-zinc-400 leading-relaxed">
            同时对比 GPT、Claude、Gemini 与 DeepSeek 输出结果。
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <h3 className="text-2xl font-semibold mb-4">AI Workflow</h3>
          <p className="text-zinc-400 leading-relaxed">
            构建 Prompt Workflow 与多 Agent 协同开发流程。
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <h3 className="text-2xl font-semibold mb-4">Prompt Version</h3>
          <p className="text-zinc-400 leading-relaxed">
            支持 Prompt 历史版本、回滚与实验管理。
          </p>
        </div>
      </section>
    </main>
  )
}