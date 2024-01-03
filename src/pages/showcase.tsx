import React, { useEffect } from 'react'
import MyLayout from '@site/src/theme/MyLayout'
import styles from './showcase.module.css'

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
          <div className='py-[50px] px-[25px] h-auto'>
            <div className={styles['project-item']}>
              
            </div>
          </div>
        </div>
      </section>
    </MyLayout>
  )
}
