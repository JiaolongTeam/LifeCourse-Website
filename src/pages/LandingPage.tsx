import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import lifeCourseIcon from '../assets/lifeCourse.png'
import testGroupQRCode from '../assets/test-group.jpeg'
import { LOCALE_STORAGE_KEY, type Locale, getStoredLocale } from '../locale'

const TESTFLIGHT_URL = 'https://testflight.apple.com/join/9y2nCkSf'

type NavCopy = {
  privacy: string
  terms: string
  cta: string
}

const navZh: NavCopy = {
  privacy: '隐私政策',
  terms: '用户协议',
  cta: '加入内测',
}

const navEn: NavCopy = {
  privacy: 'Privacy',
  terms: 'Terms',
  cta: 'Start tracking',
}

const contentByLocale = {
  zh: {
    nav: navZh,
    hero: {
      kicker: '目标拆解 x 进度校准 x AI复盘',
      title: '人生航线 - 目标校准与复盘',
      lead: 'LifeCourse 将目标拆解为里程碑，持续对比实际进度与预期进度，在延迟放大前完成路径修正。',
      tags: ['实际 vs 预期', '任务级偏差', '提前 / 延后预测'],
      primaryCta: '加入内测',
      productAria: 'LifeCourse 产品界面预览',
      productTitle: '目标轨迹 / 2026 Q2 成长计划',
      productUpdated: '5 分钟前更新',
      expectedProgress: '预期进度',
      actualProgress: '实际进度',
      deviation: '偏差',
      forecastDate: '预测完成时间',
      forecastValue: '预计延后 6 天',
      planNode: '计划',
      actualNode: '实际',
      productFoot: '里程碑 3 进度偏慢，主要原因是任务切换频繁和工时预估偏低。',
    },
    features: {
      kicker: '核心能力',
      title: '用可测量进度管理目标，而不是靠情绪推动。',
      list: [
        {
          title: '目标拆解',
          description: '把长期目标拆成里程碑、周检查点和可执行任务。',
          metricLabel: '当前结构',
          metricValue: '3 个目标 · 14 个里程碑 · 52 个任务',
        },
        {
          title: '实际 vs 预期',
          description: '实时比对实际进度线与计划进度线，快速暴露执行差距。',
          metricLabel: '当前冲刺',
          metricValue: '实际 41% · 预期 53% · 偏差 -12%',
        },
        {
          title: '偏航感知',
          description: '在偏差积累前发出提醒，并关联时间线上下文原因。',
          metricLabel: '本周状态',
          metricValue: '2 次偏差提醒 · 1 次已恢复',
        },
        {
          title: '时间预测',
          description: '基于当前节奏与完成速率，持续估算目标完成日期。',
          metricLabel: '预测结果',
          metricValue: '若节奏不变，预计 +6 天完成',
        },
      ],
    },
    showcase: {
      kicker: '核心功能展示',
      title: '用真实页面快速理解 LifeCourse 的工作流。',
      carouselAria: '应用核心功能截图横向滚动展示',
      items: [
        {
          key: 'list',
          title: '目标列表',
          description: '集中查看全部目标状态，快速定位需要优先推进的项目。',
          alt: 'LifeCourse 目标列表页面截图',
        },
        {
          key: 'detail',
          title: '目标详情页',
          description: '围绕单个目标查看里程碑、任务拆解与节奏变化。',
          alt: 'LifeCourse 目标详情页截图',
        },
        {
          key: 'subProgress',
          title: '子进度',
          description: '按子任务跟踪推进状态，及时发现局部阻塞和偏差。',
          alt: 'LifeCourse 子进度页面截图',
        },
        {
          key: 'aiReview',
          title: 'AI 复盘',
          description: '自动总结阶段表现并给出可执行的下一步调整建议。',
          alt: 'LifeCourse AI 复盘页面截图',
        },
      ],
    },
    howItWorks: {
      kicker: '运行方式',
      title: '四步循环，稳定推进。',
      steps: [
        {
          title: '定义路径',
          detail: '设定目标日期，拆分里程碑，并给出预期完成曲线。',
        },
        {
          title: '记录现实',
          detail: '通过轻量更新记录每日进展与阻塞因素。',
        },
        {
          title: '计算偏差',
          detail: '对比实际线与计划线，得到偏差和排期影响。',
        },
        {
          title: '修正轨迹',
          detail: '仅重排受影响节点，保持长期目标稳定。',
        },
      ],
    },
    insights: {
      kicker: '复盘洞察',
      title: 'AI 输出平静、可执行的周总结。',
      list: [
        '当前落后主要来自执行节奏，而非规划质量；高估了任务完成速度。',
        '并行目标从 4 个减少到 2 个后，连续完成率明显提升。',
        '若保持当前节奏，Q2 目标将延后 6 天，建议本周前置一个里程碑。',
      ],
      summaryPrefix: '总结',
    },
    socialProof: {
      kicker: '用户反馈',
      title: '被专注型团队和独立创作者使用。',
      logos: ['Northline Studio', 'Delta Product Lab', 'Axiom Learning'],
      quotes: [
        {
          quote: 'LifeCourse 让我们的周会从“讲感觉”变成“看证据”。',
          author: 'B2B SaaS 团队 · 产品负责人',
        },
        {
          quote: '偏差视图让我第一次可以在风险形成前做调整。',
          author: '教育类应用创业者',
        },
      ],
    },
    finalCta: {
      kicker: '最后一步',
      title: '让目标路径保持可见，减少噪音。',
      lead: '从一个目标开始，每周校正一次轨迹。',
      qrTitle: '扫码加入内测群',
      qrHint: '进群后可获取内测版本与更新通知',
      qrAlt: 'LifeCourse 内测群二维码',
    },
    languageLabel: '语言',
  },
  en: {
    nav: navEn,
    hero: {
      kicker: 'Goal breakdown · progress calibration · AI review',
      title: 'LifeCourse — goal calibration & review',
      lead: 'LifeCourse breaks goals into milestones, compares real progress with expected progress, and helps teams correct direction before delays compound.',
      tags: ['Actual vs Expected', 'Delta at task level', 'Forecast ahead / delayed'],
      primaryCta: 'Join beta',
      secondaryCta: 'View product demo',
      productAria: 'LifeCourse product interface preview',
      productTitle: 'Trajectory / Q2 Personal Growth',
      productUpdated: 'Updated 5m ago',
      expectedProgress: 'Expected progress',
      actualProgress: 'Actual progress',
      deviation: 'Deviation',
      forecastDate: 'Forecast date',
      forecastValue: 'Delayed by 6 days',
      planNode: 'Plan',
      actualNode: 'Actual',
      productFoot: 'Milestone 3 is off pace due to fragmented focus and under-estimated effort.',
    },
    features: {
      kicker: 'CORE FEATURES',
      title: 'Built for measurable progress, not motivation theater.',
      list: [
        {
          title: 'Goal breakdown',
          description: 'Turn one long goal into concrete milestones, weekly checkpoints, and executable tasks.',
          metricLabel: 'Current tree',
          metricValue: '3 goals · 14 milestones · 52 tasks',
        },
        {
          title: 'Progress vs expected',
          description: 'Track actual progress against the planned line and expose gap in real time.',
          metricLabel: 'Current sprint',
          metricValue: 'Actual 41% · Expected 53% · Delta -12%',
        },
        {
          title: 'Deviation awareness',
          description: 'Surface drift before it compounds, with reason tags tied to timeline events.',
          metricLabel: 'This week',
          metricValue: '2 drift alerts · 1 recovered',
        },
        {
          title: 'Time prediction',
          description: 'Estimate delivery date continuously based on current pace and completion velocity.',
          metricLabel: 'Forecast',
          metricValue: 'Finish: +6 days if pace unchanged',
        },
      ],
    },
    showcase: {
      kicker: 'PRODUCT WALKTHROUGH',
      title: 'Understand core workflows through real app screens.',
      carouselAria: 'Scrolling strip of app feature screenshots',
      items: [
        {
          key: 'list',
          title: 'Goal list',
          description: 'View all goals in one place and quickly spot what needs priority.',
          alt: 'LifeCourse goal list screenshot',
        },
        {
          key: 'detail',
          title: 'Goal detail',
          description: 'Inspect milestones, task structure, and pacing for a single goal.',
          alt: 'LifeCourse goal detail screenshot',
        },
        {
          key: 'subProgress',
          title: 'Sub progress',
          description: 'Track child-level execution and surface local blockers early.',
          alt: 'LifeCourse sub progress screenshot',
        },
        {
          key: 'aiReview',
          title: 'AI review',
          description: 'Generate concise reflections with actionable next-step suggestions.',
          alt: 'LifeCourse AI review screenshot',
        },
      ],
    },
    howItWorks: {
      kicker: 'HOW IT WORKS',
      title: 'Four steps, one stable operating loop.',
      steps: [
        {
          title: 'Define route',
          detail: 'Set target date, split milestones, and assign expected completion curve.',
        },
        {
          title: 'Log reality',
          detail: 'Capture daily progress and blockers with lightweight status updates.',
        },
        {
          title: 'Measure deviation',
          detail: 'Compare actual line to plan, then calculate delta and schedule impact.',
        },
        {
          title: 'Adjust trajectory',
          detail: 'Re-plan only affected milestones and keep the long-term objective stable.',
        },
      ],
    },
    insights: {
      kicker: 'REFLECTION / INSIGHTS',
      title: 'AI writes calm summaries for weekly adjustment.',
      list: [
        'You are behind on execution, not on planning quality. Most delay comes from under-estimated task duration.',
        'Progress recovered after reducing parallel goals from 4 to 2. Focus width improved consistency.',
        'If current pace continues, Q2 objective finishes 6 days late. Pull one milestone forward this week.',
      ],
      summaryPrefix: 'Summary',
    },
    socialProof: {
      kicker: 'SOCIAL PROOF',
      title: 'Used by focused teams and independent builders.',
      logos: ['Northline Studio', 'Delta Product Lab', 'Axiom Learning'],
      quotes: [
        {
          quote: 'LifeCourse changed our weekly review from storytelling to evidence.',
          author: 'Product lead, B2B SaaS team',
        },
        {
          quote: 'The deviation view is the first time I can see schedule risk early enough to act.',
          author: 'Founder, mobile education app',
        },
      ],
    },
    finalCta: {
      kicker: 'FINAL CTA',
      title: 'Track your route with less noise.',
      lead: 'Start from one goal. Keep the trajectory visible every week.',
      button: 'Get early access',
      qrTitle: 'Join beta group',
      qrHint: 'Scan to get beta builds and release updates',
      qrAlt: 'LifeCourse beta group QR code',
    },
    languageLabel: 'Language',
  },
} as const

