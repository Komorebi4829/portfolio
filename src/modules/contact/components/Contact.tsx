import Breakline from '@/common/components/elements/Breakline'
import { author, featureSwich } from '@/contents/siteMetadata'
import {} from '@/contents/siteMetadata'

import BookACall from './BookACall'
import ContactForm from './ContactForm'
import SocialMediaList from './SocialMediaList'

const Contact = () => {
  return (
    <section className='space-y-6'>
      <SocialMediaList />
      <Breakline />

      {featureSwich.meeting && (
        <>
          <BookACall calMeetingUrl={author.calMeetingUrl} />
          <Breakline />
        </>
      )}

      {featureSwich.contactForm && (
        <div className='space-y-5'>
          <h3 className='text-lg font-medium'>Or send me a message</h3>
          <ContactForm />
        </div>
      )}
    </section>
  )
}

export default Contact
