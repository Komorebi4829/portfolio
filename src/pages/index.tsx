import React, { useEffect } from 'react'
import Layout from '@theme/Layout'
import HomepageHero from '@site/src/components/HomepageHero'
import MyLayout from '@site/src/theme/MyLayout'

function Home() {
  return (
    <MyLayout description='Description will go into a meta tag in <head />' maxWidth={1280}>
      <main className='container-wrapper'>
        <HomepageHero></HomepageHero>
      </main>
    </MyLayout>
  )
}

export default Home