export default function LandingPage() {
  const [locale, setLocale] = useState<Locale>(() => getStoredLocale())
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const showcaseImageByKey = {
    aiReview: new URL('../assets/demo/aiReview.PNG', import.meta.url).href,
    detail: new URL('../assets/demo/detail.PNG', import.meta.url).href,
    list: new URL('../assets/demo/list.PNG', import.meta.url).href,
    subProgress: new URL('../assets/demo/subProgress.PNG', import.meta.url).href,
  } as const

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const t = useMemo(() => contentByLocale[locale], [locale])

  const showcaseMarqueeItems = useMemo(() => {
    const items = t.showcase.items
    return reduceMotion ? [...items] : [...items, ...items]
  }, [reduceMotion, t.showcase.items])

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale)
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
  }

  return (
    <div className="lp-page">
      <header className="lp-header">
        <div className="lp-container lp-header-inner">
          <div className="lp-brand">
            <img src={lifeCourseIcon} alt="LifeCourse 图标" className="lp-brand-icon" />
            <span>LifeCourse</span>
          </div>
          <div className="lp-header-tools">
            <nav className="lp-nav">
              <Link to="/privacy">{t.nav.privacy}</Link>
              <Link to="/terms">{t.nav.terms}</Link>
              <a href={TESTFLIGHT_URL} target="_blank" rel="noreferrer" className="lp-nav-cta">
                {t.nav.cta}
              </a>
            </nav>
            <div className="lp-lang-switch" role="group" aria-label={t.languageLabel}>
              <button
                type="button"
                className={`lp-lang-btn ${locale === 'zh' ? 'is-active' : ''}`}
                onClick={() => handleLocaleChange('zh')}
              >
                中文
              </button>
              <button
                type="button"
                className={`lp-lang-btn ${locale === 'en' ? 'is-active' : ''}`}
                onClick={() => handleLocaleChange('en')}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="lp-hero">
          <div className="lp-container lp-hero-grid">
            <div className="lp-hero-copy">
              <p className="lp-kicker">{t.hero.kicker}</p>
              <h1>{t.hero.title}</h1>
              <p className="lp-lead">{t.hero.lead}</p>
              <div className="lp-quick-meta">
                {t.hero.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="lp-actions">
                <a href={TESTFLIGHT_URL} target="_blank" rel="noreferrer" className="lp-btn lp-btn-primary">
                  {t.hero.primaryCta}
                </a>
              </div>
            </div>

            <article className="lp-product-shot lp-product-icon" aria-label={t.hero.productAria}>
              <img src={lifeCourseIcon} alt="LifeCourse 大图标" className="lp-hero-app-icon" />
            </article>
          </div>
        </section>

        <section id="features" className="lp-section">
          <div className="lp-container lp-section-grid">
            <div className="lp-section-intro">
              <p className="lp-kicker">{t.features.kicker}</p>
              <h2>{t.features.title}</h2>
            </div>
            <div className="lp-feature-list">
              {t.features.list.map((feature) => (
                <article key={feature.title} className="lp-feature-item">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <div className="lp-feature-metric">
                    <span>{feature.metricLabel}</span>
                    <strong>{feature.metricValue}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="showcase" className="lp-section">
          <div className="lp-container lp-section-grid">
            <div className="lp-section-intro">
              <p className="lp-kicker">{t.showcase.kicker}</p>
              <h2>{t.showcase.title}</h2>
            </div>
            <div className="lp-showcase-carousel" role="region" aria-label={t.showcase.carouselAria}>
              {!reduceMotion ? (
                <p className="lp-showcase-sr-only">
                  {t.showcase.items.map((item) => `${item.title}：${item.description}`).join('。')}
                </p>
              ) : null}
              <div
                className={`lp-showcase-marquee ${reduceMotion ? 'is-static-mode' : ''}`}
                aria-hidden={reduceMotion ? undefined : true}
              >
                <div className={`lp-showcase-marquee-track ${reduceMotion ? 'is-static' : ''}`}>
                  {showcaseMarqueeItems.map((item, index) => (
                    <article key={`${item.key}-${index}`} className="lp-showcase-card">
                      <div className="lp-showcase-card-frame">
                        <img
                          src={showcaseImageByKey[item.key]}
                          alt={reduceMotion ? item.alt : ''}
                          className="lp-showcase-card-image"
                          loading={index < 4 ? 'eager' : 'lazy'}
                        />
                      </div>
                      <div className="lp-showcase-card-copy">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="lp-section">
          <div className="lp-container lp-section-grid">
            <div className="lp-section-intro">
              <p className="lp-kicker">{t.howItWorks.kicker}</p>
              <h2>{t.howItWorks.title}</h2>
            </div>
            <ol className="lp-step-list">
              {t.howItWorks.steps.map((step, index) => (
                <li key={step.title} className="lp-step-item">
                  <span className="lp-step-index">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="insights" className="lp-section">
          <div className="lp-container lp-section-grid">
            <div className="lp-section-intro">
              <p className="lp-kicker">{t.insights.kicker}</p>
              <h2>{t.insights.title}</h2>
            </div>
            <div className="lp-insight-list">
              {t.insights.list.map((insight, index) => (
                <article key={insight} className="lp-insight-item">
                  <span>
                    {t.insights.summaryPrefix} {index + 1}
                  </span>
                  <p>{insight}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="lp-section">
          <div className="lp-container">
            <div className="lp-cta">
              <div>
                <p className="lp-kicker">{t.finalCta.kicker}</p>
                <h2>{t.finalCta.title}</h2>
                <p>{t.finalCta.lead}</p>
              </div>
              {locale === 'zh' ? (
                <div className="lp-cta-side">
                  <div className="lp-beta-qr">
                    <div className="lp-beta-qr-copy">
                      <strong>{t.finalCta.qrTitle}</strong>
                      <span>{t.finalCta.qrHint}</span>
                    </div>
                    <a href={TESTFLIGHT_URL} target="_blank" rel="noreferrer" className="lp-beta-qr-trigger" aria-label={t.finalCta.qrAlt}>
                      <img src={testGroupQRCode} alt={t.finalCta.qrAlt} className="lp-beta-qr-image" />
                      <span className="lp-beta-qr-preview" aria-hidden>
                        <img src={testGroupQRCode} alt="" />
                      </span>
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
