import { loadBasic } from '@tsparticles/basic'
import type { Engine } from '@tsparticles/engine'
import { Container, ISourceOptions } from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { useMemo } from 'react'

function Particle() {
  const { resolvedTheme } = useTheme()
  const [init, setInit] = useState(false)

  const colorMode = (resolvedTheme as 'dark' | 'light') || 'light'

  const theme = {
    dark: {
      color: '#120A2A',
      size: { min: 1, max: 1 },
    },
    light: {
      // color: '#f0f9ff', // sky-50
      color: '#f4fbff', // sky-40
      size: { min: 1, max: 1 },
    },
  }

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadStarsPreset(engine)
    }).then(() => {
      // console.log('init done')
      setInit(true)
    })
  }, [colorMode])

  async function loadStarsPreset(engine: Engine, refresh = true) {
    await loadBasic(engine, false)
    await engine.addPreset('stars', options, refresh)
  }

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log('particle loaded', container)
  }

  const optionsStar: ISourceOptions = {
    preset: 'stars',
  }

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: theme[colorMode].color,
      },
      particles: {
        number: {
          value: 40,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: true,
          speed: 0.1,
          straight: false,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
          value: { min: 0, max: 1 },
        },
        size: {
          value: { ...theme[colorMode].size },
        },
      },
    }),
    [colorMode],
  )

  return init ? <Particles id='tsparticles' options={optionsStar} particlesLoaded={particlesLoaded} /> : null
}

export default Particle
