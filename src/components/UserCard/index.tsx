import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import SocialLinks from '@site/src/components/SocialLinks'
import { useThemeConfig } from '@docusaurus/theme-common'
import Translate from '@docusaurus/Translate'

import styles from './styles.module.scss'

export default function UserCard({ isNavbar = false }: { isNavbar?: boolean }) {
  const {
    navbar: { title },
  } = useThemeConfig()

  return (
    <div className={clsx(isNavbar ? styles.userCardNavbar : styles.userCard)}>
      <Link href='/about'>
        <img className={styles.cardImg} src={'/img/avatar.png'} alt='logo'></img>
      </Link>
      <div>
        <Link className={styles.name} href='about'>
          {title}
        </Link>
      </div>
      <div className={styles.description}>
        <Translate id='page.userCard.motto'>生命不息, 折腾不止!</Translate>
      </div>
      <SocialLinks
        style={{
          maxWidth: '100%',
          padding: '0.5em 0',
          justifyContent: 'center',
          gap: '0.5rem',
          ...(isNavbar ? { borderBottom: '1px solid #eee' } : null),
        }}
      />
    </div>
  )
}
