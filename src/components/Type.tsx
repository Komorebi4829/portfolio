import React from 'react'
import Typewriter from 'typewriter-effect'
import { translate } from '@docusaurus/Translate'

function Type() {
  const tsFullstackEngineer = translate({
    id: 'component.Type.tsFullstackEngineer',
    message: 'TypeScript 全栈工程师',
  })
  const frontendEngineer = translate({
    id: 'component.Type.frontendEngineer',
    message: '前端工程师',
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
        strings: [tsFullstackEngineer, frontendEngineer, pythonWebScrapingEngineer, openSourceEnthusiast],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
