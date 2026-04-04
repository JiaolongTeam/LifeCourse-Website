const highlights = [
  {
    icon: '🧩',
    title: '拆解目标',
    desc: '长期目标 -> 周任务',
  },
  {
    icon: '📊',
    title: '进度对齐',
    desc: '当前值 vs 理论值',
  },
  {
    icon: '🧭',
    title: '偏航预警',
    desc: '落后/超前 一眼看清',
  },
  {
    icon: '🤖',
    title: 'AI 复盘',
    desc: '自动生成航行日志',
  },
]

const metrics = [
  { icon: '🟢', label: '当前进度', value: '42%' },
  { icon: '🎯', label: '理论进度', value: '58%' },
  { icon: '⚠️', label: '偏差状态', value: '落后 16%' },
  { icon: '📅', label: '预计完成', value: '延后 9 天' },
]

const journeySteps = [
  { icon: '🏁', label: '设定终点' },
  { icon: '🧩', label: '拆解里程碑' },
  { icon: '✅', label: '周度推进' },
  { icon: '📡', label: '偏差预警' },
  { icon: '🤖', label: 'AI 复盘' },
  { icon: '🚀', label: '持续纠偏' },
]

const logEntries = [
  {
    date: '2026.04.01',
    time: '21:30',
    type: '周复盘',
    title: '里程碑推进掉速',
    status: '轻微偏航',
    progress: '-6%',
    eta: '预计延后 3 天',
    summary: '关键路径执行不足，任务切换过频影响深度推进。',
    advice: '本周只保留 2 个关键任务，其他事项统一延后处理。',
  },
  {
    date: '2026.03.25',
    time: '22:10',
    type: '周复盘',
    title: '节奏恢复到航线',
    status: '已纠偏',
    progress: '+4%',
    eta: '追回 2 天',
    summary: '晨间深度时段连续执行，关键任务完成率显著提升。',
    advice: '保持晨间 90 分钟专注区块，避免午后追加高认知任务。',
  },
  {
    date: '2026.03.18',
    time: '20:45',
    type: '周复盘',
    title: '整体推进稳定',
    status: '稳定推进',
    progress: '+1%',
    eta: '按期完成',
    summary: '执行节奏平稳，风险点可控，当前仍在计划航道内。',
    advice: '维持现有节奏，并提前准备下一阶段里程碑拆解。',
  },
]

const heroStats = [
  { icon: '🎯', value: '12', label: '活跃目标' },
  { icon: '⚡', value: '89%', label: '节奏达成' },
  { icon: '🧠', value: '24', label: '复盘次数' },
]

