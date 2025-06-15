import { deleteWishBook, getMyWish } from '../../../lib/mypage.ts'
import type { Dispatch, SetStateAction } from 'react'
import type { MyWishBookType } from '../../../types/mypage.ts'

interface WishDetailModalProps {
  onClick: () => void
  title: string | undefined
  author: string | undefined
  reason: string | undefined
  id: string | undefined
  setMyWishList: Dispatch<SetStateAction<MyWishBookType[] | undefined>>
}
const WishDetailModal = ({ onClick, title, author, reason, id, setMyWishList }: WishDetailModalProps) => {
  return (
    <div
      onClick={onClick}
      className="fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center gap-y-2 bg-[rgba(0,0,0,0.6)] px-5"
    >
      <div className="bg-deep-dark-gray flex w-full flex-col gap-y-5 rounded-[20px] p-5">
        <div className="title-medium-16 text-white">{title}</div>
        <div className="body-regular-14 flex flex-col gap-y-1">
          <p className="text-light-gray">{author}</p>
          <p className="text-brand-color">{reason}</p>
        </div>
        <div className="flex w-full justify-end gap-x-2">
          <button
            onClick={onClick}
            className={'text-dark-gray button border-light-gray h-[48px] w-1/2 rounded-full border bg-white'}
          >
            닫기
          </button>
          <button
            onClick={() => {
              if (id) {
                console.log('id', id)
                deleteWishBook(id).then(async () => {
                  const result = await getMyWish()
                  setMyWishList(result.items)
                  onClick()
                })
              }
            }}
            className={'button bg-brand-color h-[48px] w-1/2 rounded-full text-white'}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  )
}
export default WishDetailModal
