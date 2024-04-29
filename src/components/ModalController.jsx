import { useEffect, useRef } from 'react' // Import useRef
import gsap from 'gsap'
import useStore from '../store/useStore'

function ModalController() {
  const { modalOpen, toggleModal } = useStore() // Get toggleModal from useStore

  const modalRef = useRef(null)
  const modalCloseRef = useRef(null)

  useEffect(() => {
    modalRef.current = document.querySelector('[data-r3f="modal"]')
    modalCloseRef.current = document.querySelector('[data-r3f="close-btn"]')

    const closeBtn = modalCloseRef.current
    if (closeBtn) {
      closeBtn.addEventListener('click', toggleModal)
    }

    return () => {
      if (closeBtn) {
        closeBtn.removeEventListener('click', toggleModal)
      }
    }
  }, [toggleModal])

  useEffect(() => {
    const modal = modalRef.current
    if (modal) {
      const tl = gsap.timeline()
      if (modalOpen) {
        tl.to(modal, {
          duration: 0.5,
          opacity: 1,
          ease: 'power3.out',
          onStart: () => gsap.set(modal, { display: 'flex' }),
        })
      } else {
        tl.to(modal, {
          duration: 0.5,
          opacity: 0,
          ease: 'power3.in',
          onComplete: () => gsap.set(modal, { display: 'none' }),
        })
      }
    }
  }, [modalOpen])

  return null
}

export default ModalController
