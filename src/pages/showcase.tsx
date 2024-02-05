import React, { useEffect } from 'react'
import MyLayout from '@site/src/theme/MyLayout'
import styles from './showcase.module.css'
import Button from '@site/src/components/Button'
import { CgWebsite } from 'react-icons/cg'
import { BsGithub } from 'react-icons/bs'
import { useHistory } from '@docusaurus/router'
import ProjectItem from '@site/src/components/ProjectItem'
import Translate from '@docusaurus/Translate'

export default function Showcase() {
  const history = useHistory()
  return (
    <MyLayout maxWidth={1280}>
      <section className='relative pt-[150px] pb-[30px] w-full mx-auto xl:max-w-[1140px]'>
        <div className=''>
          <div className='text-center mb-10'>
            <h1 className='text-4xl'>
              <Translate id='page.showcase.some'></Translate>
              <strong className='text-purple'>
                <Translate id='page.showcase.showcases'>项目展示</Translate>
              </strong>
            </h1>
            <p className='py-4'>
              <Translate id='page.showcase.sentence1'>下面是一些项目展示</Translate>
            </p>
          </div>
        </div>
        <div className='flex justify-center flex-wrap pb-4 sm:px-12 md:px-12 lg:px-0'>
          <ProjectItem
            name='Portfolio'
            // TODO i18n?
            desc={'我的个人小站, 使用 Docusaurus 构建.'}
            src='/img/projects/portfolio.png'
            actions={
              <>
                {/* <Button onClick={() => history.push('/')}>
                  <CgWebsite /> &nbsp;Demo
                </Button> */}
                <Button onClick={() => window.open('https://github.com/Komorebi4829/portfolio')}>
                  <BsGithub /> &nbsp;Github
                </Button>
              </>
            }
          />

          <ProjectItem
            name='Optiwise'
            desc={'基于Next.js搭建的静态企业官网'}
            src='/img/projects/optiwise.png'
            actions={
              <Button onClick={() => window.open('https://showcase.kentriversnook.com/optiwise/')}>
                <CgWebsite /> &nbsp;Demo
              </Button>
            }
          />

          <ProjectItem
            name='新基石官网'
            desc='一个Web3基金会的官网, 技术栈: Flask + React.js'
            src='/img/projects/xjs-web.png'
            actions={
              <Button onClick={() => window.open('https://showcase.kentriversnook.com/xjs-web/')}>
                <CgWebsite /> &nbsp;Demo
              </Button>
            }
          />
        </div>
      </section>
    </MyLayout>
  )
}