export default function LandingPage() {
  return (
    <div className="lp-page">
      <header className="lp-header">
        <div className="lp-container lp-header-inner">
          <div className="lp-brand">
            <span className="lp-brand-dot" />
            <span>人生航线</span>
          </div>
          <nav className="lp-nav">
            <a href="#features">亮点</a>
            <a href="#logbook">AI 复盘</a>
            <a href="#route">航线演示</a>
            <a href="/privacy">隐私政策</a>
            <a href="/terms">用户协议</a>
            <a href="#cta" className="lp-nav-cta">
              立即登船
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="lp-hero">
          <div className="lp-container lp-hero-grid">
            <div className="lp-hero-copy">
              <p className="lp-kicker">LifeCourse</p>
              <h1>人生航线：把目标拆成航程，让每一步都可被看见</h1>
              <p className="lp-lead">拆目标、看偏差、做复盘。少焦虑，多前进。</p>
              <div className="lp-hero-tags">
                <span>目标拆解</span>
                <span>理论值对齐</span>
                <span>提前/延后预测</span>
                <span>定期 AI 航行日志</span>
              </div>
              <div className="lp-actions">
                <button className="lp-btn lp-btn-primary">开始规划我的航线</button>
                <button className="lp-btn lp-btn-ghost">查看航线演示</button>
              </div>
              <div className="lp-hero-stats">
                {heroStats.map((item) => (
                  <span key={item.label}>
                    <em aria-hidden="true">{item.icon}</em>
                    <strong>{item.value}</strong>
                    <small>{item.label}</small>
                  </span>
                ))}
              </div>
            </div>

            <div className="lp-sky-card" id="route">
              <div className="lp-cloud lp-cloud-1" />
              <div className="lp-cloud lp-cloud-2" />
              <div className="lp-cloud lp-cloud-3" />

              <svg className="lp-route-svg" viewBox="0 0 600 420" aria-hidden="true">
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8c7bff" />
                    <stop offset="100%" stopColor="#5eead4" />
                  </linearGradient>
                </defs>
                <path
                  className="lp-route-path"
                  d="M40 350 C 120 260, 190 230, 260 245 C 330 260, 360 205, 420 170 C 480 135, 520 95, 560 50"
                  fill="none"
                  stroke="url(#routeGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="7 8"
                />
                <path
                  className="lp-route-glow"
                  d="M40 350 C 120 260, 190 230, 260 245 C 330 260, 360 205, 420 170 C 480 135, 520 95, 560 50"
                  fill="none"
                  stroke="#b8fff3"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="1 16"
                />
                <circle cx="40" cy="350" r="9" fill="#8c7bff" />
                <circle cx="560" cy="50" r="11" fill="#5eead4" />
                <text x="24" y="377" className="lp-svg-label">
                  起点
                </text>
                <text x="532" y="32" className="lp-svg-label">
                  目标
                </text>
                <g className="lp-plane-wrap" transform="translate(397 164) rotate(-26)">
                  <text className="lp-plane">✈</text>
                </g>
              </svg>

              <div className="lp-mini-panel">
                {metrics.map((item) => (
                  <span key={item.label}>
                    <em aria-hidden="true">{item.icon}</em>
                    <strong>{item.value}</strong>
                    {item.label}
                  </span>
                ))}
              </div>
              <p className="lp-mini-tip">⚠ 偏航：本周先聚焦 2 个关键任务。</p>
            </div>
          </div>
        </section>

        <section id="features" className="lp-section lp-section-soft">
          <div className="lp-container">
            <div className="lp-section-head">
              <p className="lp-section-kicker">Capabilities</p>
              <h2>四个核心能力</h2>
            </div>
            <div className="lp-feature-grid">
              {highlights.map((item, index) => (
                <article key={item.title} className="lp-feature-card">
                  <div className="lp-feature-top">
                    <span className="lp-feature-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className="lp-feature-no">0{index + 1}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lp-section">
          <div className="lp-container">
            <div className="lp-journey">
              <h2>航线流程</h2>
              <div className="lp-journey-line">
                {journeySteps.map((item) => (
                  <div key={item.label} className="lp-journey-step">
                    <span className="lp-step-node" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className="lp-step-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="logbook" className="lp-section">
          <div className="lp-container">
            <div className="lp-logbook">
              <div className="lp-logbook-intro">
                <h2>AI 航行日志</h2>
                <p>每周自动沉淀复盘记录，像日志一样连续追踪你的航线变化。</p>
                <div className="lp-logbook-badges">
                  <span>自动记录</span>
                  <span>偏差追踪</span>
                  <span>AI 建议</span>
                </div>
              </div>
              <div className="lp-logbook-list">
                {logEntries.map((item) => (
                  <article key={item.title + item.date} className="lp-log-card">
                    <div className="lp-log-time">
                      <span>{item.date}</span>
                      <small>{item.time}</small>
                    </div>
                    <div className="lp-log-content">
                      <div className="lp-log-head">
                        <em>{item.type}</em>
                        <strong>{item.title}</strong>
                        <span>{item.status}</span>
                      </div>
                      <div className="lp-log-metrics">
                        <small>进度 {item.progress}</small>
                        <small>{item.eta}</small>
                      </div>
                      <p className="lp-log-summary">{item.summary}</p>
                      <div className="lp-log-advice">
                        <b>AI 建议</b>
                        <span>{item.advice}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="lp-section">
          <div className="lp-container lp-cta">
            <div>
              <h2>希望你的人生不会偏航</h2>
              <p>现在，开始第一条航线。</p>
            </div>
            <button className="lp-btn lp-btn-primary">获取人生航线体验入口</button>
          </div>
        </section>
      </main>
    </div>
  )
}
