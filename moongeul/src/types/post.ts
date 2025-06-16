export interface CreatePostType {
  content?: string
  type?: 'REVIEW'
  rating?: number
  one_line_review?: string
  book_id?: string
}

export interface PostType {
  book_id: string
  collectionId: string
  collectionName: string
  comment_cnt: number
  content: string
  created_at: string
  id: string
  like_cnt: number
  one_line_review: string
  quo_cnt: number
  rating: number
  type: string
  updated_at: string
  user_id: string
}

export interface PostListType {
  items: PostType[]
  page: number
  perPage: number
  totalItems: number
  totalPages: number
}
