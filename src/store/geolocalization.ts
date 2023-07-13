import { create } from 'zustand';

type Actions = {
  // eslint-disable-next-line no-unused-vars
  setPosition: (position: number[]) => void;
  position: number[];
};

export const geolocalizationStore = create<Actions>((set) => ({
  position: [],
  setPosition: (position: number[]) =>
    set((state) => ({
      ...state,
      position,
    })),
}));
