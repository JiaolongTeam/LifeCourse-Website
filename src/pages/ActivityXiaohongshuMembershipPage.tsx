import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import rcIdExample from '../assets/activity/rc_id_example.png'
import '../styles/privacy.css'
import '../styles/activities.css'

const ACTIVITY_ID = 'xiaohongshu-membership'

const XIAOHONGSHU_ACTIVITY_API_PATH = 'https://www.eventline.cc/api/lifeCourse/xiaohongshu-activity'

function resolveXiaohongshuActivitySubmitUrl(): string {
  const explicit = import.meta.env.VITE_API_BASE_URL
  if (typeof explicit === 'string' && explicit.trim() !== '') {
    return `${explicit.replace(/\/$/, '')}${XIAOHONGSHU_ACTIVITY_API_PATH}`
  }
  if (import.meta.env.DEV) {
    return `http://localhost:8080${XIAOHONGSHU_ACTIVITY_API_PATH}`
  }
  return XIAOHONGSHU_ACTIVITY_API_PATH
}

const rewardRows = [
  { condition: '首次发布笔记，并保留至少 24 小时', reward: '14 天会员' },
  { condition: '笔记满 50 赞', reward: '1 个月会员' },
  { condition: '笔记满 100 赞', reward: '3 个月会员' },
  { condition: '笔记满 500 赞', reward: '1 年会员' },
  { condition: '笔记满 1000 赞', reward: '永久会员' },
] as const

const labels = {
  backLink: '← 活动列表',
  kicker: '活动详情',
  title: '发小红书送会员',
  intro: '按以下步骤在小红书发布笔记，满足规则后即可提交参与。我们将在审核通过后为你发放会员权益。',
  sectionRulesAndFlow: '参与条件与流程',
  rule1: '笔记正文或标题中须提及「人生航线」App，内容需真实、合规，不得虚假宣传。',
  rule2: '笔记自发布时起至少保留 24 小时；提前删除或修改导致不符合要求，视为放弃资格。',
  sectionRewards: '奖励阶梯',
  rewardColCondition: '条件',
  rewardColBenefit: '会员权益',
  step1: '打开小红书，撰写与「人生航线」相关的真实使用体验或介绍。',
  step2: '发布笔记，确认已包含「人生航线」，并保存笔记链接。',
  step3: '保留笔记至少 24 小时后，回到本页提交笔记链接。',
  formTitle: '提交参与活动',
  labelRcId: '用户ID',
  rcIdExampleAlt: '人生航线 App 付费页「恢复购买」界面示意',
  rcIdHint: '打开付费页，点击「恢复购买」按钮自动拷贝用户ID，复制进表单内。',
  rcIdPlaceholder: '例如：$RCxxxxxxxx',
  labelUrl: '小红书笔记链接',
  urlPlaceholder: 'https://www.xiaohongshu.com/...',
  checkLabel: '我已确认笔记包含「人生航线」，并将至少保留 24 小时。',
  submit: '提交活动',
  submitting: '提交中…',
  errRcId: '请填写用户ID。',
  errRcIdPrefix: '用户ID须以「$RC」开头，请从付费页「恢复购买」重新复制。',
  errUrl: '请填写有效的小红书笔记链接（需以 http 开头）。',
  errCheck: '请勾选确认参与条件。',
  successRemote: '提交成功，我们会在24小时内完成审核。',
  successClipboardDetail: '如未自动复制，可手动复制下方文本。',
  errSubmitCopied: '提交失败，摘要已复制到剪贴板，可联系管理员或稍后重试。',
  errSubmit: '提交失败，请稍后重试或联系管理员。',
} as const

function buildSummary(rcId: string, noteUrl: string) {
  return [
    '【人生航线 · 小红书活动提交】',
    `活动：发小红书送会员（${ACTIVITY_ID}）`,
    `用户ID：${rcId}`,
    `小红书链接：${noteUrl}`,
    `提交时间：${new Date().toLocaleString('zh-CN')}`,
  ].join('\n')
}

