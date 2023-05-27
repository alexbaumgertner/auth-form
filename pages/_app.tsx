import type { AppProps } from 'next/app'

import { LanguageProvider, LanguageSelector } from '../components'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <div className="app">
        <div className="language-selector">
          <LanguageSelector />
        </div>
        <Component {...pageProps} />
      </div>

    </LanguageProvider>
  )
}

export default MyApp
