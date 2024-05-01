import { Canvas } from '@react-three/fiber'
import LevelTwo from './LevelTwo/ExperienceTwo'
import { Suspense } from 'react'
import { useProgress } from '@react-three/drei'

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

export default function App2() {
  return (
    <>
      <LoadingScreen />
      <Canvas>
        <Suspense>
          <LevelTwo />
        </Suspense>
      </Canvas>
    </>
  )
}
