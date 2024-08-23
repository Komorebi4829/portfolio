import React, { FC, ReactNode } from 'react'
import styles from './ProjectItem.module.css'

const ProjectItem: FC<{
  name: string
  desc: string
  src: string
  actions: ReactNode
}> = ({ name, desc, src, actions }) => {
  return (
    <div className={styles['project-item']}>
      <div className={styles['item-view']}>
        <img className='max-w-full h-auto' src={src} alt='' />
        <div className={styles['item-body']}>
          <h2 className={styles['item-title']}>{name}</h2>
          <p className={styles['item-desc']}>{desc}</p>
          <div className={styles['item-actions']}>{actions}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
