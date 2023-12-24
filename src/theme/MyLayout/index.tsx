import React from 'react'
import Layout from '@theme/Layout'
import Particle from '../../components/Particle'
import type { Props } from '@theme/Layout'

export default function MyLayout(props: Props & { maxWidth: number }): JSX.Element {
  const { children, maxWidth, ...restProps } = props
  return (
    <Layout {...restProps}>
      <Particle />
      {props.children}
    </Layout>
  )
}
