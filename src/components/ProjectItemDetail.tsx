import React, { FC, ReactNode } from 'react'
import { SiGithub, SiTwitter, SiDiscord } from 'react-icons/si'

const ProjectItemDetail: FC<{
  name: string
  desc: string
  desc_en: string
  src: string
  detailContent: ReactNode
  detailContent_en: ReactNode
  goDemo?: () => void
  skills: string[]
  urlFront: string
  urlAdmin: string
  urlGithub: string
}> = ({ name, desc, desc_en, src, detailContent, detailContent_en, skills, goDemo, urlFront, urlAdmin, urlGithub }) => {
  return (
    <div>
      <img src={src} className='mb-8 rounded-lg' />
      <div className='relative flex flex-wrap w-full min-w-0 h-auto'>
        <article className='prose prose-base sm:prose-sm prose-slate lg:prose-base xl:prose-lg dark:prose-invert md:w-2/3 ml-0 text-left'>
          {detailContent}
        </article>
        <article className='prose prose-base sm:prose-sm prose-slate lg:prose-base xl:prose-lg dark:prose-invert md:w-1/3 pr-0 mt-6 md:mt-12'>
          <div>
            <h5>Skills:</h5>
            <p>{skills.join(', ')}</p>
            {urlFront && (
              <a className='prose-a:text-blue-600' href='https://baidu.com'>
                前台演示地址
              </a>
            )}
            {urlAdmin && <a href='https://baidu.com'>&nbsp;后台演示地址</a>}
            {urlGithub && (
              <p className='text-3xl'>
                <span className='cursor-pointer hover:text-[#cd5ff8] transition-all duration-500 ease-in-out hover:scale-110' onClick={() => window.open(urlGithub)}>
                  <SiGithub />
                </span>
              </p>
            )}
          </div>
        </article>
      </div>
    </div>
  )
}

export default ProjectItemDetail
