import React, { FC, ReactNode } from 'react'
import { SiGithub } from 'react-icons/si'
import Translate from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

const ProjectItemDetail: FC<{
  name: string
  desc: string
  desc_en: string
  src: string
  detailContent: ReactNode
  detailContent_en: ReactNode
  skills: string[]
  urlFront: string
  urlAdmin: string
  urlGithub: string
}> = ({ name, desc, desc_en, src, detailContent, detailContent_en, skills, urlFront, urlAdmin, urlGithub }) => {
  const { i18n } = useDocusaurusContext()
  const lang = i18n.currentLocale
  return (
    <div>
      <img src={src} className='mb-8 rounded-lg' />
      <div className='relative flex flex-wrap w-full min-w-0 h-auto'>
        <article className='prose prose-base sm:prose-sm prose-slate lg:prose-base xl:prose-lg dark:prose-invert md:w-2/3 ml-0 text-left'>
          {lang === 'zh-CN' && detailContent}
          {lang !== 'zh-CN' && detailContent_en}
        </article>
        <article className='prose prose-base sm:prose-sm prose-slate lg:prose-base xl:prose-lg dark:prose-invert md:w-1/3 pr-0 mt-6 md:mt-12'>
          <div>
            <h5>Skills:</h5>
            <p>{skills.join(', ')}</p>
            {urlFront && (
              <a className='prose-a:text-blue-600' href={urlFront}>
                <Translate id='page.showcase.urlFront'>前台演示地址</Translate>
              </a>
            )}
            {urlAdmin && (
              <a href={urlAdmin}>
                &nbsp;
                <Translate id='page.showcase.urlAdmin'>后台演示地址</Translate>
              </a>
            )}
            {urlGithub && (
              <p className='text-3xl'>
                <a
                  className='inline-block cursor-pointer hover:text-[#cd5ff8] transition-all duration-500 ease-in-out hover:scale-120'
                  href={urlGithub}
                >
                  <SiGithub />
                </a>
              </p>
            )}
          </div>
        </article>
      </div>
    </div>
  )
}

export default ProjectItemDetail
