import { BrandStarIcon } from '../../assets/svgComponents/index.ts'

const PostMeta = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="title-medium-14 text-dark-gray flex items-center gap-x-1">
        <BrandStarIcon width={16} height={16} />
        4.5
      </div>
      <div className="flex gap-x-1">
        <div className="tag-chip">#따뜻함</div>
        <div className="tag-chip">#따뜻함</div>
        <div className="tag-chip">#따뜻함</div>
        <div className="tag-chip">#따뜻함</div>
      </div>
      <div className="caption-1 text-dark-gray">1월 12일</div>
    </div>
  )
}
export default PostMeta
