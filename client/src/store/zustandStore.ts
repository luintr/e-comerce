import { create } from "zustand"

type ModelStore = {
  modelState: boolean
  setModelState: () => void
}

export const useModelStore = create<ModelStore>()((set) => ({
  modelState: false,
  setModelState: () => set((state) => ({ modelState: !state.modelState }))
}))