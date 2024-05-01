import * as THREE from 'three'
import {
  Float,
  Line,
  PerspectiveCamera,
  SpotLight,
  useScroll,
} from '@react-three/drei'
import Box from '../components/Box'
import Gallery from './ModelMain'
import ModalController from '../components/ModalController'
import { useMemo, useRef } from 'react'
import { button, useControls } from 'leva'
import { useFrame } from '@react-three/fiber'
import levelOneVerts from './levelOneVerts.json'

const LINE_NB_POINTS = 5000

export default function Experience() {
  const points = levelOneVerts.points.map(
    (point) => new THREE.Vector3(point.x, point.y, point.z)
  )

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(points)
  }, [points])

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS)
  }, [curve])

  const cameraGroup = useRef()
  const scroll = useScroll()

  useFrame((_state, delta) => {
    const curPointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    )

    const curPoint = linePoints[curPointIndex]
    const pointAhead =
      linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)]

    const xDisplacement = (pointAhead.x - curPoint.x) * 12

    const angleRotation =
      (xDisplacement < 0 ? 1 : -1) *
      Math.min(Math.abs(xDisplacement), Math.PI / 2)

    const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        cameraGroup.current.rotation.x,
        angleRotation,
        cameraGroup.current.rotation.z
      )
    )

    cameraGroup.current.quaternion.slerp(targetCameraQuaternion, delta * 1)

    cameraGroup.current.position.lerp(curPoint, delta * 2)
  })

  return (
    <>
      <group ref={cameraGroup}>
        <PerspectiveCamera makeDefault position={[0, 12, 0]} fov={40} />
      </group>
      <ambientLight intensity={1} />
      <Gallery />

      {/* Line */}
      <Line
        points={linePoints}
        color={'white'}
        opacity={0}
        transparent={true}
        lineWidth={16}
      />
      <Float>
        <Box position={[-6, 8, 0]} />
        <Box position={[6, 8, 0]} />
      </Float>

      <ModalController />
    </>
  )
}
