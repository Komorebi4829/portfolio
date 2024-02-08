import React, { useMemo } from 'react'
import MyLayout from '@site/src/theme/MyLayout'
import styles from './showcase.module.css'
import Button from '@site/src/components/Button'
import { CgWebsite, CgDetailsMore } from 'react-icons/cg'
import { BsGithub } from 'react-icons/bs'
import { SlLink } from 'react-icons/sl'
import ProjectItem from '@site/src/components/ProjectItem'
import ProjectItemDetail from '@site/src/components/ProjectItemDetail'
import Translate from '@docusaurus/Translate'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function Showcase() {
  const MySwal = withReactContent(Swal)
  const { i18n } = useDocusaurusContext()
  const lang = i18n.currentLocale

  const projects = useMemo(() => [
    {
      name: 'Portfolio',
      desc: '我的个人小站, 使用 Docusaurus 构建.',
      desc_en: 'My personal website using Docusaurus.',
      src: '/img/projects/portfolio-min.png',
      detailContent: (
        <>
          <h1>Portfolio</h1>
          <p>
            项目简介：Portfolio
            是一个展示个人技术作品和职业生涯亮点的网站。该网站采用了Docusaurus静态网站生成器，通过现代化的Web技术栈和设计理念，不仅提供了一个清晰的用户体验，同时也确保了网站的性能和可维护性。
          </p>
          <p>技术栈：</p>
          <ul>
            <li>Docusaurus 3：一个优秀的静态网站生成器，基于React，支持Markdown和MDX，非常适合文档和博客的编写。</li>
          </ul>
        </>
      ),
      detailContent_en: (
        <>
          <h1>Portfolio</h1>
          <p>
            Project introduction：Portfolio is a website that displays my professional career highlights. This website
            uses the Docusaurus static website generator,
          </p>
          <p>Technology stack:</p>
          <ul>
            <li>
              Docusaurus 3: A high-performance static website generator based on React, supporting Markdown and MDX.
            </li>
          </ul>
        </>
      ),
      skills: ['React.js', 'Docusaurus', 'TailwindCSS'],
      urlFront: null,
      urlAdmin: null,
      urlGithub: 'https://github.com/Komorebi4829/portfolio',
    },
    {
      name: 'Optiwise',
      desc: '基于Next.js搭建的静态企业官网',
      desc_en: 'Static website powered by Next.js',
      src: '/img/projects/optiwise-min.png',
      detailContent: (
        <>
          <h1>Optiwise</h1>
          <p>
            项目概述：
            Optiwise企业官网是一个为该公司量身定制的静态网站，旨在为用户提供一个直观、易于导航的在线体验，同时向潜在客户展示公司的服务、产品、团队和企业文化。该网站不仅注重设计美感和用户体验，还通过最新的Web技术确保了网站的快速加载和高性能。
          </p>
          <p>技术栈：</p>
          <ul>
            <li>
              Next.js：一个基于React的框架，用于构建用户友好的静态生成和服务器端渲染的网站。Next.js的路由功能和优化措施使本项目的页面加载更快，提升了SEO效果。
            </li>
          </ul>
        </>
      ),
      detailContent_en: (
        <>
          <h1>Optiwise</h1>
          <p>Project description: Optiwise is a static website powered by Next.js.</p>
          <p>Technology stack:</p>
          <ul>
            <li>Next.js: A static website generator powered by React.</li>
          </ul>
        </>
      ),
      skills: ['Next.js', 'TailwindCSS'],
      urlFront: 'https://showcase.kentriversnook.com/optiwise/',
      urlAdmin: null,
      urlGithub: null,
    },
    {
      name: '新基石官网',
      desc: '一个Web3基金会的官网',
      desc_en: 'The official website of the Web3 Foundation.',
      src: '/img/projects/xjs-web-min.png',
      detailContent: (
        <>
          <h1>新基石官网</h1>
          <p>
            项目概述：
            这是一个为推动和加速Web3技术生态系统的发展而设计的在线平台。网站提供了关于基金会的使命、正在进行的研究、资助的项目、合作伙伴和即将到来的行业活动的详细信息。该网站使用了最新的Web技术栈，集成了区块链功能，旨在为访问者提供丰富的信息资源，同时展示Web3基金会在区块链领域的领导地位。
          </p>
          <p>技术栈：</p>
          <ul>
            <li>Flask：一个用Python编写的轻量级Web应用框架，用于构建可靠的API端点。</li>
            <li>Flask-SQLAlchemy：一个Python的SQL工具包和ORM，用于高效地处理MySQL数据库操作。</li>
            <li>MkDocs：一个快速、简单且完全驱动Markdown的静态站点生成器，用于创建项目文档。</li>
            <li>web3：一个Python库，允许与以太坊区块链进行交互，用于集成Web3功能。</li>
            <li>pycoin：一个Python库，用于比特币和其他加密货币的地址生成和交易构建。</li>
          </ul>
        </>
      ),
      detailContent_en: (
        <>
          <h1>XJS</h1>
          <p>Project description: The official website of the Web3 Foundation.</p>
          <p>Technology stack:</p>
          <ul>
            <li>Flask: A lightweight web application framework for building reliable API endpoints.</li>
            <li>Flask-SQLAlchemy: A Python SQL toolkit and ORM for efficient MySQL database operations.</li>
            <li>
              MkDocs: An efficient, simple, and completely driven Markdown static site generator for project
              documentation.
            </li>
            <li>web3: A Python library for interacting with Ethereum blockchain, enabling Web3 functionality.</li>
            <li>pycoin: A Python library for generating and building Bitcoin and other cryptocurrencies addresses.</li>
          </ul>
        </>
      ),
      skills: ['Flask', 'React.js', 'TailwindCSS', 'Mysql', 'Flask-SQLAlchemy', 'MkDocs', 'web3', 'pycoin', 'Redis'],
      urlFront: 'https://showcase.kentriversnook.com/xjs-web/',
      urlAdmin: null,
      urlGithub: null,
    },
  ])

  return (
    <MyLayout maxWidth={1280}>
      <section className='relative pt-[150px] pb-[30px] w-full mx-auto xl:max-w-[1140px]'>
        <div className=''>
          <div className='text-center mb-10'>
            <h1 className='text-4xl'>
              <Translate id='page.showcase.some'></Translate>
              <strong className='text-purple'>
                <Translate id='page.showcase.showcases'>项目展示</Translate>
              </strong>
            </h1>
            <p className='py-4'>
              <Translate id='page.showcase.sentence1'>下面是一些项目展示</Translate>
            </p>
          </div>
          <div className={styles.circle}></div>
        </div>
        <div className='flex justify-center flex-wrap pb-4 sm:px-12 md:px-12 lg:px-0'>
          {projects.map(project => (
            <ProjectItem
              key={project.name}
              name={project.name}
              desc={lang === 'zh-CN' ? project.desc : project.desc_en}
              src={project.src}
              actions={
                <>
                  <Button
                    onClick={() => {
                      MySwal.fire({
                        html: <ProjectItemDetail {...project} />,
                        width: '80%',
                        scrollbarPadding: false,
                        showCloseButton: false,
                        showConfirmButton: false,
                      })
                    }}
                  >
                    <CgDetailsMore />
                    &nbsp;Detail
                  </Button>

                  {project.urlFront && (
                    <a href={project.urlFront} className='flex items-center transition-all'>
                      <SlLink />
                      &nbsp;Demo
                    </a>
                  )}
                </>
              }
            />
          ))}
        </div>
      </section>
    </MyLayout>
  )
}
