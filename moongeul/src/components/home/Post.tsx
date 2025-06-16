import { GrayCommentIcon, GrayHeartIcon, GrayQuoteIcon, OptionMenuIcon } from '../../assets/svgComponents/index.ts'
import { type ReactNode, useEffect, useState } from 'react'
import BookInfo from './BookInfo.tsx'
import type { PostType } from '../../types/post.ts'
import { getBookInfo } from '../../lib/mypage.ts'
import type { BookInfoType, UserInfoType } from '../../types/common.ts'

interface Props {
  onClick: () => void
  postId: string
  bookId: string
  userId: string
  reviewPost: PostType
}

const Post = (props: Props) => {
  const { reviewPost, bookId, onClick } = props

  const [bookInfo, setBookInfo] = useState<BookInfoType>()

  useEffect(() => {
    let isMounted = true // 마운트 상태 확인

    const fetchData = async () => {
      try {
        const bookInfoResult = await getBookInfo(bookId)
        setBookInfo(bookInfoResult)
        if (isMounted) console.log(bookInfoResult)
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
    <div onClick={onClick} className="border-light-gray w-full border-b px-5 py-4">
      <Post.Profile postType={reviewPost.type} />
      <section className="flex flex-col gap-y-2 pl-[2.5rem]">
        <BookInfo
          title={bookInfo?.title}
          bookImage={bookInfo?.book_image}
          id={bookInfo?.id}
          author={bookInfo?.author}
        />
        <Post.Content>{reviewPost?.content}</Post.Content>
        <Post.InteractionBar
          quoteCount={reviewPost.quo_cnt}
          likeCount={reviewPost.like_cnt}
          commentCount={reviewPost.comment_cnt}
        />
      </section>
    </div>
  )
}
export default Post

const PostProfile = ({ isSmallSizeImg = false, postType }: { isSmallSizeImg?: boolean; postType: string }) => {
  const raw = localStorage.getItem('pocketbase_auth')
  const [userInfo, setUserInfo] = useState<{ record: UserInfoType; token: string }>()

  useEffect(() => {
    if (raw) {
      setUserInfo(JSON.parse(raw))
    }
  }, [])

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-1">
        <div
          className={`flex ${isSmallSizeImg ? 'h-[1.5rem] w-[1.5rem]' : 'h-[2.5rem] w-[2.5rem]'} items-center justify-center overflow-hidden`}
        >
          {userInfo && (
            <img
              src={`http://127.0.0.1:8090/api/files/_pb_users_auth_/${userInfo.record.id}/${userInfo.record.avatar}`}
              alt="프로필 이미지"
              className="h-full w-full rounded-full object-cover"
            />
          )}
        </div>
        <p className="title-medium-14">{userInfo?.record.name}</p>
        <div className="border-dark-gray h-[0.75rem] w-[0.063rem] border-r" />
        <p className="title-regular-14 text-dark-gray">{postType}</p>
      </div>
      {isSmallSizeImg ? null : <OptionMenuIcon width={12} height={12} />}
    </div>
  )
}

const PostContent = ({ children }: { children: ReactNode }) => {
  return <div className="px-1">{children}</div>
}
const PostInteractionBar = ({
  likeCount,
  commentCount,
  quoteCount,
}: {
  likeCount: number
  commentCount: number
  quoteCount: number
}) => {
  return (
    <div className="flex gap-x-[2.5rem]">
      <div className="flex items-center gap-x-1">
        <GrayHeartIcon width={24} height={24} />
        <p className="text-dark-gray body-regular-14">{likeCount}</p>
      </div>
      <div className="flex items-center gap-x-1">
        <GrayCommentIcon width={24} height={24} />
        <p className="text-dark-gray body-regular-14">{commentCount}</p>
      </div>
      <div className="flex items-center gap-x-1">
        <GrayQuoteIcon width={24} height={24} />
        <p className="text-dark-gray body-regular-14">{quoteCount}</p>
      </div>
    </div>
  )
}
Post.Profile = PostProfile
Post.InteractionBar = PostInteractionBar
Post.Content = PostContent
