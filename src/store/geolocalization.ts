import create from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  position: number[];
};

type Actions = {
  // eslint-disable-next-line no-unused-vars
  setPosition: (position: number[]) => void;
};

export const geolocalizationStore = create(
  persist<State & Actions>(
    (set) => ({
      position: [],
      setPosition: (position: number[]) =>
        set((state) => ({
          ...state,
          position,
        })),
    }),
    {
      name: 'auth',
    }
  )
);
