import create from 'zustand';

interface ModalState {
  isOpen: boolean;
}

interface IState {
  state: Record<string, ModalState>;
  isOpen: (id: string) => boolean;
  onOpen: (id: string) => void;
  onClose: (id: string) => void;
}

export const useModalStore = create<IState>((set) => ({
  state: {},
  isOpen(id: string) {
    return this.state[id]?.isOpen;
  },
  onOpen(id: string) {
    set((state) => ({
      ...state,
      state: {
        ...state.state,
        [id]: {
          isOpen: true,
        },
      },
    }));
  },
  onClose(id: string) {
    set((state) => ({
      ...state,
      state: {
        ...state.state,
        [id]: {
          isOpen: false,
        },
      },
    }));
  },
}));
