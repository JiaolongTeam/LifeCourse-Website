const highlights = [
  { title: '拆目标', desc: '把大目标变成一段段清晰航程。' },
  { title: '看进度', desc: '当前与预期并排显示，不再迷路。' },
  { title: 'AI 纠偏', desc: '偏航时自动给出预测和下一步建议。' },
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
            <a href="#route">航线演示</a>
            <a href="#cta" className="lp-nav-cta">
              开始试飞
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="lp-hero">
          <div className="lp-container lp-hero-grid">
            <div className="lp-hero-copy">
              <p className="lp-kicker">Life Navigation</p>
              <h1>让目标像飞行一样，有航线、有仪表、有纠偏</h1>
              <p className="lp-lead">
                人生航线帮你拆解目标、追踪进度、定期 AI 复盘。掉速时，系统会先预测再给建议，让你轻松回到正轨。
              </p>
              <div className="lp-hero-tags">
                <span>低负担记录</span>
                <span>每周自动复盘</span>
                <span>偏航提前预警</span>
              </div>
              <div className="lp-actions">
                <button className="lp-btn lp-btn-primary">立即体验</button>
                <button className="lp-btn">看 30 秒演示</button>
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
                <span>当前进度 42%</span>
                <span>预期 58%</span>
              </div>
              <p className="lp-mini-tip">轻微偏航：建议将本周关键任务拆为 2 段短航程。</p>
            </div>
          </div>
        </section>

        <section id="features" className="lp-section lp-section-soft">
          <div className="lp-container">
            <h2>三个核心亮点</h2>
            <div className="lp-feature-grid">
              {highlights.map((item) => (
                <article key={item.title} className="lp-feature-card">
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
              <h2>一条轻松的目标航线</h2>
              <div className="lp-journey-line">
                <span>设定终点</span>
                <span>每周更新</span>
                <span>AI 复盘</span>
                <span>纠偏前进</span>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="lp-section">
          <div className="lp-container lp-cta">
            <div>
              <h2>准备起飞你的新目标了吗？</h2>
              <p>把压力变成节奏，把“偏航”变成“修正”。</p>
            </div>
            <button className="lp-btn lp-btn-primary">获取体验入口</button>
          </div>
        </section>
      </main>
    </div>
  )
}
