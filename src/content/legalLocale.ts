import type { Locale } from '../locale'

export type LegalSection = {
  title: string
  items: string[]
}

export type PrivacyPageCopy = {
  backLink: string
  languageLabel: string
  kicker: string
  title: string
  meta: string
  intro: string
  sections: LegalSection[]
}

export type TermsPageCopy = {
  backLink: string
  languageLabel: string
  kicker: string
  title: string
  meta: string
  intro: string
  sections: LegalSection[]
}

export const privacyByLocale: Record<Locale, PrivacyPageCopy> = {
  zh: {
    backLink: '返回 LifeCourse',
    languageLabel: '语言',
    kicker: 'LEGAL / PRIVACY',
    title: '隐私政策',
    meta: '更新日期：2026 年 4 月 3 日',
    intro:
      '欢迎使用「人生航线」。本应用坚持最小化原则：不收集、不过度处理、不对外共享任何用户个人数据。',
    sections: [
      {
        title: '1. 数据处理原则',
        items: [
          '人生航线不会收集、上传或存储任何可识别用户身份的数据。',
          '我们不会收集昵称、头像、联系方式、账号信息等个人资料。',
          '我们不会收集你的目标内容、进度记录、复盘日志等使用内容。',
          '我们不会接入第三方统计、广告追踪或用户画像服务。',
          '与功能相关的数据仅在你的设备本地处理，不会上传到我们的服务器。',
          '我们不会基于用户数据进行分析、营销或商业化处理。',
        ],
      },
      {
        title: '2. AI 与权限说明',
        items: [
          'AI 复盘功能仅基于你当前设备内的数据进行结果展示。',
          'AI 输出内容仅作为辅助建议，不构成医学、法律或投资等专业意见。',
          '你可随时删除本地数据并停止使用相关功能。',
          '由于我们不收集用户数据，因此不存在向第三方共享、出售或披露用户数据的情形。',
          '应用仅在必要时申请系统权限（例如通知权限）用于本地提醒。',
          '相关权限可在系统设置中随时关闭，不影响你对隐私数据的控制权。',
        ],
      },
      {
        title: '3. 你的控制权',
        items: [
          '你可以随时删除应用内本地数据或卸载应用。',
          '如未来产品策略发生变化并涉及数据收集，我们会在变更前明确告知并征得你的同意。',
        ],
      },
      {
        title: '4. 其他说明',
        items: [
          '若你是未成年人，请在监护人指导下使用本服务。',
          '我们可能根据业务变化或法律要求更新本政策，更新后会在页面显著位置提示。',
          '如你对本政策有疑问，请通过应用内「意见反馈」与我们联系。',
        ],
      },
    ],
  },
  en: {
    backLink: 'Back to LifeCourse',
    languageLabel: 'Language',
    kicker: 'LEGAL / PRIVACY',
    title: 'Privacy Policy',
    meta: 'Last updated: April 3, 2026',
    intro:
      'Welcome to LifeCourse (「人生航线」). This app follows a minimization approach: we do not collect, over-process, or share your personal data with third parties.',
    sections: [
      {
        title: '1. Data handling principles',
        items: [
          'LifeCourse does not collect, upload, or store any data that can identify you personally.',
          'We do not collect nicknames, avatars, contact details, account credentials, or similar profile information.',
          'We do not collect your goals, progress logs, review entries, or other usage content.',
          'We do not integrate third-party analytics, advertising trackers, or user profiling services.',
          'Feature-related data is processed only on your device and is not uploaded to our servers.',
          'We do not analyze, market, or commercialize user data.',
        ],
      },
      {
        title: '2. AI and permissions',
        items: [
          'AI review features display results using data stored on your current device only.',
          'AI output is for assistance only and does not constitute medical, legal, investment, or other professional advice.',
          'You may delete local data and stop using related features at any time.',
          'Because we do not collect user data, we do not share, sell, or disclose user data to third parties.',
          'The app requests system permissions only when necessary (for example, notifications for local reminders).',
          'You can turn permissions off in system settings at any time without losing control over your privacy.',
        ],
      },
      {
        title: '3. Your control',
        items: [
          'You may delete in-app local data or uninstall the app at any time.',
          'If our product policy changes in ways that involve data collection, we will inform you clearly in advance and obtain your consent.',
        ],
      },
      {
        title: '4. Other',
        items: [
          'If you are a minor, please use this service under the guidance of a parent or guardian.',
          'We may update this policy for business or legal reasons; updates will be highlighted on this page.',
          'If you have questions about this policy, contact us via in-app Feedback.',
        ],
      },
    ],
  },
}

