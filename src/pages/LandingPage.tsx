import { Link } from 'react-router-dom'
import lifeCourseIcon from '../assets/lifeCourse.png'
import testGroupImage from '../assets/test-group.jpeg'

const featureCards = [
  { title: '目标拆解', value: '12', unit: '个活跃目标' },
  { title: '节奏达成', value: '89%', unit: '近 30 天' },
  { title: '偏航告警', value: '3', unit: '本周提醒' },
  { title: '复盘产出', value: '24', unit: 'AI 日志' },
]

export default function LandingPage() {
  return (
    <div className="lp-page">
      <header className="lp-header">
        <div className="lp-container lp-header-inner">
          <div className="lp-brand">
            <img src={lifeCourseIcon} alt="LifeCourse 图标" className="lp-brand-icon" />
            <span>人生航线</span>
          </div>
          <nav className="lp-nav">
            <a href="#features">产品能力</a>
            <a href="#boarding-pass">目标登机牌</a>
            <a href="#beta-group">内测群</a>
            <Link to="/privacy">隐私政策</Link>
            <Link to="/terms">用户协议</Link>
            <a href="#cta" className="lp-nav-cta">
              立即体验
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="lp-hero">
          <div className="lp-container lp-hero-grid">
            <div className="lp-hero-copy">
              <img src={lifeCourseIcon} alt="LifeCourse 应用图标" className="lp-hero-icon" />
              <p className="lp-kicker">LifeCourse</p>
              <h1>「人生航线」-目标拆解跟踪与复盘</h1>
              <p className="lp-lead">目标拆解 × 进度追踪 × AI复盘</p>
              <div className="lp-quick-tags">
                <span>目标可视化</span>
                <span>进度对齐</span>
                <span>周复盘</span>
              </div>
              <div className="lp-actions">
                <button className="lp-btn lp-btn-primary">创建我的第一条航线</button>
                <button className="lp-btn lp-btn-ghost">查看演示</button>
              </div>
            </div>

            <article className="lp-boarding-pass" id="boarding-pass">
              <header className="lp-pass-head">
                <span className="lp-pass-badge">GOAL BOARDING PASS</span>
                <span className="lp-pass-no">LC-2026-042</span>
              </header>
              <div className="lp-pass-route">
                <div>
                  <small>FROM</small>
                  <strong>当前状态</strong>
                </div>
                <span className="lp-pass-line" />
                <div>
                  <small>TO</small>
                  <strong>目标版本</strong>
                </div>
              </div>
              <div className="lp-pass-grid">
                <div>
                  <small>起飞日</small>
                  <strong>2026.04.06</strong>
                </div>
                <div>
                  <small>登机口</small>
                  <strong>G12</strong>
                </div>
                <div>
                  <small>理论进度</small>
                  <strong>58%</strong>
                </div>
                <div>
                  <small>当前进度</small>
                  <strong>42%</strong>
                </div>
              </div>
              <div className="lp-pass-progress">
                <span>偏差 -16%</span>
                <div className="lp-progress-track">
                  <div className="lp-progress-value" />
                </div>
                <small>预计延后 9 天</small>
              </div>
            </article>
          </div>
        </section>

        <section id="features" className="lp-section">
          <div className="lp-container">
            <div className="lp-kpi-grid">
              {featureCards.map((item) => (
                <article key={item.title} className="lp-kpi-card">
                  <p>{item.title}</p>
                  <strong>{item.value}</strong>
                  <span>{item.unit}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="beta-group" className="lp-section">
          <div className="lp-container">
            <div className="lp-beta-group">
              <div className="lp-beta-copy">
                <p className="lp-kicker">Beta Group</p>
                <h2>加入产品内测群</h2>
                <p>获取新功能优先体验资格。</p>
              </div>
              <figure className="lp-beta-image-wrap">
                <img src={testGroupImage} alt="人生航线内测群二维码" className="lp-beta-image" />
              </figure>
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
