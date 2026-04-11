import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { LOCALE_STORAGE_KEY, type Locale, getStoredLocale } from '../locale'
import { termsByLocale } from '../content/legalLocale'

export default function TermsPage() {
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

  const t = useMemo(() => termsByLocale[locale], [locale])

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

        <div className="pp-layout">
          <aside className="pp-sidebar">
            <p className="pp-kicker">{t.kicker}</p>
            <h1>{t.title}</h1>
            <p className="pp-meta">{t.meta}</p>
            <p className="pp-intro">{t.intro}</p>
          </aside>

          <section className="pp-content">
            {t.sections.map((section) => (
              <article key={section.title} className="pp-section">
                <h2>{section.title}</h2>
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}
