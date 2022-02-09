import { QuestionsProvider } from '../contexts/QuestionsContext'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QuestionsProvider>
        <Component {...pageProps} />
      </QuestionsProvider>
    </>
  )
}

export default MyApp
