import { QuestionsProvider } from '../contexts/QuestionsContext'
import { ThemeProvider } from '@mui/material/styles';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import axios from 'axios';
import theme from '../src/theme';

axios.defaults.baseURL = 'https://enneagram-server.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:3002';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QuestionsProvider>
          <Component {...pageProps} />
        </QuestionsProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
