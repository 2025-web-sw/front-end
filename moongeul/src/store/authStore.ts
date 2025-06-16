import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface AuthStoreType {
  userId?: string
}

interface useAuthStoreType {
  userId: string
  setStoryBoardState: (params: AuthStoreType) => void
}

export const useAuthStore = create<useAuthStoreType>()(
  persist(
    (set) => ({
      userId: '',
      setStoryBoardState: (params: AuthStoreType) => {
        set((state) => ({
          ...state,
          ...params,
        }))
      },
    }),
    {
      name: 'auth-storage', // localStorage key 이름
    }
  )
)
