import React, { useEffect } from 'react'
import MyLayout from '@site/src/theme/MyLayout'
import styles from './showcase.module.css'
import Button from '@site/src/components/Button'
import { CgWebsite } from 'react-icons/cg'
import { BsGithub } from 'react-icons/bs'

export default function Showcase() {
  return (
    <MyLayout maxWidth={1280}>
      <section className='relative pt-[150px] pb-[30px] w-full mx-auto xl:max-w-[1140px] text-[#fff]'>
        <div className=''>
          <div className='text-center mb-10'>
            <h1 className='text-4xl'>
              Some <strong className='text-purple'>Showcases</strong>
            </h1>
            <p className='py-4'>Here are some projects I want to show you.</p>
          </div>
        </div>
        <div className='flex justify-center flex-wrap pb-4'>
          <div className={styles['project-item']}>
            <div className={styles['item-view']}>
              <img className='max-w-full h-auto' src='/img/projects/chatify.png' alt='' />
              <div className={styles['item-body']}>
                <h5>Chatify</h5>
                <p>
                  Personal Chat Room or Workspace to share resources and hangout with friends build with react.js,
                  Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as
                  well as supports reactions on messages.
                </p>
                <Button onClick={() => console.log('click')}>
                  <CgWebsite /> &nbsp;Demo
                </Button>
                <Button onClick={() => console.log('click')}>
                  <BsGithub /> &nbsp;Github
                </Button>
              </div>
            </div>
          </div>
          <div className={styles['project-item']}>
            <div className={styles['item-view']}>
              <img className='max-w-full h-auto' src='/img/projects/blog.png' alt='' />
              <div className={styles['item-body']}>
                <h5>Bits-0f-C0de</h5>
                <p>
                  My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files
                  and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.
                </p>
                <Button onClick={() => console.log('click')}>
                  <CgWebsite /> &nbsp;Demo
                </Button>
                <Button onClick={() => console.log('click')}>
                  <BsGithub /> &nbsp;Github
                </Button>
              </div>
            </div>
          </div>
          <div className={styles['project-item']}>
            <div className={styles['item-view']}>
              <img className='max-w-full h-auto' src='/img/projects/codeEditor.png' alt='' />
              <div className={styles['item-body']}>
                <h5>Editor.io</h5>
                <p>
                  Online code and markdown editor build with react.js. Online Editor which supports html, css, and js
                  code with instant view of website. Online markdown editor for building README file which supports GFM,
                  Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using
                  Local Storage
                </p>
                <Button onClick={() => console.log('click')}>
                  <CgWebsite /> &nbsp;Demo
                </Button>
                <Button onClick={() => console.log('click')}>
                  <BsGithub /> &nbsp;Github
                </Button>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </MyLayout>
  )
}