export const termsByLocale: Record<Locale, TermsPageCopy> = {
  zh: {
    backLink: '返回 LifeCourse',
    languageLabel: '语言',
    kicker: 'LEGAL / TERMS',
    title: '用户协议',
    meta: '更新日期：2026 年 4 月 3 日',
    intro: '请你在使用本服务前认真阅读并理解本协议条款。',
    sections: [
      {
        title: '1. 适用范围与服务内容',
        items: [
          '本协议适用于你对「人生航线」应用及相关服务的访问与使用。',
          '人生航线提供目标拆解、进度跟踪、偏差分析、AI 复盘等功能。',
          '我们有权基于运营需要对服务内容进行更新、调整或优化。',
        ],
      },
      {
        title: '2. 账号与使用规范',
        items: [
          '你应提供真实、准确、完整的信息，并妥善保管账号凭证。',
          '你对账号下发生的行为承担相应责任。',
          '你不得以任何方式干扰、破坏服务的正常运行。',
          '你不得发布违法违规、侵权、恶意或误导性内容。',
          '你不得利用本服务进行任何危害网络安全或损害他人权益的行为。',
        ],
      },
      {
        title: '3. 知识产权',
        items: [
          '本应用及相关内容的知识产权归我们或相关权利人所有。',
          '未经授权，你不得复制、修改、传播、反向工程本服务相关内容。',
        ],
      },
      {
        title: '4. 免责与责任限制',
        items: [
          'AI 复盘与建议仅作为辅助信息，不能替代专业意见或个人判断。',
          '你应结合自身实际情况谨慎决策，并自行承担相关后果。',
          '在必要情况下，我们可对服务进行维护、升级或暂停。',
          '如你违反本协议，我们有权限制或终止对你的服务。',
          '在法律允许范围内，我们不对不可抗力、网络故障等造成的损失承担责任。',
          '因你自身原因或第三方原因导致的损失，由你自行承担。',
        ],
      },
      {
        title: '5. 协议更新与联系',
        items: [
          '我们可能根据法律法规或业务变化更新本协议，更新后将在应用内公示。',
          '你继续使用服务即视为接受更新后的协议内容。',
          '如有疑问，请通过应用内「意见反馈」联系我们。',
        ],
      },
    ],
  },
  en: {
    backLink: 'Back to LifeCourse',
    languageLabel: 'Language',
    kicker: 'LEGAL / TERMS',
    title: 'Terms of Service',
    meta: 'Last updated: April 3, 2026',
    intro: 'Please read and understand these terms before using the service.',
    sections: [
      {
        title: '1. Scope and services',
        items: [
          'These terms apply to your access to and use of the LifeCourse app (「人生航线」) and related services.',
          'LifeCourse provides goal breakdown, progress tracking, deviation analysis, AI review, and related features.',
          'We may update, adjust, or optimize service content as needed for operations.',
        ],
      },
      {
        title: '2. Account and acceptable use',
        items: [
          'You should provide accurate, complete information and keep account credentials secure where applicable.',
          'You are responsible for activity that occurs under your account.',
          'You must not interfere with or disrupt the normal operation of the service.',
          'You must not publish illegal, infringing, malicious, or misleading content.',
          'You must not use the service in any way that harms network security or others’ rights.',
        ],
      },
      {
        title: '3. Intellectual property',
        items: [
          'Intellectual property in the app and related content belongs to us or the respective rights holders.',
          'Without authorization, you may not copy, modify, distribute, or reverse engineer related content.',
        ],
      },
      {
        title: '4. Disclaimers and limitation of liability',
        items: [
          'AI reviews and suggestions are for reference only and do not replace professional advice or your own judgment.',
          'You should make decisions carefully based on your situation and bear the consequences.',
          'We may maintain, upgrade, or suspend the service when necessary.',
          'If you breach these terms, we may restrict or terminate your access.',
          'To the extent permitted by law, we are not liable for losses caused by force majeure, network failures, and similar events.',
          'Losses caused by you or third parties are borne by you.',
        ],
      },
      {
        title: '5. Updates and contact',
        items: [
          'We may update these terms as required by law or business changes; updates will be shown in the app.',
          'Continued use constitutes acceptance of the updated terms.',
          'For questions, contact us via in-app Feedback.',
        ],
      },
    ],
  },
}
