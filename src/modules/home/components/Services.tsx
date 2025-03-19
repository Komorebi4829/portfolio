import Link from 'next/link'
import { BiRocket as RocketIcon } from 'react-icons/bi'

import Button from '@/common/components/elements/Button'
import Card from '@/common/components/elements/Card'
import SectionHeading from '@/common/components/elements/SectionHeading'
import { author } from '@/contents/siteMetadata'

const Services = () => {
  return (
    <section className='space-y-5'>
      <div className='space-y-3'>
        <SectionHeading title="What I've been working on" />
        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300'>{author.workingOn}</p>
      </div>
      <Card className='p-8 bg-neutral-100 border dark:border-none rounded-xl space-y-4'>
        <div className='flex gap-2 items-center'>
          <RocketIcon size={24} />
          <h3 className='text-xl font-medium'>Lets work together!</h3>
        </div>
        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 pl-2'>
          {author.workTogether}
        </p>
        <Link href='/contact' className='inline-block'>
          <button
            data-umami-event='Click Contact Button'
            className='relative inline-flex overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900'
          >
            <span className='absolute inset-[-500%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]'></span>
            <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[7px] font-medium text-indigo-700 dark:text-indigo-300 backdrop-blur-3xl bg-white/90 dark:bg-slate-900/90 hover:bg-white/90 dark:hover:bg-slate-800/90 transition duration-200 py-3 px-16 text-md'>
              Contact me
            </span>
          </button>
        </Link>
      </Card>
    </section>
  )
}

export default Services
