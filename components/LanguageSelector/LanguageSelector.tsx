import React, { useContext } from 'react'

// TODO: use separate components for language selector
import { languageOptions } from '../LanguageProvider/languages'
import type { LanguagesEnum } from '../LanguageProvider/languages'
import { LanguageContext } from '../../components'

export const LanguageSelector = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext)

  const handleLanguageChange = (e: React.FormEvent<HTMLSelectElement>) => {
    userLanguageChange(e.currentTarget.value as keyof typeof LanguagesEnum)
  }

  return (
    <select
      onChange={handleLanguageChange}
      value={userLanguage}
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select>
  )
}
