import { deleteReadBook } from '../../../lib/mypage.ts'
import { useNavigate } from 'react-router-dom'

interface OptionModalProps {
  onClick: () => void
  bookTitle: string | undefined
  readBookId: string | undefined
}
const OptionModal = ({ onClick, bookTitle, readBookId }: OptionModalProps) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={onClick}
      className="fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center gap-y-2 bg-[rgba(0,0,0,0.6)]"
    >
      <div className="bg-deep-dark-gray absolute bottom-0 flex w-full flex-col items-center justify-center rounded-t-[20px] pb-5">
        <div className="bg-dark-gray mt-[6px] mb-[10px] h-[5px] w-[36px] rounded-full"></div>
        <div className="title-regular-14 text-light-gray flex h-[48px] items-center justify-center">{bookTitle}</div>
        <button
          onClick={() => {
            if (readBookId) {
              deleteReadBook(readBookId).then(() => {
                console.log('삭제')
                navigate('/mypage/read')
              })
            }
          }}
          className="title-medium-16 text-brand-color flex h-[56px] items-center justify-center"
        >
          삭제하기
        </button>
      </div>
    </div>
  )
}
export default OptionModal