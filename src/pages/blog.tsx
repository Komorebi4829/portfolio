import React from 'react'
import Translate from '@docusaurus/Translate'
import MyLayout from '@site/src/theme/MyLayout'

function Blog() {
  return (
    <MyLayout maxWidth={1280}>
      <section className='flex flex-1 justify-center'>
        <div className='text-3xl flex flex-col justify-center items-center'>
          <span>( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)</span>
          <span className='mt-6'>
            <Translate id='page.blog.under_construction'>Under Construction</Translate>
          </span>
        </div>
      </section>
    </MyLayout>
  )
}

export default Blog
