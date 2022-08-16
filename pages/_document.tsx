import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(props: any) {
  return (
    <Html lang="en">
      <Head>
        <script
          defer
          data-domain="jebraat.com"
          src="https://plausible.io/js/plausible.js"
        />
        <link href="/static/icons/favicon.ico" rel="shortcut icon" />
        <link href="/static/icons/site.webmanifest" rel="manifest" />
        <link
          href="/static/icons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/icons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/icons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#4a9885"
          href="/static/icons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta name="yandex-verification" content="0de62ff02647d263" />
        <meta
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          name="robots"
        />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
