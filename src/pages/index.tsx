import React, { useEffect } from 'react'
import Layout from '@theme/Layout'
import HomepageHero from '@site/src/components/HomepageHero'
import MyLayout from '@site/src/theme/MyLayout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Head from '@docusaurus/Head'

function Home() {
  const { i18n } = useDocusaurusContext()
  const lang = i18n.currentLocale

  const isZhCN = lang === 'zh-CN'
  const description = isZhCN
    ? 'Kent River的个人小站 - 全栈Web开发者,熟悉JavaScript/TypeScript、Node.js、Python、Vue、React等技术。热爱编程,擅长全栈开发,曾开发多个全栈和爬虫项目。探索Kent的作品集与技术博客。'
    : "Kent River's personal website - Full-stack Web Developer, master of JavaScript/TypeScript, Node.js, Python, Vue, React. Enjoys coding, skilled in full-stack development, has developed multiple full-stack and crawler projects. Explore Kent's work and technology blog."

  return (
    <MyLayout description='Description will go into a meta tag in <head />' maxWidth={1280}>
      <Head>
        <meta name='description' content={description} />
      </Head>
      <main className='container-wrapper'>
        <HomepageHero></HomepageHero>
      </main>
    </MyLayout>
  )
}

export default Home
