import type { BookInfoType } from './common.ts'

export interface UserInfo {
  collectionId: string
  collectionName: string
  avatar: string
  created: string
  email: string
  emailVisibility: boolean
  follower: string[]
  following: string[]
  read_book: string[]
  wish_book: string[]
  id: string
  name: string
  updated_at: string
  verified_at: boolean
}
export interface MyReadBookListType {
  items: MyReadBookType[]
  page: number
  perPage: number
  totalItems: number
  totalPages: number
}
export interface MyWishBookListType {
  items: MyWishBookType[]
  page: number
  perPage: number
  totalItems: number
  totalPages: number
}

export interface MyWishBookType {
  book_id: string
  collectionId: string
  collectionName: string
  created_at: string
  id: string
  reason: string
  updated_at: string
  user_id: string
}

export interface MyReadBookType {
  book_id: string
  collectionId: string
  collectionName: string
  id: string
  one_line_review: string
  rating: number
  read_date: string
  user_id: string
}

export type WishBookMergedType = BookInfoType & {
  wish_book_id: string
  reason: string
}
export type ReadBookMergedType = BookInfoType & {
  read_book_id: string
  one_line_review: string
  rating: number
  read_date: string
}

export interface CreateReadBookType {
  read_date?: string
  rating?: number
  one_line_review?: string
  book_id?: string
  user_id?: string
}
export interface CreateWishBookType {
  reason?: string
  book_id?: string
}
