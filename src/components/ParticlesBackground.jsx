import { useMemo } from 'react'
import Particles from '@tsparticles/react'

export default function ParticlesBackground() {
  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: 'transparent' },
      fpsLimit: 60,
      particles: {
        number: { value: 42, density: { enable: true, area: 900 } },
        color: { value: ['#C6FF00', '#8FB800', '#F5F5F0'] },
        opacity: { value: { min: 0.1, max: 0.5 } },
        size: { value: { min: 1, max: 2.5 } },
        links: {
          enable: true,
          distance: 140,
          color: '#C6FF00',
          opacity: 0.08,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.35,
          direction: 'none',
          random: true,
          outModes: { default: 'out' },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.25 } },
        },
      },
      detectRetina: true,
    }),
    []
  )

  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0"
      options={options}
    />
  )
}
