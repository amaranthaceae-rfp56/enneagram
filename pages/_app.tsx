import { QuestionsProvider } from '../contexts/QuestionsContext'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import axios from 'axios';

axios.defaults.baseURL = 'https://enneagram-server.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:3002';

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
