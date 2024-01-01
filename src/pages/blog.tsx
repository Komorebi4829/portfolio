import React from 'react'
import MyLayout from '@site/src/theme/MyLayout'

function Blog() {
  return (
    <MyLayout maxWidth={1280}>
      <section className='flex flex-1 justify-center'>
        <div className='text-3xl flex flex-col justify-center items-center'>
          <span>( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)</span>
          <span>Under Construction</span>
        </div>
      </section>
    </MyLayout>
  )
}

export default Blog
