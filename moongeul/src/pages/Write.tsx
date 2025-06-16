import Header from '../components/common/Header.tsx'
import {
  ArrowDropDownIcon,
  CancelIcon,
  EmptyKidStarIcon,
  KidStarIcon,
  SearchIcon,
} from '../assets/svgComponents/index.ts'
import { useEffect, useState } from 'react'
import type { BookInfoType } from '../types/common.ts'
import { searchBookInfo } from '../lib/mypage.ts'
import { usePostStore } from '../store/postStore.ts'
import { postReviewPost } from '../lib/post.ts'
import { useNavigate } from 'react-router-dom'

const Write = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [searchBookInfoResults, setSearchBookInfoResults] = useState<BookInfoType[]>()
  const setPostState = usePostStore((state) => state.setPostState)
  const createReviewPost = usePostStore((state) => state.createReviewPost)
  const [selectedBookInfo, setSelectedBookInfo] = useState<BookInfoType>()
  const navigate = useNavigate()

  useEffect(() => {
    searchBookInfo(inputValue).then((res) => {
      if (res && res.length > 0) {
        setSearchBookInfoResults(res)
      }
    })
  }, [inputValue])

  return (
    <main>
      <Header headerType={'DYNAMIC'}>글 작성</Header>
      <div className="h-[84px]" />
      <section className="mt-[12px] px-5">
        <section className="flex items-center justify-between rounded-[8px] bg-black px-3 py-2">
          <div className="flex flex-col">
            <p className="title-medium-16 text-white">감상평</p>
            <p className="title-regular-14 text-light-gray">독서 후 감상평을 남겨보세요.</p>
          </div>
          <ArrowDropDownIcon width={24} height={24} />
        </section>
      </section>

      <div className="mt-5 flex w-full flex-col gap-y-[32px] px-5">
        {/* 책 검색 */}
        <section>
          <div className="title-medium-16">
            책 선택
            <span className="text-brand-color"> *</span>
          </div>
          <div className="flex w-full items-center gap-x-1 border-b p-2">
            <SearchIcon width={24} height={24} />
            <input
              onChange={(e) => {
                setInputValue(e.target.value)
              }}
              className="title-regular-14 text-dark-gray w-full outline-none"
              placeholder="책 제목 / 저자를 검색해보세요."
            />
          </div>
          <div>
            {selectedBookInfo ? (
              <div className="border-light-gray mt-2 flex justify-between rounded-[8px] border p-2">
                <div className="flex gap-x-2">
                  <img
                    className={'px-[5px]'}
                    width={37}
                    height={56}
                    src={`http://127.0.0.1:8090/api/files/pbc_3057622215/${selectedBookInfo.id}/${selectedBookInfo.book_image}`}
                  />
                  <div>
                    <p className="title-medium-14">{selectedBookInfo.title}</p>
                    <p className="caption-1 text-dark-gray">{selectedBookInfo.author}</p>
                  </div>
                </div>
                <CancelIcon
                  onClick={() => {
                    setSelectedBookInfo(undefined)
                  }}
                  width={24}
                  height={24}
                />
              </div>
            ) : (
              searchBookInfoResults?.map((bookInfo) => {
                return (
                  <div
                    onClick={() => {
                      setPostState({
                        createReviewPost: {
                          ...createReviewPost,
                          book_id: bookInfo?.id,
                        },
                      })
                      setSelectedBookInfo(bookInfo)
                    }}
                    className="border-light-gray flex gap-x-2 border px-2 py-3"
                    key={bookInfo.id}
                  >
                    <img
                      className={'px-[5px]'}
                      width={37}
                      height={56}
                      src={`http://127.0.0.1:8090/api/files/pbc_3057622215/${bookInfo?.id}/${bookInfo?.book_image}`}
                    />
                    <div>
                      <p className="title-medium-14">{bookInfo.title}</p>
                      <p className="caption-1 text-dark-gray">{bookInfo.author}</p>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </section>

        {selectedBookInfo && (
          <section className="flex flex-col gap-y-2">
            <div className="title-medium-16">
              감상평 작성
              <span className="text-brand-color"> *</span>
            </div>
            <textarea
              onChange={(e) => {
                setPostState({
                  createReviewPost: {
                    ...createReviewPost,
                    content: e.target.value,
                  },
                })
              }}
              className="placeholder:text-dark-gray border-light-gray h-[300px] rounded-[8px] border p-4"
              placeholder={'감상평을 작성해주세요.'}
            />
          </section>
        )}

        {selectedBookInfo && (
          <section>
            <section className={'flex flex-col gap-y-2'}>
              <div className="title-medium-16">
                평점<span className="text-dark-gray"> (선택)</span>
              </div>
              <div className="flex items-center">
                {Array.from({ length: 5 }, (_, index) => {
                  const starNumber = index + 1
                  const isFilled = (createReviewPost?.rating ?? 0) >= starNumber

                  const handleClick = () => {
                    setPostState({
                      createReviewPost: {
                        ...createReviewPost,
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

                <p className="title-regular-14 text-deep-dark-gray ml-3">{createReviewPost?.rating ?? 0}</p>
              </div>
            </section>
          </section>
        )}

        {selectedBookInfo && (
          <section>
            <section className={'flex flex-col gap-y-2'}>
              <div className="title-medium-16">
                한줄평<span className="text-dark-gray"> (선택)</span>
              </div>
              <div className="border-light-gray rounded-[12px] border px-4 py-3">
                <input
                  onChange={(e) => {
                    setPostState({
                      createReviewPost: {
                        ...createReviewPost,
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
        )}
      </div>
      <div className="h-[100px]"></div>
      <div className="bg-background fixed bottom-0 w-full px-5 py-4">
        <button
          onClick={() => {
            if (createReviewPost) {
              postReviewPost(createReviewPost).then(() => {
                navigate('/home')
              })
            }
          }}
          className="bg-deep-dark-gray button w-full rounded-full py-3 text-white"
        >
          완료하기
        </button>
      </div>
    </main>
  )
}
export default Write
