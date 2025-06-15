import { KidStarIcon } from '../../../assets/svgComponents/index.ts'
import { useNavigate } from 'react-router-dom'
import type { ReadBookMergedType } from '../../../types/mypage.ts'

const ReadBookItem = ({ id, book_image, rating_average, author, pubdate, read_book_id }: ReadBookMergedType) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        navigate(`/mypage/read/${read_book_id}`)
      }}
      className="flex flex-col items-center justify-center gap-y-2 border-b p-2"
    >
      <img width={100} height={115} src={`http://127.0.0.1:8090/api/files/pbc_3057622215/${id}/${book_image}`} />
      <section className="flex h-[92px] w-full flex-col gap-y-1">
        <div className="flex items-center gap-x-1">
          <KidStarIcon width={16} height={16} />
          <p className="title-medium-14 text-dark-gray">{rating_average}</p>
        </div>
        <div className="title-medium-14 line-clamp-2 h-[44px]">{author}</div>
        <p className="caption-1 text-dark-gray">{pubdate}</p>
      </section>
    </div>
  )
}
export default ReadBookItem
