import { Head, Html, Main, NextScript } from 'next/document'

import { siteMetadata } from '@/contents/siteMetadata'

const { umamiScriptSrc, umamiSiteId, claritySiteId } = siteMetadata.analytics

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {umamiScriptSrc && umamiSiteId && (
          <script async defer src={umamiScriptSrc} data-website-id={umamiSiteId}></script>
        )}
        {claritySiteId && (
          <script
            type='text/javascript'
            dangerouslySetInnerHTML={{
              __html: `
             (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${claritySiteId}");
            `,
            }}
          ></script>
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
