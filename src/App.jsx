import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { ScrollControls, useProgress } from '@react-three/drei'
import LevelOne from './LevelOne/ExperienceOne'
import { Leva } from 'leva'

const LoadingScreen = () => {
  const { progress, active } = useProgress()

  return (
    <div className={`loading-screen ${active ? '' : 'loading-screen--hidden'}`}>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title">Loading Experience</h1>
        <div className="progress__container">
          <div
            className="progress__bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <LoadingScreen />
      <Canvas>
        <Suspense>
          <ScrollControls pages={10} damping={0.4}>
            <LevelOne />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  )
}
