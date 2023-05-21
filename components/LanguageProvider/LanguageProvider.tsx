import React, { useState, createContext, useContext, useEffect } from 'react'

import { languageOptions, dictionaryList } from './languages'
import type { LanguagesEnum } from './languages'

type LanguageContextType = {
  userLanguage: keyof typeof LanguagesEnum
  dictionary: typeof dictionaryList.en
  userLanguageChange: (selected: keyof typeof LanguagesEnum) => void
}

export const LanguageContext = createContext<LanguageContextType>({
  userLanguage: 'en',
  dictionary: dictionaryList.en,
  userLanguageChange: () => {},
})

const localStorageKey = 'userLanguage';

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [userLanguage, setUserLanguage] = useState<keyof typeof LanguagesEnum>('en')

  useEffect(() => {
    setUserLanguage(
      window.localStorage.getItem(localStorageKey) as keyof typeof LanguagesEnum || 'en'
    )
  }, [])

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected: keyof typeof LanguagesEnum) => {
      const newLanguage = languageOptions[selected] ? selected : 'en'
      setUserLanguage(newLanguage)
      window.localStorage.setItem(localStorageKey, newLanguage)
    },
  }

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  )
}

// get text according to id & current language
export function Text ({ tid }: { tid: string }): string {
  const languageContext = useContext(LanguageContext)

  return languageContext.dictionary[tid] || tid
}
