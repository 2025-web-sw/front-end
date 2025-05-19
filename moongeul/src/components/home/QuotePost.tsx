import BookInfo from './BookInfo.tsx'
import Post from './Post.tsx'

interface Props {
  isBookInfo?: boolean
  profileImage: string
  postType: string
  nickName: string
  bookImage: string
  title: string
  author: string
  children: React.ReactNode
}

const QuotePost = (props: Props) => {
  const { isBookInfo = true, profileImage, postType, nickName, bookImage, author, title, children } = props
  return (
    <div className="border-light-gray flex max-w-[315px] flex-shrink-0 flex-col gap-y-1 rounded-[0.75rem] border px-3 py-2">
      <Post.Profile isSmallSizeImg={true} profileImage={profileImage} postType={postType} nickName={nickName} />
      {isBookInfo && <BookInfo bookImage={bookImage} author={author} title={title} />}
      <p className={'body-regular-14 line-clamp-3'}>{children}</p>
    </div>
  )
}
export default QuotePost
