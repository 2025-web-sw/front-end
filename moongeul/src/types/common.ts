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