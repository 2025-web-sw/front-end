import PocketBase from 'pocketbase'

import type { BookInfoType } from '../types/common.ts'
import type { CreateReadBookType, CreateWishBookType, MyReadBookListType, MyWishBookListType, UserInfo } from '../types/mypage.ts'

const pb = new PocketBase('http://127.0.0.1:8090')

export const getUserInfo = async (): Promise<UserInfo> => {
  await pb.collection('users').authWithPassword('rusia9217@chungbuk.ac.kr', 'ghkDdbfla12!')
  return await pb.collection('users').getOne('7xyh231pfdi37nf')
}

export const getMyRead = async (): Promise<MyReadBookListType> => {
  const raw = localStorage.getItem('pocketbase_auth')

  let userId: string | undefined

  if (raw) {
    try {
      const parsed = JSON.parse(raw) as {
        record: UserInfo
        token: string
      }

      userId = parsed.record.id // ✅ 안전하게 접근
    } catch (e) {
      console.error('JSON 파싱 오류:', e)
    }
  }

  return await pb.collection('read_book').getList(1, 50, {
    filter: `user_id = "${userId}"`,
  })
}

export const getMyWish = async (): Promise<MyWishBookListType> => {
  const raw = localStorage.getItem('pocketbase_auth')

  let userId: string | undefined

  if (raw) {
    try {
      const parsed = JSON.parse(raw) as {
        record: UserInfo
        token: string
      }

      userId = parsed.record.id // ✅ 안전하게 접근
    } catch (e) {
      console.error('JSON 파싱 오류:', e)
    }
  }

  return await pb.collection('wish_book').getList(1, 50, {
    filter: `user_id = "${userId}"`,
    requestKey: null,
    autoCancel: false,
  })
}

export const getBookInfo = async (bookId: string): Promise<BookInfoType> => {
  if (!bookId) throw new Error('bookId가 없습니다.')
  return await pb.collection('book_info').getOne(bookId, {
    requestKey: null,
    autoCancel: false,
  })
}

export const searchBookInfo = async (title: string): Promise<BookInfoType[]> => {
  try {
    const books = await pb.collection('book_info').getFullList({
      filter: `title ~ "${title}"`,
      requestKey: null,
      autoCancel: false,
    })
    return books as BookInfoType[]
  } catch (err) {
    console.error('📕 검색 실패:', err)
    return []
  }
}

export const postReadBook = async (data: CreateReadBookType): Promise<BookInfoType> => {
  const userId = pb.authStore.model?.id
  if (!userId) throw new Error('로그인 정보가 없습니다.')

  return await pb.collection('read_book').create({
    ...data,
    user_id: userId,
  })
}
export const postWishBook = async (data: CreateWishBookType): Promise<BookInfoType> => {
  const userId = pb.authStore.model?.id
  if (!userId) throw new Error('로그인 정보가 없습니다.')

  return await pb.collection('wish_book').create({
    ...data,
    user_id: userId,
  })
}
export const deleteReadBook = async (read_book_id: string) => {
  const userId = pb.authStore.model?.id
  if (!userId) throw new Error('로그인 정보가 없습니다.')

  return await pb.collection('read_book').delete(read_book_id, {
    user_id: userId,
  })
}

export const deleteWishBook = async (wish_book_id: string) => {
  const userId = pb.authStore.model?.id
  if (!userId) throw new Error('로그인 정보가 없습니다.')

  return await pb.collection('wish_book').delete(wish_book_id)
}
