import { create } from 'zustand/index'
import type { CreateReadBookType, CreateWishBookType, ReadBookMergedType } from '../types/mypage.ts'
import type { BookInfoType } from '../types/common.ts'

export interface BookStoreType {
  readBookList?: ReadBookMergedType[]
  createReadBook?: CreateReadBookType | undefined
  createWishBook?: CreateWishBookType | undefined
  selectedBookInfo?: BookInfoType | undefined
}

interface useBookStoreType {
  readBookList: ReadBookMergedType[]
  createReadBook: CreateReadBookType | undefined
  createWishBook: CreateWishBookType | undefined
  selectedBookInfo: BookInfoType | undefined
  setBookState: (params: BookStoreType) => void
}

export const useBookStore = create<useBookStoreType>((set) => ({
  readBookList: [],
  createReadBook: undefined,
  createWishBook: undefined,
  selectedBookInfo: undefined,
  setBookState: (params: BookStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
