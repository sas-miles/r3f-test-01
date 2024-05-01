import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import useStore from '../store/useStore'

function Box(props) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const { toggleModal } = useStore()

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked) // This will toggle the clicked state

    toggleModal()
  }

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default Box
