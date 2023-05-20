import en from './en.json'
import ru from './ru.json'

export enum LanguagesEnum {
  en = 'en',
  ru = 'ru',
}

export type DictionaryList = {
  [key in LanguagesEnum]: { [key: string]: string }
}

type LanguageOptionsType = {
  [key in LanguagesEnum]: string
}

export const dictionaryList: DictionaryList = { en, ru }
export const languageOptions: LanguageOptionsType = {
  en: 'English',
  ru: 'Русский',
}
