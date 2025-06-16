import { create } from 'zustand/index'
import type { CreatePostType, PostType } from '../types/post.ts'

export interface PostStoreType {
  createReviewPost?: CreatePostType | undefined
  selectedReviewPost?: PostType
}

interface usePostStoreType {
  createReviewPost: CreatePostType | undefined
  selectedReviewPost: PostType | undefined
  setPostState: (params: PostStoreType) => void
}

export const usePostStore = create<usePostStoreType>((set) => ({
  createReviewPost: {
    type: 'REVIEW',
  },
  selectedReviewPost: undefined,
  setPostState: (params: PostStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
