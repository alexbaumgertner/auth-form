import en from './en.json'
import ru from './ru.json'

export type TranslatesKeysType = keyof typeof en

export enum LanguagesEnum {
  en = 'en',
  ru = 'ru',
}

export type DictionaryList = {
  [key in LanguagesEnum]: Record<TranslatesKeysType, string>
}

type LanguageOptionsType = {
  [key in LanguagesEnum]: string
}

export const dictionaryList: DictionaryList = { en, ru }

export const languageOptions: LanguageOptionsType = {
  en: 'English',
  ru: 'Русский',
}
