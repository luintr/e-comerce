import { create } from 'zustand';

type ModelStore = {
  modelState: boolean;
  setModelToggle: () => void;
};

export const useModelStore = create<ModelStore>()(set => ({
  modelState: false,
  setModelToggle: () => set(state => ({ modelState: !state.modelState })),
}));
