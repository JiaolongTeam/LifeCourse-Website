const sections = [
  {
    title: '1. 数据收集说明',
    items: [
      '人生航线不会收集、上传或存储任何可识别用户身份的数据。',
      '我们不会收集昵称、头像、联系方式、账号信息等个人资料。',
      '我们不会收集你的目标内容、进度记录、复盘日志等使用内容。',
      '我们不会接入第三方统计、广告追踪或用户画像服务。',
    ],
  },
  {
    title: '2. 本地处理说明',
    items: [
      '与功能相关的数据仅在你的设备本地处理，不会上传到我们的服务器。',
      '我们不会基于用户数据进行分析、营销或商业化处理。',
    ],
  },
  {
    title: '3. AI 功能说明',
    items: [
      'AI 复盘功能仅基于你当前设备内的数据进行结果展示。',
      'AI 输出内容仅作为辅助建议，不构成医学、法律或投资等专业意见。',
      '你可随时删除本地数据并停止使用相关功能。',
    ],
  },
  {
    title: '4. 共享与披露',
    items: [
      '由于我们不收集用户数据，因此不存在向第三方共享、出售或披露用户数据的情形。',
    ],
  },
  {
    title: '5. 权限说明',
    items: [
      '应用仅在必要时申请系统权限（例如通知权限）用于本地提醒。',
      '相关权限可在系统设置中随时关闭，不影响你对隐私数据的控制权。',
    ],
  },
  {
    title: '6. 你的控制权',
    items: [
      '你可以随时删除应用内本地数据或卸载应用。',
      '如未来产品策略发生变化并涉及数据收集，我们会在变更前明确告知并征得你的同意。',
    ],
  },
  {
    title: '7. 未成年人说明',
    items: ['若你是未成年人，请在监护人指导下使用本服务。'],
  },
  {
    title: '8. 政策更新',
    items: ['我们可能根据业务变化或法律要求更新本政策，更新后会在页面显著位置提示。'],
  },
  {
    title: '9. 联系我们',
    items: ['如你对本政策有疑问，请通过应用内「意见反馈」与我们联系。'],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="pp-page">
      <div className="pp-bg-glow pp-bg-glow-a" />
      <div className="pp-bg-glow pp-bg-glow-b" />
      <main className="pp-container">
        <a className="pp-back" href="/">
          ← 返回人生航线
        </a>

        <header className="pp-header">
          <p className="pp-kicker">LifeCourse Privacy</p>
          <h1>隐私政策</h1>
          <p className="pp-meta">更新日期：2026 年 4 月 3 日</p>
          <p className="pp-intro">
            欢迎使用「人生航线」。本应用坚持最小化原则：不收集、不过度处理、不对外共享任何用户个人数据。
          </p>
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
