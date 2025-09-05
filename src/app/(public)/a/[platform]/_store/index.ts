import { random } from 'lodash';
import { create } from 'zustand';

interface AppProps {
  number: number;
}

type State = {
  number: number;
  prevNumber: number;
};

type Actions = {
  increment: () => void;
};

interface AppStore extends AppProps, State, Actions {}

export const createAppStore = (initProps?: Partial<AppProps>) => {
  const DEFAULT_PROPS: AppProps = {
    number: 0,
  };

  return create<AppStore>(set => ({
    ...DEFAULT_PROPS,
    ...initProps,
    prevNumber: initProps?.number ?? 0,
    increment: () => {
      const randomIncrement = random(5, 10);
      set(state => ({
        prevNumber: state.number,
        number: state.number + randomIncrement,
      }));
    },
  }));
};
