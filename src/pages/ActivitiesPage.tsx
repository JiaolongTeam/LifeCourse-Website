import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { LOCALE_STORAGE_KEY, type Locale, getStoredLocale } from '../locale'
import '../styles/privacy.css'
import '../styles/activities.css'

const copy = {
  zh: {
    backLink: '← 返回首页',
    languageLabel: '语言',
    kicker: '活动福利',
    title: '活动福利',
    lead: '参与官方活动，获取会员等福利。活动规则以页面说明为准。',
    card1: {
      title: '发小红书送会员',
      description: '按规则发布小红书笔记，审核通过后可兑换会员权益。',
      meta: '进行中 · 点击查看详情',
    },
  },
  en: {
    backLink: '← Home',
    languageLabel: 'Language',
    kicker: 'Perks',
    title: 'Campaigns & perks',
    lead: 'Join official campaigns for membership and other rewards. Rules on each page apply.',
    card1: {
      title: 'RED (Xiaohongshu) post for membership',
      description: 'Publish a note following the rules. Membership may be granted after review.',
      meta: 'Open · View details',
    },
  },
} as const

export default function ActivitiesPage() {
  const [locale, setLocale] = useState<Locale>(() => getStoredLocale())

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === LOCALE_STORAGE_KEY && (e.newValue === 'zh' || e.newValue === 'en')) {
        setLocale(e.newValue)
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const t = useMemo(() => copy[locale], [locale])

  const handleLocaleChange = (next: Locale) => {
    setLocale(next)
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next)
  }

  return (
    <div className="pp-page">
      <main className="pp-container">
        <header className="pp-topbar">
          <div className="pp-topbar-inner">
            <Link className="pp-back" to="/">
              {t.backLink}
            </Link>
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
        </header>

        <div className="act-main">
          <p className="pp-kicker">{t.kicker}</p>
          <h1 className="act-page-title">{t.title}</h1>
          <p className="act-page-lead">{t.lead}</p>

          <div className="act-grid">
            <Link className="act-card" to="/activities/xiaohongshu-membership">
              <p className="act-card-kicker">Campaign</p>
              <h2>{t.card1.title}</h2>
              <p>{t.card1.description}</p>
              <span className="act-card-meta">{t.card1.meta}</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
