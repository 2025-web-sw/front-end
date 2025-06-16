import InteractionBar from '../components/home/InteractionBar.tsx'
import Header from '../components/common/Header.tsx'
import BookInfo from '../components/home/BookInfo.tsx'
import QuotePostList from '../components/home/QuotePostList.tsx'
import PostMeta from '../components/home/PostMeta.tsx'
import { OptionMenuIcon } from '../assets/svgComponents/index.ts'
import Profile from '../components/home/Profile.tsx'
import { useEffect, useState } from 'react'
import { usePostStore } from '../store/postStore.ts'
import type { BookInfoType, UserInfoType } from '../types/common.ts'
import { getBookInfo } from '../lib/mypage.ts'

const PostDetail = () => {
  const [isQuotePostTotalPageOpen, setIsQuotePostTotalPageOpen] = useState(false)
  const selectedReviewPost = usePostStore((state) => state.selectedReviewPost)
  const raw = localStorage.getItem('pocketbase_auth')
  const [userInfo, setUserInfo] = useState<{ record: UserInfoType; token: string }>()
  const [bookInfo, setBookInfo] = useState<BookInfoType>()

  useEffect(() => {
    if (raw) {
      setUserInfo(JSON.parse(raw))
    }
  }, [])

  useEffect(() => {
    let isMounted = true // 마운트 상태 확인

    const fetchData = async () => {
      try {
        if (selectedReviewPost) {
          const bookInfoResult = await getBookInfo(selectedReviewPost.book_id)
          setBookInfo(bookInfoResult)
          if (isMounted) console.log(bookInfoResult)
        }
      } catch (error) {
        console.error('🚨 오류 발생:', error)
      }
    }

    fetchData()

    return () => {
      isMounted = false // 언마운트되면 상태 업데이트 막음
    }
  }, [])

  return (
    <main>
      <Header headerType={'DYNAMIC'} rightComponent={<OptionMenuIcon width={12} height={12} onClick={() => {}} />} />
      <div className="h-[79px]" />

      <section className="flex flex-col gap-y-6 px-5 py-4">
        <section className="flex flex-col gap-y-3">
          <Profile
            profileImage={userInfo?.record.avatar}
            followCount={userInfo?.record.follower.length}
            nickName={userInfo?.record.name}
            id={userInfo?.record.id}
          />
          <BookInfo
            bookImage={bookInfo?.book_image}
            title={bookInfo?.title}
            author={bookInfo?.author}
            id={bookInfo?.id}
          />
          <p className="body-regular-16">{selectedReviewPost?.content}</p>
          <PostMeta />
        </section>
        <QuotePostList onClick={() => setIsQuotePostTotalPageOpen(!isQuotePostTotalPageOpen)} />
      </section>

      <div className="h-[76px]" />
      <InteractionBar
        likeCount={selectedReviewPost?.like_cnt}
        commentCount={selectedReviewPost?.comment_cnt}
        quoteCount={selectedReviewPost?.quo_cnt}
        onClick={() => setIsQuotePostTotalPageOpen(!isQuotePostTotalPageOpen)}
      />
    </main>
  )
}
export default PostDetail
