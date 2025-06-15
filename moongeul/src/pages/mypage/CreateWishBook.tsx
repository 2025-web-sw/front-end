import Header from '../../components/common/Header.tsx'
import { SearchIcon } from '../../assets/svgComponents/index.ts'
import { getMyWish, postWishBook, searchBookInfo } from '../../lib/mypage.ts'
import { useBookStore } from '../../store/bookStore.ts'
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'
import type { BookInfoType } from '../../types/common.ts'
import type { MyWishBookType } from '../../types/mypage.ts'

interface CreateWishBookProps {
  setMyWishList: Dispatch<SetStateAction<MyWishBookType[] | undefined>>
  onClick: () => void
}

const CreateWishBook = ({ onClick, setMyWishList }: CreateWishBookProps) => {
  const [inputValue, setInputValue] = useState<string>('')
  const createWishBook = useBookStore((state) => state.createWishBook)
  const setBookState = useBookStore((state) => state.setBookState)
  const [searchBookInfoResult, setSearchBookInfoResult] = useState<BookInfoType>()

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
            {createWishBook?.book_id ? null : (
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
                createWishBook: {
                  ...createWishBook,
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

        {/* 읽고 싶은 이유 */}
        <section>
          <section className={'flex flex-col gap-y-2'}>
            <div className="title-medium-16">
              읽고 싶은 이유<span className="text-brand-color"> *</span>
            </div>
            <div className="border-light-gray rounded-[12px] border px-4 py-3">
              <input
                onChange={(e) => {
                  setBookState({
                    createWishBook: {
                      ...createWishBook,
                      reason: e.target.value,
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
          if (createWishBook) {
            postWishBook(createWishBook).then(async () => {
              const result = await getMyWish()
              setMyWishList(result.items)
              console.log('문제', result)
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
export default CreateWishBook
