import create from 'zustand';
import { Hexagram } from '../../hexagram/Hexagram';
import { Trigram } from '../../trigram/Trigram';

interface IState {
  firstTrigrams: Trigram[];
  lastTrigrams: Trigram[];
  selectedFirstTrigram: Trigram | null;
  selectedLastTrigram: Trigram | null;
  isCardSaved: boolean;
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
  setCardSaved: (isCardSaved: boolean) => void;
  showCard: () => void;
  hideCard: () => void;
}

export const useGameboardStore = create<IState>((set, get) => ({
  firstTrigrams: [],
  lastTrigrams: [],
  selectedFirstTrigram: null,
  selectedLastTrigram: null,
  isCardVisible: false,
  isCardSaved: false,
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

    trigram.vibrate();

    if (selectedFirstTrigram) {
      selectLastTrigram(trigram);
    } else {
      selectFirstTrigram(trigram);
    }
  },
  retry: () => {
    const {
      selectFirstTrigram,
      selectLastTrigram,
      setCardVisible,
      setCardSaved,
      shuffle,
    } = get();
    setCardVisible(false);
    setCardSaved(false);
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
  setCardSaved: (isCardSaved: boolean) => {
    set((state) => ({
      ...state,
      isCardSaved,
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