export default function ActivityXiaohongshuMembershipPage() {
  const [rcId, setRcId] = useState('')
  const [noteUrl, setNoteUrl] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [busy, setBusy] = useState(false)
  const [feedback, setFeedback] = useState<{ kind: 'success' | 'error'; message: string } | null>(null)
  const [copyText, setCopyText] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFeedback(null)
    setCopyText(null)

    const trimmedRc = rcId.trim()
    if (!trimmedRc) {
      setFeedback({ kind: 'error', message: labels.errRcId })
      return
    }
    if (!trimmedRc.startsWith('$RC')) {
      setFeedback({ kind: 'error', message: labels.errRcIdPrefix })
      return
    }

    const trimmed = noteUrl.trim()
    if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) {
      setFeedback({ kind: 'error', message: labels.errUrl })
      return
    }
    if (!confirmed) {
      setFeedback({ kind: 'error', message: labels.errCheck })
      return
    }

    const submitUrl = resolveXiaohongshuActivitySubmitUrl()
    const summary = buildSummary(trimmedRc, trimmed)

    setBusy(true)
    try {
      const res = await fetch(submitUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rc_id: trimmedRc,
          xiaohongshu_link: trimmed,
        }),
      })
      if (!res.ok) {
        const detail = await res.text().catch(() => '')
        throw new Error(detail || `HTTP ${res.status}`)
      }
      setFeedback({ kind: 'success', message: labels.successRemote })
    } catch {
      let copied = false
      try {
        await navigator.clipboard.writeText(summary)
        copied = true
      } catch {
        copied = false
      }
      setCopyText(copied ? null : summary)
      setFeedback({
        kind: 'error',
        message: copied ? labels.errSubmitCopied : labels.errSubmit,
      })
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="pp-page">
      <main className="pp-container">
        <header className="pp-topbar">
          <div className="pp-topbar-inner">
            <Link className="pp-back" to="/activities">
              {labels.backLink}
            </Link>
          </div>
        </header>

        <div className="act-detail-layout">
          <aside className="act-detail-aside">
            <p className="pp-kicker">{labels.kicker}</p>
            <h1>{labels.title}</h1>
            <p className="pp-intro">{labels.intro}</p>
          </aside>

          <div className="act-detail-body">
            <div className="act-rule-block">
              <h2>{labels.sectionRulesAndFlow}</h2>
              <ul className="act-rule-list">
                <li>{labels.rule1}</li>
                <li>{labels.rule2}</li>
              </ul>
              <ol className="act-guide-steps act-guide-steps--after-rules">
                <li>
                  <span className="act-step-num">01</span>
                  <span>{labels.step1}</span>
                </li>
                <li>
                  <span className="act-step-num">02</span>
                  <span>{labels.step2}</span>
                </li>
                <li>
                  <span className="act-step-num">03</span>
                  <span>{labels.step3}</span>
                </li>
              </ol>
            </div>

            <section className="act-rule-block" aria-labelledby="act-section-rewards">
              <h2 id="act-section-rewards">{labels.sectionRewards}</h2>
              <div className="act-table-wrap">
                <table className="act-reward-table">
                  <thead>
                    <tr>
                      <th scope="col">{labels.rewardColCondition}</th>
                      <th scope="col">{labels.rewardColBenefit}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rewardRows.map((row) => (
                      <tr key={row.condition}>
                        <td>{row.condition}</td>
                        <td>{row.reward}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <form className="act-form" onSubmit={handleSubmit} noValidate>
              <h2>{labels.formTitle}</h2>

              <div className="act-field act-field-rcid">
                <div className="act-rc-two-col">
                  <div className="act-rc-col-main">
                    <label htmlFor="act-rc-id">{labels.labelRcId}</label>
                    <p className="act-field-hint">{labels.rcIdHint}</p>
                    <input
                      id="act-rc-id"
                      name="rcId"
                      type="text"
                      autoComplete="off"
                      placeholder={labels.rcIdPlaceholder}
                      value={rcId}
                      onChange={(ev) => setRcId(ev.target.value)}
                    />
                  </div>
                  <figure className="act-rc-example">
                    <img src={rcIdExample} alt={labels.rcIdExampleAlt} loading="lazy" />
                  </figure>
                </div>
              </div>

              <div className="act-field">
                <label htmlFor="act-note-url">{labels.labelUrl}</label>
                <input
                  id="act-note-url"
                  name="xiaohongshu_link"
                  type="url"
                  inputMode="url"
                  autoComplete="url"
                  placeholder={labels.urlPlaceholder}
                  value={noteUrl}
                  onChange={(ev) => setNoteUrl(ev.target.value)}
                />
              </div>

              <label className="act-check">
                <input type="checkbox" checked={confirmed} onChange={(ev) => setConfirmed(ev.target.checked)} />
                <span>{labels.checkLabel}</span>
              </label>

              <div className="act-form-actions">
                <button type="submit" className="act-submit" disabled={busy}>
                  {busy ? labels.submitting : labels.submit}
                </button>
              </div>

              {feedback ? (
                <div className={`act-feedback ${feedback.kind === 'success' ? 'is-success' : 'is-error'}`} role="status">
                  {feedback.message}
                  {copyText ? (
                    <>
                      <p className="act-copy-hint">{labels.successClipboardDetail}</p>
                      <pre className="act-copy-pre">{copyText}</pre>
                    </>
                  ) : null}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
