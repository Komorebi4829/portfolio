import React, { useEffect } from 'react'
import MyLayout from '@site/src/theme/MyLayout'

export default function About() {
  return (
    <MyLayout maxWidth={1280}>
      <section className='relative pt-[150px] pb-[30px] w-full mx-auto xl:max-w-[1140px]'>
        <div>
          <div>
            <h1 className='text-4xl pb-2xl'>
              About Me
            </h1>
            <div>
              <p>Hello, I am <span className='text-purple'>Kent River</span></p>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </MyLayout>
  )
}
