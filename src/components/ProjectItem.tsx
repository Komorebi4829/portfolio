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
          <h5>{name}</h5>
          <p>{desc}</p>
          {actions}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
