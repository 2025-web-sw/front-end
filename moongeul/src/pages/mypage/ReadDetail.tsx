import Header from '../../components/common/Header.tsx'
import { EmptyKidStarIcon, KidStarIcon, OptionIcon } from '../../assets/svgComponents/index.ts'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useBookStore } from '../../store/bookStore.ts'
import type { ReadBookMergedType } from '../../types/mypage.ts'
import OptionModal from '../../components/mypage/read/OptionModal.tsx'

const ReadDetail = () => {
  const params = useParams()
  const readBookList = useBookStore((state) => state.readBookList)
  const [currentReadBook, setCurrentReadBook] = useState<ReadBookMergedType>()
  const [isOptionModalOpen, setIsOptionModalOpen] = useState(false)

  useEffect(() => {
    if (!params.bookId) return

    const matched = readBookList.find((item) => item.read_book_id === params.bookId)

    if (matched) {
      setCurrentReadBook(matched)
    }
  }, [params.bookId, readBookList])

  return (
    <main>
      {isOptionModalOpen ? (
        <OptionModal
          readBookId={currentReadBook?.read_book_id}
          onClick={() => setIsOptionModalOpen(false)}
          bookTitle={currentReadBook?.title}
        />
      ) : null}
      <Header
        headerType={'DYNAMIC'}
        rightComponent={
          <div className="flex h-[32px] w-[32px] items-center justify-center">
            <OptionIcon
              onClick={() => {
                setIsOptionModalOpen(!isOptionModalOpen)
              }}
              width={4}
              height={12}
            />
          </div>
        }
      >
        읽은 책
      </Header>
      <section className="mt-24 px-5">
        <section className="flex items-center gap-x-[15px] border-b px-[7px] py-4">
          <img
            className="px-[5px]"
            src={`http://127.0.0.1:8090/api/files/pbc_3057622215/${currentReadBook?.id}/${currentReadBook?.book_image}`}
            width={94}
            height={140}
          />
          <div>
            <p className="title-medium-16">{currentReadBook?.title}</p>
            <p className="body-regular-14 text-dark-gray mt-5">{currentReadBook?.author}</p>
            <p className="body-regular-14 text-dark-gray">{currentReadBook?.publisher}</p>
            <p className="body-regular-14 text-dark-gray">{currentReadBook?.pubdate}</p>
          </div>
        </section>
        <section className="flex flex-col gap-y-1 border-b pb-[16px]">
          <div className="title-medium-16 flex h-[52px] items-center">읽은 날짜</div>
          <div className="title-regular-14">{currentReadBook?.pubdate}</div>
        </section>
        <section className="flex flex-col gap-y-1 border-b pb-[16px]">
          <div className="title-medium-16 flex h-[52px] items-center">책 평점</div>
          <div className="flex items-center">
            <KidStarIcon width={32} height={32} />
            <KidStarIcon width={32} height={32} />
            <KidStarIcon width={32} height={32} />
            <KidStarIcon width={32} height={32} />
            <EmptyKidStarIcon width={32} height={32} />
            <p className="title-regular-14 text-deep-dark-gray ml-3">{currentReadBook?.rating_average}</p>
          </div>
        </section>
        <section className="flex flex-col gap-y-1 border-b pb-[16px]">
          <div className="title-medium-16 flex h-[52px] items-center">한줄평</div>
          <div className="title-regular-14">{currentReadBook?.one_line_review}</div>
        </section>
      </section>
    </main>
  )
}
export default ReadDetail
