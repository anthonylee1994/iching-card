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
  editBookmark: (index: number, bookmark: Partial<Bookmark>) => void;
}

export const useBookmarkStore = create<IState>(
  persist(
    (set, get) => ({
      bookmarks: [],
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
