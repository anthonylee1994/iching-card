import create from 'zustand';
import { persist } from 'zustand/middleware';
import { HexagramType } from '../../hexagram/type';

export interface Bookmark {
  value: HexagramType;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface IState {
  bookmarks: Bookmark[];
  addBookmark: (bookmark: Omit<Bookmark, 'createdAt' | 'updatedAt'>) => void;
  removeBookmark: (index: number) => void;
  removeCurrentBookmark: () => void;
  editBookmark: (index: number, bookmark: Partial<Bookmark>) => void;
  deleteIndex: number;
  setDeleteIndex: (index: number) => void;
}

export const useBookmarkStore = create<IState>(
  persist(
    (set, get) => ({
      bookmarks: [],
      deleteIndex: -1,
      setDeleteIndex: (index: number) =>
        set((state) => ({ ...state, deleteIndex: index })),
      removeCurrentBookmark: () => {
        const { deleteIndex } = get();
        if (deleteIndex !== -1) {
          set((state) => ({
            ...state,
            deleteIndex: -1,
            bookmarks: [
              ...state.bookmarks.slice(0, deleteIndex),
              ...state.bookmarks.slice(deleteIndex + 1),
            ],
          }));
        }
      },
      addBookmark: (bookmark) => {
        const date = new Date();

        set({
          bookmarks: [
            ...get().bookmarks,
            {
              ...bookmark,
              createdAt: date.toISOString(),
              updatedAt: date.toISOString(),
            },
          ],
        });
      },
      removeBookmark: (index) => {
        set({
          bookmarks: get().bookmarks.filter((_, i) => i !== index),
        });
      },
      editBookmark: (index, bookmark) => {
        set({
          bookmarks: get().bookmarks.map((b, i) =>
            i === index
              ? {
                  ...b,
                  ...bookmark,
                  updatedAt: new Date().toISOString(),
                }
              : b,
          ),
        });
      },
    }),
    { name: 'bookmark-storage' },
  ),
);
