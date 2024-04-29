import { OrbitControls } from '@react-three/drei'

import Box from './Box'
import Gallery from './Gallery'
import ModalController from './ModalController'

export default function Experience() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Gallery />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <OrbitControls />
      <ModalController />
    </>
  )
}
