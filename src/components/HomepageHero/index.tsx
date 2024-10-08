import clsx from 'clsx'
import React from 'react'
import Type from '@site/src/components/Type'
import HomeMainSvg from '@site/static/img/home-main.svg'
import styles from './index.module.css'
import Translate from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Tilt from 'react-parallax-tilt'
import { SiGithub, SiTwitter, SiDiscord } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { useThemeConfig } from '@docusaurus/theme-common'
import { ThemeConfig } from '@docusaurus/preset-classic'
import { Variants, motion } from 'framer-motion'

const variants: Variants = {
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 100,
      duration: 0.3,
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0, y: 30 },
}

export default function Hero() {
  const { i18n } = useDocusaurusContext()
  const lang = i18n.currentLocale

  const themeConfig = useThemeConfig() as ThemeConfig

  const socials = themeConfig.socials as {
    github: string
    twitter: string
    email: string
    discord: string
  }

  return (
    <>
      <section className='w-full mx-auto color-[whitesmoke] text-left mt-36 pr-0 pb-8 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'>
        <div className='flex flex-wrap relative'>
          <div className='mt-[50px] w-full text-center lg:w-1/2 lg:text-left'>
            <motion.div custom={1} initial='hidden' animate='visible' variants={variants}>
              <h2 className='mb-[15px] text-5xl pl-[50px]'>
                <Translate id='homepage.hero.greet'>你好! </Translate>
                <span role='img' aria-labelledby='wave' className='wave'>
                  👋🏻
                </span>
              </h2>
            </motion.div>
            <motion.div custom={2} initial='hidden' animate='visible' variants={variants}>
              <h1 className='mb-[15px] text-5xl pl-[50px]'>
                <Translate id='homepage.hero.im'>我是</Translate>
                <strong className='text-purple'>
                  <Translate id='homepage.hero.name'> KENT </Translate>
                </strong>
              </h1>
            </motion.div>
            <motion.div custom={3} initial='hidden' animate='visible' variants={variants}>
              <div className='p-[50px] text-purple text-3xl font-semibold'>
                <Type />
              </div>
            </motion.div>
          </div>
          <div className='pb-[20px] max-w-full md:max-w-full lg:w-1/2'>
            <HomeMainSvg className='max-w-full h-auto max-h-[450px] align-middle' />
            <div className={styles.circle}></div>
          </div>
        </div>
      </section>
      <section>
        <div className='w-full mx-auto my-20 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] '>
          <div className='flex flex-wrap items-center justify-between'>
            <div className='w-full text-center lg:w-2/3 lg:text-left'>
              <h2 className='text-5xl'>
                <Translate id='homepage.introduce.letme'>让我</Translate>
                <span className='text-purple'>
                  <Translate id='homepage.introduce.introduce'>介绍</Translate>
                </span>
                <Translate id='homepage.introduce.myself'>自己</Translate>
              </h2>
              <p className='pt-[50px] text-xl text-left pb-4 mb-4 px-8 lg:px-0'>
                {lang === 'zh-CN' && (
                  <>
                    通过多年的实践和项目经验，我掌握了前端和后端开发技术，能够熟练使用
                    <i>
                      <b className='text-purple'> Python，JavaScript/TypeScript </b>
                    </i>
                    编程语言。
                    <br />
                    <br />
                    我热衷于使用
                    <i>
                      <b className='text-purple'> React.js，Next.js，Nest.js </b>
                    </i>
                    构建出色的 <b className='text-purple'>Web应用程序，</b>
                    并且有丰富的实践经验。同时对计算机底层原理感兴趣。
                    <br />
                    <br />
                    我对自己的
                    <b className='text-purple'>代码质量</b>
                    非常重视，注重代码的结构性和可维护性，以确保项目的长期成功和可持续发展。我期待能够为您的项目带来价值，并与您
                    <b className='text-purple'>共同努力，</b>
                    创造出卓越的软件解决方案。
                  </>
                )}
                {lang !== 'zh-CN' && (
                  <>
                    I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                    <br />
                    <br />I am mastered in programming languages like
                    <i>
                      <b className='text-purple'> Python, JavaScript/TypeScript. </b>
                    </i>
                    I am passionate about building modern <b className='text-purple'>Web Applications</b> using
                    technologies like
                    <i>
                      <b className='text-purple'> React.js, Next.js, and Nest.js, </b>
                    </i>
                    and I have extensive hands-on experience in this field. I am also interested in the underlying
                    knowledge of computer science.
                    <br />
                    <br />I place great importance on the <b className='text-purple'>quality</b> of my code, focusing on
                    code structure and maintainability to ensure long-term success and sustainability of projects. I
                    look forward to
                    <b className='text-purple'> bringing value</b> to your projects and
                    <b className='text-purple'> working together </b>
                    to create exceptional software solutions.
                  </>
                )}
              </p>
            </div>
            <div className='w-full text-center lg:text-center lg:w-auto'>
              <Tilt>
                <img src='/img/avatar.png' alt='avatar' className='max-w-[240px] h-auto rounded-full mx-auto' />
              </Tilt>
            </div>
          </div>
          <div>
            <div className='w-full text-center pt-14 '>
              <h2 className='text-5xl mb-3'>
                <Translate id='homepage.introduce.find_me_on'>联系我</Translate>
              </h2>
              {lang !== 'zh-CN' && (
                <p className='mb-5 text-xl'>
                  Feel free to <span className='text-purple'>connect </span>with me
                </p>
              )}
              <ul className='pt-6 inline-block relative ps-0 mb-2'>
                <li className={styles['social-icons']}>
                  <a
                    href={socials.github}
                    target='_blank'
                    rel='noreferrer'
                    className={clsx(styles['home-social-icons'])}
                  >
                    <SiGithub />
                  </a>
                </li>
                <li className={styles['social-icons']}>
                  <a
                    href={socials.twitter}
                    target='_blank'
                    rel='noreferrer'
                    className={clsx(styles['home-social-icons'])}
                  >
                    <SiTwitter />
                  </a>
                </li>
                <li className={styles['social-icons']}>
                  <a
                    href={socials.email}
                    target='_blank'
                    rel='noreferrer'
                    className={clsx(styles['home-social-icons'])}
                  >
                    <MdEmail />
                  </a>
                </li>
                <li className={styles['social-icons']}>
                  <a
                    href={socials.discord}
                    target='_blank'
                    rel='noreferrer'
                    className={clsx(styles['home-social-icons'])}
                  >
                    <SiDiscord />
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
