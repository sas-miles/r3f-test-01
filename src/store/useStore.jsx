import { create } from 'zustand'

const useStore = create((set) => ({
  modalOpen: false,
  toggleModal: () =>
    set((state) => {
      return { modalOpen: !state.modalOpen }
    }),
}))

export default useStore
