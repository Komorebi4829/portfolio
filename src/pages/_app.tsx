import AOS from 'aos'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { SessionProvider } from 'next-auth/react'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'

import 'tailwindcss/tailwind.css'
import 'aos/dist/aos.css'
import '@/common/styles/globals.css'
import '@/common/styles/link-icon.css'
import '@/contents/custom.css'

import CommandPalette from '@/common/components/elements/CommandPalette'
import Layout from '@/common/components/layouts'
import Circle from '@/common/components/layouts/background/Circle'
import Particle from '@/common/components/layouts/background/Particle'
import { CommandPaletteProvider } from '@/common/context/CommandPaletteContext'
import { firaCode, jakartaSans, soraSans } from '@/common/styles/fonts'

import defaultSEOConfig from '../../next-seo.config'

const ProgressBar = dynamic(() => import('src/common/components/elements/ProgressBar'), { ssr: false })

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    })
  }, [])

  return (
    <>
      <style jsx global>
        {`
          html {
            --jakartaSans-font: ${jakartaSans.style.fontFamily};
            --soraSans-font: ${soraSans.style.fontFamily};
            --firaCode-font: ${firaCode.style.fontFamily};
          }
        `}
      </style>
      <DefaultSeo {...defaultSEOConfig} />
      <SessionProvider session={session}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <CommandPaletteProvider>
            <Layout>
              <Particle />
              <Circle />
              <CommandPalette />
              <ProgressBar />
              <Component {...pageProps} />
            </Layout>
          </CommandPaletteProvider>
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}

export default App
