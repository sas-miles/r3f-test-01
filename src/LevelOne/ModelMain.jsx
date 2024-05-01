import { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

export default function Model(props) {
  const { nodes, materials } = useGLTF(
    'https://webflow-public-assets.s3.amazonaws.com/testing/levelOne.glb'
  )

  // Load the texture
  const texture = useTexture(
    'https://webflow-public-assets.s3.amazonaws.com/testing/levelOneBake2_Bake1_CyclesBake_COMBINED.jpg'
  )
  texture.flipY = false
  // Create a new material using the texture
  const material = new MeshStandardMaterial({ map: texture })

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube_Baked.geometry}
        material={material} // Use the new material
        position={[-113.264, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload(
  'https://webflow-public-assets.s3.amazonaws.com/testing/levelOne.glb'
)
