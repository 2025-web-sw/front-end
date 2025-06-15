import Header from '../components/common/Header.tsx'
import { useBookStore } from '../store/bookStore.ts'
import { EmptyKidStarIcon, KidStarIcon } from '../assets/svgComponents/index.ts'

const SearchDetail = () => {
  const selectedBookInfo = useBookStore((state) => state.selectedBookInfo)
  return (
    <main>
      <Header headerType={'DYNAMIC'}>책 정보</Header>
      <div className="h-[100px]" />
      <div className="px-5">
        {/* 책 정보 */}
        <section className="flex gap-x-2 border-b py-4">
          <img
            className="mx-3"
            width={94}
            height={140}
            src={`http://127.0.0.1:8090/api/files/pbc_3057622215/${selectedBookInfo?.id}/${selectedBookInfo?.book_image}`}
          />
          <div className="flex flex-col items-start justify-center gap-y-5">
            <p className="title-medium-16">{selectedBookInfo?.title}</p>
            <div>
              <p className="body-regular-14 text-dark-gray">{selectedBookInfo?.author}</p>
              <p className="body-regular-14 text-dark-gray">{selectedBookInfo?.publisher}</p>
              <p className="body-regular-14 text-dark-gray">{selectedBookInfo?.pubdate}</p>
            </div>
          </div>
        </section>
        {/* 책 소개 */}
        <section className="flex flex-col gap-y-1 border-b pb-4">
          <div className="title-medium-16 py-3">책 소개</div>
          <div>{selectedBookInfo?.description}</div>
        </section>
        {/* 책 평점 */}
        <section className="flex flex-col gap-y-1 border-b pb-4">
          <div className="title-medium-16 py-3">책 평점</div>
          <div className="flex items-center">
            {[...Array(5)].map((_, idx) =>
              idx < Math.floor(selectedBookInfo?.rating_average as number) ? (
                <KidStarIcon key={idx} width={32} height={32} />
              ) : (
                <EmptyKidStarIcon key={idx} width={32} height={32} />
              )
            )}
            <div className="title-regular-14 ml-3">{selectedBookInfo?.rating_average}</div>
          </div>
        </section>
      </div>
    </main>
  )
}
export default SearchDetail
