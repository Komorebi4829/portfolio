import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: ['TypeScript 全栈工程师', 'Python Web Scraper', '开源爱好者'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
