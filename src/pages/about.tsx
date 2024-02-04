import clsx from 'clsx'
import React, { useEffect } from 'react'
import MyLayout from '@site/src/theme/MyLayout'
import styles from './about.module.css'
// import ForefingerSvg from '@site/static/img/forefinger.svg'
import Translate from '@docusaurus/Translate'
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit } from 'react-icons/di'
import {
  SiRedis,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiJest,
  // SiFigma,
  // SiDrone,
  // SiJenkins,
  // SiTrello,
  SiDocker,
  SiDocusaurus,
  SiVisualstudiocode,
  // SiSlack,
  SiVercel,
  SiMacos,
  SiFlask,
  SiAntdesign,
  SiVuedotjs,
  SiUbuntu,
  SiDjango,
} from 'react-icons/si'
import { GrGamepad } from 'react-icons/gr'
import { BsBook } from 'react-icons/bs'
import BadmintonSvg from '@site/static/img/badminton.svg'
import GitHubCalendar from 'react-github-calendar'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function About() {
  const { i18n } = useDocusaurusContext()
  const lang = i18n.currentLocale
  return (
    <MyLayout maxWidth={1280}>
      <section className='relative pt-[130px] pb-[30px] px-6 w-full mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] text-[#fff]'>
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
              <p className='text-center' style={{ color: 'rgb(155, 126, 172)' }}>
                <Translate id='page.about.motto'>"生命不息, 折腾不止!"</Translate>
              </p>
              <footer className={clsx('text-center', styles['blockquote-footer'])}>Kent</footer>
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
          <div className='flex flex-wrap justify-center items-center text-white text-center'>
            <div className={styles['tech-icons']}>
              <DiJavascript1 />
            </div>
            <div className={styles['tech-icons']}>
              <DiReact />
            </div>
            <div className={styles['tech-icons']}>
              <DiNodejs />
            </div>
            <div className={styles['tech-icons']}>
              <DiPython />
            </div>
            <div className={styles['tech-icons']}>
              <DiMongodb />
            </div>
            <div className={styles['tech-icons']}>
              <DiGit />
            </div>
            <div className={styles['tech-icons']}>
              <SiDjango />
            </div>
            <div className={styles['tech-icons']}>
              <SiRedis />
            </div>
            <div className={styles['tech-icons']}>
              <SiNextdotjs />
            </div>
            <div className={styles['tech-icons']}>
              <SiPostgresql />
            </div>
            <div className={styles['tech-icons']}>
              <SiTypescript />
            </div>
            <div className={styles['tech-icons']}>
              <SiTailwindcss />
            </div>
            <div className={styles['tech-icons']}>
              <SiNestjs />
            </div>
            <div className={styles['tech-icons']}>
              <SiJest />
            </div>
            <div className={styles['tech-icons']}>
              <SiDocusaurus />
            </div>
            <div className={styles['tech-icons']}>
              <SiFlask />
            </div>
            <div className={styles['tech-icons']}>
              <SiAntdesign />
            </div>
            <div className={styles['tech-icons']}>
              <SiVuedotjs />
            </div>
          </div>
          <h1 className='text-center text-4xl my-4 mt-16 '>
            <strong className='text-purple'>Tools</strong> I use
          </h1>
          <div className='flex flex-wrap justify-center items-center text-white text-center'>
            <div className={styles['tech-icons']}>
              <SiMacos />
            </div>
            <div className={styles['tech-icons']}>
              <SiUbuntu />
            </div>
            <div className={styles['tech-icons']}>
              <SiVisualstudiocode />
            </div>
            {/* <div className={styles['tech-icons']}>
              <SiFigma />
            </div>
            <div className={styles['tech-icons']}>
              <SiDrone />
            </div>
            <div className={styles['tech-icons']}>
              <SiJenkins />
            </div> */}
            {/* <div className={styles['tech-icons']}>
              <SiTrello />
            </div> */}
            <div className={styles['tech-icons']}>
              <SiDocker />
            </div>
            {/* <div className={styles['tech-icons']}>
              <SiSlack />
            </div> */}
            <div className={styles['tech-icons']}>
              <SiVercel />
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
