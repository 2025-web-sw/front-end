import { WhiteCommentIcon, WhiteHeartIcon, WhiteQuoteIcon } from '../../assets/svgComponents/index.ts'

interface Props {
  likeCount: number
  commentCount: number
  quoteCount: number
  setIsQuotePostTotalPageOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const InteractionBar = (props: Props) => {
  const { likeCount, quoteCount, commentCount, setIsQuotePostTotalPageOpen } = props
  return (
    <nav className={'fixed right-0 bottom-0 left-0 flex w-full justify-evenly bg-black px-6 py-3 pb-[2rem]'}>
      <div className="flex items-center gap-x-1">
        <WhiteHeartIcon width={32} height={32} />
        <p className="title-regular-14 text-white">{likeCount}</p>
      </div>
      <div className="flex items-center gap-x-1">
        <WhiteCommentIcon width={32} height={32} />
        <p className="title-regular-14 text-white">{commentCount}</p>
      </div>
      <div
        onClick={() => {
          setIsQuotePostTotalPageOpen(true)
        }}
        className="flex items-center gap-x-1"
      >
        <WhiteQuoteIcon width={32} height={32} />
        <p className="title-regular-14 text-white">{quoteCount}</p>
      </div>
    </nav>
  )
}
export default InteractionBar
