import type { CreatePostType, PostListType } from '../types/post.ts'
import PocketBase from 'pocketbase'
import type { UserInfo } from '../types/mypage.ts'

const pb = new PocketBase('http://127.0.0.1:8090')

export const postReviewPost = async (data: CreatePostType) => {
  const userId = pb.authStore.model?.id
  if (!userId) throw new Error('로그인 정보가 없습니다.')

  return await pb.collection('review_post').create({
    ...data,
    user_id: userId,
  })
}

export const getReviewPost = async (): Promise<PostListType> => {
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

  return await pb.collection('review_post').getList(1, 50, {
    filter: `user_id = "${userId}"`,
  })
}
