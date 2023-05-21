import type { AppProps } from 'next/app'

import { LanguageProvider, LanguageSelector } from '../components'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <div className="language-selector">
        <LanguageSelector />
      </div>
      <Component {...pageProps} />
    </LanguageProvider>
  )
}

export default MyApp
