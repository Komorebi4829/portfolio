import React, { useEffect } from 'react'
import Layout from '@theme/Layout'
// import HomepageHero from './_components/HomepageHero'
// import HomepageBlog from './_components/HomepageBlog'
// import HomepageFeatures from './_components/HomepageFeatures'
// import HomepageProject from './_components/HomepageProject'
import HomepageHero from '@site/src/components/HomepageHero'
import MyLayout from '@site/src/theme/MyLayout'

function Home() {
  return (
    <MyLayout description='Description will go into a meta tag in <head />' maxWidth={1280}>
      <main className='container-wrapper'>
        <HomepageHero></HomepageHero>
        {/* <HomepageBlog /> */}
        {/* <HomepageProject /> */}
        {/* <HomepageFeatures /> */}
      </main>
    </MyLayout>
  )
}

export default Home
