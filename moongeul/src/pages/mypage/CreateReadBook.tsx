import Header from '../../components/common/Header.tsx'
import { EmptyKidStarIcon, KidStarIcon, SearchIcon } from '../../assets/svgComponents/index.ts'
import { useEffect, useState } from 'react'
import type { BookInfoType } from '../../types/common.ts'
import { getMyRead, postReadBook, searchBookInfo } from '../../lib/mypage.ts'
import { useBookStore } from '../../store/bookStore.ts'
import type { MyReadBookType } from '../../types/mypage.ts'

interface CreateReadBookProps {
  onClick: () => void
  setReadBookIdList: React.Dispatch<React.SetStateAction<MyReadBookType[] | undefined>>
}

const CreateReadBook = ({ onClick, setReadBookIdList }: CreateReadBookProps) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [searchBookInfoResult, setSearchBookInfoResult] = useState<BookInfoType>()
  const setBookState = useBookStore((state) => state.setBookState)
  const createReadBook = useBookStore((state) => state.createReadBook)

  useEffect(() => {
    searchBookInfo(inputValue).then((res) => {
      if (res && res.length > 0) {
        setSearchBookInfoResult(res[0])
      }
      console.log('res', res)
    })
  }, [inputValue])

  return (
    <main>
      <Header headerType={'DYNAMIC'}>읽은 책 추가</Header>
      <div className="h-[84px]" />
      {/* 책 선택 */}
      <section className="mt-3 flex flex-col gap-y-[32px] px-5">
        <section className="flex flex-col gap-y-2">
          <div className="w-full">
            <div className="title-medium-16">
              책 선택
              <span className="text-brand-color"> *</span>
            </div>
            {createReadBook?.book_id ? null : (
              <div className="flex h-[40px] gap-x-2 border-b p-2">
                <SearchIcon width={24} height={24} />
                <input
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value)
                  }}
                  placeholder={'책 제목 / 저자를 검색해보세요.'}
                  className="title-medium-14 text-dark-gray w-full outline-none"
                />
              </div>
            )}
          </div>

          <section
            onClick={() => {
              setBookState({
                createReadBook: {
                  ...createReadBook,
                  book_id: searchBookInfoResult?.id,
                },
              })
            }}
            className="border-light-gray flex items-center gap-x-2 rounded-[12px] border p-2"
          >
            <img
              className="mx-[5px]"
              width={37}
              height={56}
              src={`http://127.0.0.1:8090/api/files/pbc_3057622215/${searchBookInfoResult?.id}/${searchBookInfoResult?.book_image}`}
            />
            <div className="flex flex-col">
              <p className="title-medium-14">{searchBookInfoResult?.title}</p>
              <p className="caption-1 text-dark-gray">{searchBookInfoResult?.author}</p>
            </div>
          </section>
        </section>

        {/*읽은 날*/}
        <section>
          <section className={'flex flex-col gap-y-2'}>
            <div className="title-medium-16">
              읽은 날<span className="text-brand-color"> *</span>
            </div>
            <div className="border-light-gray rounded-[12px] border px-4 py-3">
              <input
                onChange={(e) => {
                  const selectedDate = e.target.value
                  const isoDate = new Date(selectedDate).toISOString()

                  setBookState({
                    createReadBook: {
                      ...createReadBook,
                      read_date: isoDate,
                    },
                  })
                }}
                type={'date'}
                placeholder={'날짜 선택'}
                className={'text-dark-gray title-regular-14 w-full outline-none'}
              />
            </div>
          </section>
        </section>

        {/*평점*/}
        <section>
          <section className={'flex flex-col gap-y-2'}>
            <div className="title-medium-16">
              평점<span className="text-dark-gray"> (선택)</span>
            </div>
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, index) => {
                const starNumber = index + 1
                const isFilled = (createReadBook?.rating ?? 0) >= starNumber

                const handleClick = () => {
                  setBookState({
                    createReadBook: {
                      ...createReadBook,
                      rating: starNumber,
                    },
                  })
                }

                return (
                  <div key={index} onClick={handleClick} className="cursor-pointer">
                    {isFilled ? <KidStarIcon width={32} height={32} /> : <EmptyKidStarIcon width={32} height={32} />}
                  </div>
                )
              })}

              <p className="title-regular-14 text-deep-dark-gray ml-3">{createReadBook?.rating ?? 0}</p>
            </div>
          </section>
        </section>

        {/*한줄평*/}
        <section>
          <section className={'flex flex-col gap-y-2'}>
            <div className="title-medium-16">
              한줄평<span className="text-dark-gray"> (선택)</span>
            </div>
            <div className="border-light-gray rounded-[12px] border px-4 py-3">
              <input
                onChange={(e) => {
                  setBookState({
                    createReadBook: {
                      ...createReadBook,
                      one_line_review: e.target.value,
                    },
                  })
                }}
                placeholder={'한줄평을 작성해주세요.'}
                className={'text-dark-gray title-regular-14 w-full outline-none'}
              />
            </div>
          </section>
        </section>
      </section>
      <button
        onClick={() => {
          if (createReadBook) {
            postReadBook(createReadBook).then(async () => {
              const result = await getMyRead()
              setReadBookIdList(result.items)
              onClick()
            })
          }
        }}
        className="bg-deep-dark-gray button fixed right-5 bottom-5 left-5 rounded-full py-3 text-white"
      >
        완료하기
      </button>
    </main>
  )
}
export default CreateReadBook
