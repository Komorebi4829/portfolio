import React from 'react'
import Typewriter from 'typewriter-effect'
import { translate } from '@docusaurus/Translate'

function Type() {
  const tsFullstackEngineer = translate({
    id: 'component.Type.tsFullstackEngineer',
    message: 'TS 全栈工程师',
  })
  const frontendEngineer = translate({
    id: 'component.Type.frontendEngineer',
    message: 'Web 前端工程师',
  })
  const backendEngineer = translate({
    id: 'component.Type.backendEngineer',
    message: 'Web 后端工程师',
  })
  const devops = translate({
    id: 'component.Type.devops',
    message: 'CI/CD',
  })
  const pythonWebScrapingEngineer = translate({
    id: 'component.Type.pythonWebScrapingEngineer',
    message: 'Python 爬虫工程师',
  })
  const openSourceEnthusiast = translate({
    id: 'component.Type.openSourceEnthusiast',
    message: '',
  })
  const freelancer = translate({
    id: 'component.Type.freelancer',
    message: '',
  })

  return (
    <Typewriter
      options={{
        strings: [backendEngineer, frontendEngineer, pythonWebScrapingEngineer, tsFullstackEngineer, devops],
        autoStart: true,
        loop: true,
        delay: 100,
        deleteSpeed: 30,
      }}
    />
  )
}

export default Type
