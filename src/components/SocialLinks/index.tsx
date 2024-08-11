import React from 'react'
import { useThemeConfig } from '@docusaurus/theme-common'
import { ThemeConfig } from '@docusaurus/preset-classic'
import { Icon } from '@iconify/react'

import styles from './styles.module.scss'

function SocialLink({ href, icon, title, ...prop }: { href: string; title: string; icon: string | JSX.Element }) {
  return (
    <a href={href} target='_blank' {...prop} title={title}>
      {typeof icon === 'string' ? <Icon icon={icon} /> : icon}
    </a>
  )
}

export default function SocialLinks({ ...prop }) {
  const themeConfig = useThemeConfig() as ThemeConfig

  const socials = themeConfig.socials as {
    github: string
    twitter: string
    email: string
    discord: string
  }

  return (
    <div className={styles.social__links} {...prop}>
      <SocialLink href={socials.github} title='gitub' icon='ri:github-line' />
      <SocialLink href={socials.twitter} title='X' icon='ri:twitter-x-line' />
      <SocialLink href={socials.email} title='Email' icon='ri:mail-line' />
      <SocialLink href={socials.discord} title='Discord' icon='ri:discord-line' />
    </div>
  )
}
