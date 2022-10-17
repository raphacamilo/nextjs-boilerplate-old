import type { AppProps } from "next/app"
import Head from "next/head"
import GlobalStyle from "styles/global"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="favicon.ico" />
        <meta name="description" content="A simple project starter" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
