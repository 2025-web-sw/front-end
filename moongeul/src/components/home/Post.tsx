import { GrayCommentIcon, GrayHeartIcon, GrayQuoteIcon, OptionMenuIcon } from '../../assets/svgComponents/index.ts'
import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  children: React.ReactNode
  postId: number
}

const Post = (props: Props) => {
  const { children, postId } = props
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/home/${postId}`)} className="border-light-gray w-full border-b px-5 py-4">
      {children}
    </div>
  )
}
export default Post

const PostProfile = ({
  isSmallSizeImg = false,
  profileImage,
  nickName,
  postType,
}: {
  isSmallSizeImg?: boolean
  profileImage: string
  nickName: string
  postType: string
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-1">
        <div
          className={`flex ${isSmallSizeImg ? 'h-[1.5rem] w-[1.5rem]' : 'h-[2.5rem] w-[2.5rem]'} items-center justify-center overflow-hidden`}
        >
          <img src={profileImage} className="h-full w-full rounded-full object-cover" alt="프로필 이미지" />
        </div>
        <p className="title-medium-14">{nickName}</p>
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
