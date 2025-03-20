import { Head, Html, Main, NextScript } from 'next/document'

import { siteMetadata } from '@/contents/siteMetadata'

const { umamiScriptSrc, umamiSiteId } = siteMetadata.analytics

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {umamiScriptSrc && umamiSiteId && (
          <script async defer src={umamiScriptSrc} data-website-id={umamiSiteId}></script>
        )}

        <link rel='apple-touch-icon' sizes='57x57' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/favicon/android-chrome-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
