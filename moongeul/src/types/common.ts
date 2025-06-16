export type HeaderType = 'DEFAULT' | 'DYNAMIC' | 'HOME'
export interface BookInfoType {
  author: string
  book_image: string
  collectionId: string
  collectionName: string
  description: string
  id: string
  pubdate: string
  publisher: string
  rating_average: number
  rating_count: number
  title: string
}
export interface UserInfoType {
  avatar: string
  collectionId: string
  collectionName: string
  created_at: string
  email: string
  emailVisibility: boolean
  follower: string[]
  following: string[]
  id: string
  name: string
  read_book: string[]
  updated_at: string
  verified: boolean
  wish_book: string[]
}

export interface BookInfoType {
  author: string
  book_image: string
  collectionId: string
  collectionName: string
  description: string
  id: string
  pubdate: string
  publisher: string
  rating_average: number
  rating_count: number
  title: string
}
