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
      <section className='relative pt-[150px] pb-[30px] w-full mx-auto xl:max-w-[1140px] text-[#fff]'>
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
            desc={'我的个人小站, 使用 Docusaurus 构建.'}
            src='/img/projects/chatify.png'
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
            desc='My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files
          and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.'
            src='/img/projects/chatify.png'
            actions={
              <Button onClick={() => window.open('https://kentriversnook.com/optiwise/')}>
                <CgWebsite /> &nbsp;Demo
              </Button>
            }
          />

          <ProjectItem
            name='新基石官网'
            desc='Online code and markdown editor build with react.js. Online Editor which supports html, css, and js
            code with instant view of website. Online markdown editor for building README file which supports GFM,
            Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using
            Local Storage'
            src='/img/projects/chatify.png'
            actions={
              <Button onClick={() => window.open('https://kentriversnook.com/xjs-web/')}>
                <CgWebsite /> &nbsp;Demo
              </Button>
            }
          />
        </div>
      </section>
    </MyLayout>
  )
}
