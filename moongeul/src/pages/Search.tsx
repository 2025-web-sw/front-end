import Header from '../components/common/Header.tsx'
import NavBar from '../components/common/NavBar.tsx'
import { SearchIcon } from '../assets/svgComponents/index.ts'
import { useEffect, useState } from 'react'
import { searchBookInfo } from '../lib/mypage.ts'
import type { BookInfoType } from '../types/common.ts'
import { useBookStore } from '../store/bookStore.ts'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [searchBookInfoResults, setSearchBookInfoResults] = useState<BookInfoType[]>()
  const setBookState = useBookStore((state) => state.setBookState)
  const navigate = useNavigate()

  useEffect(() => {
    searchBookInfo(inputValue).then((res) => {
      if (res && res.length > 0) {
        setSearchBookInfoResults(res)
      }
    })
  }, [inputValue])

  return (
    <main className="flex min-h-screen flex-col">
      <Header headerType={'DEFAULT'}>도서 검색</Header>
      <div className="h-[120px]" />

      {/* 검색창 */}
      <div className="w-full px-5">
        <div className="flex h-[48px] w-full items-center gap-x-1 rounded-full border px-4">
          <SearchIcon width={24} height={24} />
          <input
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
            className="title-regular-14 text-dark-gray w-full outline-none"
            placeholder="책 제목 / 저자를 검색해보세요."
          />
        </div>
        {searchBookInfoResults?.map((searchBookInfoResult) => {
          return (
            <div
              onClick={() => {
                setBookState({ selectedBookInfo: searchBookInfoResult })
                navigate(`/search/${searchBookInfoResult.id}`)
              }}
              className="border-light-gray flex gap-x-2 border-b py-4"
            >
              <img
                width={94}
                height={140}
                className={'mx-[13px]'}
                src={`http://127.0.0.1:8090/api/files/pbc_3057622215/${searchBookInfoResult?.id}/${searchBookInfoResult?.book_image}`}
              />
              <div className="flex flex-col items-start justify-center gap-y-5">
                <p className="title-medium-16">{searchBookInfoResult.title}</p>
                <div>
                  <p className="body-regular-14 text-dark-gray">{searchBookInfoResult.author}</p>
                  <p className="body-regular-14 text-dark-gray">{searchBookInfoResult.publisher}</p>
                  <p className="body-regular-14 text-dark-gray">{searchBookInfoResult.pubdate}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="h-[120px]" />
      <NavBar />
    </main>
  )
}
export default Search
