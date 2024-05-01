import { Float, OrbitControls, PerspectiveCamera } from '@react-three/drei'

import ModelMain from './ModelMain'
import ModalController from '../components/ModalController'

export default function Experience() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 30]} />
      <ambientLight intensity={0.5} />
      <Float>
        <ModelMain />
      </Float>

      <OrbitControls />
      <ModalController />
    </>
  )
}
