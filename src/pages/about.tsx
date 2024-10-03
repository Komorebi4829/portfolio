import clsx from 'clsx'
import React, { ReactNode, useMemo } from 'react'
import MyLayout from '@site/src/theme/MyLayout'
import styles from './about.module.css'
import Translate from '@docusaurus/Translate'
import { GrGamepad } from 'react-icons/gr'
import { BsBook } from 'react-icons/bs'
import BadmintonSvg from '@site/static/img/badminton.svg'
import GitHubCalendar from 'react-github-calendar'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { STACKS } from '@site/src/components/stacks'
import Marquee from 'react-fast-marquee'

const Tag = ({ icon, title }: { icon: ReactNode; title: string }) => (
  <div className={clsx('flex items-center gap-2 mr-3 rounded-full py-2 px-5 w-max', styles['tech-icons'])}>
    {icon}
    <span>{title}</span>
  </div>
)

export default function About() {
  const { i18n } = useDocusaurusContext()
  const lang = i18n.currentLocale

  const shuffledSkills = useMemo(() => {
    const skillsArray = Object.entries(STACKS)
    return [...skillsArray].sort(() => Math.random() - 0.5)
  }, [])

  const sliders = Array.from({ length: 3 }, (_, index) => {
    const sliderSkills = [...shuffledSkills].sort(() => Math.random() - 0.5)
    return sliderSkills.map(([title, icon], index) => <Tag key={index} icon={icon} title={title} />)
  })

  return (
    <MyLayout maxWidth={1280}>
      <section className='relative pt-[130px] pb-[30px] px-6 w-full mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'>
        <div className='flex justify-center items-center flex-wrap relative'>
          <div className='w-full text-center md:w-7/12 lg:w-7/12 lg:text-left'>
            <h1 className='text-4xl pb-2xl text-center mb-12'>
              <Translate id='page.about.about_me'>关于我</Translate>
            </h1>
            <div className='flex-1 text-xl'>
              <p className='text-justify leading-8'>
                <Translate id='page.about.greet'>你好, 我是</Translate>
                <span className='text-purple'>
                  <Translate id='page.about.name'> Kent, </Translate>
                </span>
                <Translate id='page.about.one_person'>一个半路出家的程序员</Translate>
                <br />
                <Translate id='page.about.sentence1'>
                  写过 Python Web 后端, 也会写 Python 爬虫, 后来因为机缘一直写前端到现在;
                </Translate>
                <br />
                <Translate id='page.about.sentence2'>曾在疫情期间作为前端主力维护过省级核酸小程序; </Translate>
                <br />
                <Translate id='page.about.sentence3'>有5年前端和3年后端经验, 现在主攻 TS 全栈方向 </Translate>
                <br />
                <br />
                <Translate id='page.about.sentence4'>除了编程之外，我还喜欢 </Translate>
                <br />
                <br />
              </p>
              <ul className='pl-6 text-justify'>
                <li className='pl-1'>
                  <GrGamepad />
                  {/* <ForefingerSvg /> */}
                  <Translate id='page.about.hobby.videoGame'> Playing video games </Translate>
                </li>
                <li className='pl-1'>
                  <BadmintonSvg />
                  {/* <ForefingerSvg /> */}
                  <Translate id='page.about.hobby.badminton'> Playing badminton </Translate>
                </li>
                <li className='pl-1'>
                  <BsBook />
                  {/* <ForefingerSvg /> */}
                  <Translate id='page.about.hobby.reading'> Reading books </Translate>
                </li>
              </ul>
              <br />
              <p className='text-center text-purple-dark dark:text-purple-light'>
                <Translate id='page.about.motto'>"生命不息, 折腾不止!"</Translate>
              </p>
              <footer
                className={clsx('text-center text-purple-dark dark:text-purple-light', styles['blockquote-footer'])}
              >
                Kent
              </footer>
            </div>
          </div>
          <div className='max-w-full mt-12 md:w-5/12 lg:w-5/12 md:mt-0 lg:mt-0'>
            <img className='max-w-full h-auto' src='/img/about.png' />
          </div>
          <div className={styles.circle}></div>
        </div>

        <div className='mt-16'>
          <h1 className='text-center text-4xl my-4'>
            Professional <strong className='text-purple'>Skillset</strong>
          </h1>
          <div className='overflow-hidden'>
            <div className='relative flex flex-col gap-y-4 justify-start py-2 w-full '>
              <Marquee className={styles['custom-marquee']} direction='left' speed={20}>
                {sliders[0]}
              </Marquee>
              <Marquee className={styles['custom-marquee']} direction='right' speed={20}>
                {sliders[1]}
              </Marquee>
              <Marquee className={styles['custom-marquee']} direction='left' speed={20}>
                {sliders[2]}
              </Marquee>
              <div className={clsx('hidden dark:flex fade', styles['my-fade'])} />
            </div>
          </div>

          <h1 className='text-center text-4xl my-8 mt-16'>
            Days I <strong className='text-purple'>Code</strong>
          </h1>
          <div className={clsx(styles['github-calendar'], 'flex justify-center pb-8 flex-wrap')}>
            <GitHubCalendar
              username='Komorebi4829'
              blockSize={15}
              blockMargin={5}
              theme={{
                light: [
                  'hsl(0, 0%, 92%)',
                  'hsla(272, 85%, 74%, 0.44)',
                  'hsla(272, 85%, 74%, 0.6)',
                  'hsla(272, 85%, 74%, 0.76)',
                  'hsla(272, 85%, 74%, 0.92)',
                ],
              }}
              fontSize={16}
              hideTotalCount={true}
            />
          </div>
        </div>
      </section>
    </MyLayout>
  )
}
