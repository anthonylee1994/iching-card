import create from 'zustand';
import { Hexagram } from '../lib/hexagram/Hexagram';
import { Trigram } from '../lib/trigram/Trigram';

interface IState {
  firstTrigrams: Trigram[];
  lastTrigrams: Trigram[];
  selectedFirstTrigram: Trigram | null;
  selectedLastTrigram: Trigram | null;
  isCardVisible: boolean;
  getDrawedHexagram: () => Hexagram | null;
  getCurrentTrigrams: () => Trigram[];
  hasResult: () => boolean;
  isLoading: () => boolean;
  shuffle: () => void;
  onDraw: (trigram: Trigram) => void;
  retry: () => void;
  setFirstTrigrams: (trigrams: Trigram[]) => void;
  setLastTrigrams: (trigrams: Trigram[]) => void;
  selectFirstTrigram: (trigram: Trigram | null) => void;
  selectLastTrigram: (trigram: Trigram | null) => void;
  setCardVisible: (isCardVisible: boolean) => void;
  showCard: () => void;
  hideCard: () => void;
}

export const useGameboardStore = create<IState>((set, get) => ({
  firstTrigrams: [],
  lastTrigrams: [],
  selectedFirstTrigram: null,
  selectedLastTrigram: null,
  isCardVisible: false,
  getDrawedHexagram: () => {
    const { isCardVisible, selectedFirstTrigram, selectedLastTrigram } = get();

    return isCardVisible
      ? Hexagram.valueOf(selectedFirstTrigram!, selectedLastTrigram!)
      : null;
  },
  getCurrentTrigrams: () => {
    const { selectedFirstTrigram, lastTrigrams, firstTrigrams } = get();

    return selectedFirstTrigram ? lastTrigrams : firstTrigrams;
  },
  hasResult: () => {
    const { selectedFirstTrigram, selectedLastTrigram } = get();

    return !!selectedFirstTrigram && !!selectedLastTrigram;
  },
  isLoading: () => {
    const { firstTrigrams, lastTrigrams } = get();

    return firstTrigrams.length === 0 || lastTrigrams.length === 0;
  },
  shuffle: () => {
    Promise.all([Trigram.getShuffledList(), Trigram.getShuffledList()]).then(
      ([f, l]) => {
        get().setFirstTrigrams(f);
        get().setLastTrigrams(l);
      },
    );
  },
  onDraw: (trigram: Trigram) => {
    const { selectedFirstTrigram, selectFirstTrigram, selectLastTrigram } =
      get();

    if (selectedFirstTrigram) {
      selectLastTrigram(trigram);
    } else {
      selectFirstTrigram(trigram);
    }
  },
  retry: () => {
    const { selectFirstTrigram, selectLastTrigram, setCardVisible, shuffle } =
      get();
    setCardVisible(false);
    selectFirstTrigram(null);
    selectLastTrigram(null);
    shuffle();
  },
  setFirstTrigrams: (trigrams: Trigram[]) => {
    set((state) => ({
      ...state,
      firstTrigrams: trigrams,
    }));
  },
  setLastTrigrams: (trigrams: Trigram[]) => {
    set((state) => ({
      ...state,
      lastTrigrams: trigrams,
    }));
  },
  selectFirstTrigram: (trigram: Trigram | null) => {
    set((state) => ({
      ...state,
      selectedFirstTrigram: trigram,
    }));
  },
  selectLastTrigram: (trigram: Trigram | null) => {
    set((state) => ({
      ...state,
      selectedLastTrigram: trigram,
    }));
  },
  setCardVisible: (isCardVisible: boolean) => {
    set((state) => ({
      ...state,
      isCardVisible,
    }));
  },
  showCard: () => {
    const { setCardVisible } = get();

    setCardVisible(true);
  },
  hideCard: () => {
    const { setCardVisible } = get();

    setCardVisible(false);
  },
}));
