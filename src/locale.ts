export type Locale = 'zh' | 'en'

export const LOCALE_STORAGE_KEY = 'lifecourse.locale'

export function getStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'zh'
  const v = window.localStorage.getItem(LOCALE_STORAGE_KEY)
  return v === 'en' ? 'en' : 'zh'
}
