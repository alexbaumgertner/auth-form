import type { AppProps } from 'next/app'

import { LanguageProvider, LanguageSelector } from '../components'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Head>
        <title>React Login form</title>
        <meta name="description" content="Login form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
