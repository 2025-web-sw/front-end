import Header from '../../components/common/Header.tsx'
import { useEffect, useState } from 'react'
import { getBookInfo, getMyRead } from '../../lib/mypage.ts'
import type { MyReadBookType, ReadBookMergedType } from '../../types/mypage.ts'
import { useBookStore } from '../../store/bookStore.ts'
import CreateReadBook from './CreateReadBook.tsx'
import ReadBookItem from '../../components/mypage/read/ReadBookItem.tsx'

const ReadPage = () => {
  const [readBookIdList, setReadBookIdList] = useState<MyReadBookType[]>()
  const readBookList = useBookStore((state) => state.readBookList)
  const setBookState = useBookStore((state) => state.setBookState)
  const [isCreateReadBookPageOpen, setIsCreateReadBookPageOpen] = useState(false)

  useEffect(() => {
    let isMounted = true // 마운트 상태 확인

    const fetchData = async () => {
      try {
        const result = await getMyRead()
        setReadBookIdList(result.items)
        if (isMounted) console.log(result)
      } catch (error) {
        console.error('🚨 오류 발생:', error)
      }
    }

    fetchData()

    return () => {
      isMounted = false // 언마운트되면 상태 업데이트 막음
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!readBookIdList) return

        const promises = readBookIdList.map((readBook) => getBookInfo(readBook.book_id))
        const results = await Promise.all(promises)
        const merged: ReadBookMergedType[] = results.map((bookInfo, index) => ({
          ...bookInfo,
          read_book_id: readBookIdList[index].id,
          one_line_review: readBookIdList[index].one_line_review,
          rating: readBookIdList[index].rating,
          read_date: readBookIdList[index].read_date,
        }))

        console.log('📚 병합된 도서 리스트:', merged)
        setBookState({ readBookList: merged })
      } catch (error) {
        console.error('🚨 오류 발생:', error)
      }
    }

    fetchData()
  }, [readBookIdList])

  useEffect(() => {
    console.log('readBookIdList', readBookIdList)
    console.log('readBookList', readBookList)
  }, [])

  return isCreateReadBookPageOpen ? (
    <CreateReadBook
      onClick={() => setIsCreateReadBookPageOpen(!isCreateReadBookPageOpen)}
      setReadBookIdList={setReadBookIdList}
    />
  ) : (
    <main>
      <Header
        headerType={'DYNAMIC'}
        rightComponent={
          <button
            onClick={() => {
              setIsCreateReadBookPageOpen(true)
            }}
            className={'bg-brand-color button h-[54px] w-[58px] rounded-full text-white'}
          >
            추가
          </button>
        }
      >
        내가 읽은 책 {readBookIdList?.length}권
      </Header>
      <div className="mt-30 flex flex-col gap-y-4 px-5">
        <section className="grid grid-cols-3 gap-4">
          {readBookList.map((readBookInfo) => {
            return <ReadBookItem key={readBookInfo.read_book_id} {...readBookInfo} />
          })}
        </section>
      </div>
    </main>
  )
}
export default ReadPage
