import React from 'react'
import Type from '@site/src/components/Type'
import HomeMain from '@site/static/img/home-main.svg'

export default function Hero() {
  return (
    <>
    <section className='w-full mx-auto color-[whitesmoke] text-left pt-36 pr-0 pb-8 xl:max-w-[1140px]'>
      <div className='flex flex-wrap'>
        <div className='mt-[50px] w-1/2'>
          <h1 className='mb-[15px] text-4xl pl-[50px]'>
            Hi There!{' '}
            <span role='img' aria-labelledby='wave' className='wave'>
              👋🏻
            </span>
          </h1>
          <h1 className='mb-[15px] text-4xl pl-[50px]'>
            I'M
            <strong className='text-purple'> KENT RIVER</strong>
          </h1>
          <div className='p-[50px] text-purple text-3xl font-semibold'>
            <Type />
          </div>
        </div>
        <div className='pb-[20px] w-1/2'>
          <HomeMain className='max-w-full h-auto max-h-[450px] align-middle'/>
          {/* <img src={HomeMain} alt='home image' className='max-w-full h-auto max-h-[450px] align-middle' /> */}
        </div>
      </div>
    </section>
    <section>
      <div className='w-full mx-auto mt-20 xl:max-w-[1140px]'>
        <div className=''>LET ME INTRODUCE MYSELF</div>
        </div>  
    </section>
    </>
  )
}
