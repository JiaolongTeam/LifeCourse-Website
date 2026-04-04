const sections = [
  {
    title: '1. 协议适用范围',
    items: ['本协议适用于你对「人生航线」应用及相关服务的访问与使用。'],
  },
  {
    title: '2. 账号与使用',
    items: [
      '你应提供真实、准确、完整的信息，并妥善保管账号凭证。',
      '你对账号下发生的行为承担相应责任。',
      '你不得以任何方式干扰、破坏服务的正常运行。',
    ],
  },
  {
    title: '3. 服务内容',
    items: [
      '人生航线提供目标拆解、进度跟踪、偏差分析、AI 复盘等功能。',
      '我们有权基于运营需要对服务内容进行更新、调整或优化。',
    ],
  },
  {
    title: '4. 用户行为规范',
    items: [
      '你不得发布违法违规、侵权、恶意或误导性内容。',
      '你不得利用本服务进行任何危害网络安全或损害他人权益的行为。',
    ],
  },
  {
    title: '5. 知识产权',
    items: [
      '本应用及相关内容的知识产权归我们或相关权利人所有。',
      '未经授权，你不得复制、修改、传播、反向工程本服务相关内容。',
    ],
  },
  {
    title: '6. AI 功能免责说明',
    items: [
      'AI 复盘与建议仅作为辅助信息，不能替代专业意见或个人判断。',
      '你应结合自身实际情况谨慎决策，并自行承担相关后果。',
    ],
  },
  {
    title: '7. 服务变更、中断与终止',
    items: [
      '在必要情况下，我们可对服务进行维护、升级或暂停。',
      '如你违反本协议，我们有权限制或终止对你的服务。',
    ],
  },
  {
    title: '8. 责任限制',
    items: [
      '在法律允许范围内，我们不对不可抗力、网络故障等造成的损失承担责任。',
      '因你自身原因或第三方原因导致的损失，由你自行承担。',
    ],
  },
  {
    title: '9. 协议更新与生效',
    items: [
      '我们可能根据法律法规或业务变化更新本协议，更新后将在应用内公示。',
      '你继续使用服务即视为接受更新后的协议内容。',
    ],
  },
  {
    title: '10. 联系方式',
    items: ['如有疑问，请通过应用内「意见反馈」联系我们。'],
  },
]

export default function TermsPage() {
  return (
    <div className="pp-page">
      <div className="pp-bg-glow pp-bg-glow-a" />
      <div className="pp-bg-glow pp-bg-glow-b" />
      <main className="pp-container">
        <a className="pp-back" href="/">
          ← 返回人生航线
        </a>

        <header className="pp-header">
          <p className="pp-kicker">LifeCourse Terms</p>
          <h1>用户协议</h1>
          <p className="pp-meta">更新日期：2026 年 4 月 3 日</p>
          <p className="pp-intro">请你在使用本服务前认真阅读并理解本协议条款。</p>
        </header>

        <section className="pp-card">
          {sections.map((section) => (
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
      </main>
    </div>
  )
}
