import clsx from 'clsx'
import React from 'react'
import Type from '@site/src/components/Type'
import HomeMainSvg from '@site/static/img/home-main.svg'
import AvatarSvg from '@site/static/img/avatar.svg'
import styles from './index.module.css'
import Translate from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function Hero() {
  const { i18n } = useDocusaurusContext()
  const lang = i18n.currentLocale
  /* lang === 'en' */
  return (
    <>
      <section className='w-full mx-auto color-[whitesmoke] text-left pt-36 pr-0 pb-8 xl:max-w-[1140px]'>
        <div className='flex flex-wrap'>
          <div className='mt-[50px] w-1/2'>
            <h1 className='mb-[15px] text-5xl pl-[50px]'>
              <Translate id='homepage.hero.greet'>你好! </Translate>
              <span role='img' aria-labelledby='wave' className='wave'>
                👋🏻
              </span>
            </h1>
            <h1 className='mb-[15px] text-5xl pl-[50px]'>
              <Translate id='homepage.hero.im'>我是</Translate>
              <strong className='text-purple'>
                <Translate id='homepage.hero.name'> KENT </Translate>
              </strong>
            </h1>
            <div className='p-[50px] text-purple text-3xl font-semibold'>
              <Type />
            </div>
          </div>
          <div className='pb-[20px] w-1/2'>
            <HomeMainSvg className='max-w-full h-auto max-h-[450px] align-middle' />
          </div>
        </div>
      </section>
      <section>
        <div className='w-full mx-auto my-20 xl:max-w-[1140px] '>
          <div className='flex flex-wrap items-center justify-between'>
            <div className='w-2/3'>
              <h1 className='text-5xl'>
                <Translate id='homepage.introduce.letme'>让我</Translate>
                <span className='text-purple'>
                  <Translate id='homepage.introduce.introduce'>介绍</Translate>
                </span>
                <Translate id='homepage.introduce.myself'>自己</Translate>
              </h1>
              <p className='pt-[50px] text-xl text-left pb-4 mb-4'>
                <Translate id='homepage.introduce.sentence1'>我喜欢编程，我想我至少学到了一些东西...</Translate>
                🤷‍♂️
                <br />
                <br />
                <Translate id='homepage.introduce.sentence2'>我精通诸如</Translate>
                <i>
                  <b className='text-purple'> Python, Javascript/Typescript. </b>
                </i>
                <br />
                <br />
                <Translate id='homepage.introduce.sentence3'>我的兴趣领域是</Translate>
                &nbsp;
                <i>
                  <b className='text-purple'>
                    <Translate id='homepage.introduce.webapp'>Web 应用</Translate>
                  </b>
                  <Translate id='homepage.introduce.sentence4'>也同样感兴趣于</Translate>{' '}
                  <b className='text-purple'>
                    <Translate id='homepage.introduce.blockchain'>区块链.</Translate>
                  </b>
                </i>
                <br />
                <br />
                <Translate id='homepage.introduce.sentence5'>只要有可能，我也会运用我的热情来开发产品</Translate>{' '}
                <b className='text-purple'>Node.js </b>
                <Translate id='homepage.introduce.and'>和</Translate>
                <i>
                  <b className='text-purple'>
                    <Translate id='homepage.introduce.sentence6'>现代 Javascript 库和框架 </Translate>
                  </b>
                </i>
                &nbsp;
                <Translate id='homepage.introduce.like'>比如</Translate>
                <i>
                  <b className='text-purple'> React.js and Next.js</b>
                </i>
              </p>
            </div>
            <div className='w-[217px] h-[237px] '>
              <AvatarSvg className='w-full h-full' />
            </div>
          </div>
          <div>
            <div className='w-full text-center pt-5 '>
              <h1 className='text-5xl mb-3'>
                <Translate id='homepage.introduce.find_me_on'>找到我</Translate>
              </h1>
              <p className='mb-5 text-xl'>
                Feel free to <span className='text-purple'>connect </span>with me
              </p>
              <ul className='pt-[15px] inline-block relative ps-0 mb-2'>
                <li className={styles['social-icons']}>
                  <a
                    href='https://github.com/Komorebi4829'
                    target='_blank'
                    rel='noreferrer'
                    className={clsx(styles['icon-colour'], styles['home-social-icons'])}
                  >
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      viewBox='0 0 1024 1024'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z'></path>
                    </svg>
                  </a>
                </li>
                <li className={styles['social-icons']}>
                  <a
                    href='https://twitter.com/kentkomorebi'
                    target='_blank'
                    rel='noreferrer'
                    className={clsx(styles['icon-colour'], styles['home-social-icons'])}
                  >
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      viewBox='0 0 1024 1024'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z'></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
