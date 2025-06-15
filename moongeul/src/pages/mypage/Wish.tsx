import Header from '../../components/common/Header.tsx'
import { useEffect, useState } from 'react'
import { getBookInfo, getMyWish } from '../../lib/mypage.ts'
import type { MyWishBookType, WishBookMergedType } from '../../types/mypage.ts'
import { OptionIcon } from '../../assets/svgComponents/index.ts'
import WishDetailModal from '../../components/mypage/wish/WishDetailModal.tsx'
import CreateWishBook from './CreateWishBook.tsx'

const Wish = () => {
  const [myWishList, setMyWishList] = useState<MyWishBookType[]>()
  const [wishBookMergedList, setWishBookMergedList] = useState<WishBookMergedType[] | undefined>()
  const [isWishDetailModalOpen, setIsWishDetailModalOpen] = useState(false)
  const [isCreateWishBookModalOpen, setIsCreateWishBookModalOpen] = useState(false)
  const [selectedWishBook, setSelectedWishBook] = useState<WishBookMergedType>()

  useEffect(() => {
    let isMounted = true // 마운트 상태 확인

    const fetchData = async () => {
      try {
        const result = await getMyWish()
        setMyWishList(result.items)
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
        if (!myWishList) return

        console.log('myWishList', myWishList)

        const promises = myWishList.map((wishBook) => getBookInfo(wishBook.book_id))
        const results = await Promise.all(promises)
        console.log('results', results)
        const merged: WishBookMergedType[] = results.map((bookInfo, index) => ({
          ...bookInfo,
          reason: myWishList[index].reason,
          wish_book_id: myWishList[index].id,
        }))

        console.log('📚 병합된 도서 리스트:', merged)
        setWishBookMergedList(merged)
      } catch (error) {
        console.error('🚨 오류 발생:', error)
      }
    }

    fetchData()
  }, [myWishList])

  return isCreateWishBookModalOpen ? (
    <CreateWishBook
      setMyWishList={setMyWishList}
      onClick={() => setIsCreateWishBookModalOpen(!isCreateWishBookModalOpen)}
    />
  ) : (
    <main>
      {isWishDetailModalOpen && (
        <WishDetailModal
          author={selectedWishBook?.author}
          onClick={() => setIsWishDetailModalOpen(!isWishDetailModalOpen)}
          title={selectedWishBook?.title}
          reason={selectedWishBook?.reason}
          id={selectedWishBook?.wish_book_id}
          setMyWishList={setMyWishList}
        />
      )}
      <Header
        rightComponent={
          <button
            onClick={() => {
              setIsCreateWishBookModalOpen(!isCreateWishBookModalOpen)
            }}
            className={'bg-brand-color button h-[54px] w-[58px] rounded-full text-white'}
          >
            추가
          </button>
        }
        headerType={'DYNAMIC'}
      >
        내가 읽고 싶은 책
      </Header>
      <div className="h-[120px]" />
      <section className="flex w-full flex-col px-5">
        {wishBookMergedList?.map((wishBook) => {
          return (
            <div
              onClick={() => {
                setSelectedWishBook(wishBook)
                setIsWishDetailModalOpen(true)
              }}
              key={wishBook.wish_book_id}
              className="border-light-gray flex w-full items-center border-b py-4"
            >
              <img
                className="mx-3 flex gap-x-2"
                width={67}
                height={100}
                src={`http://127.0.0.1:8090/api/files/pbc_3057622215/${wishBook.id}/${wishBook.book_image}`}
              />
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <p className="title-medium-16">{wishBook.title}</p>
                  <OptionIcon width={3} height={12} />
                </div>
                <p className="body-regular-14 text-dark-gray mt-[20px]">{wishBook.author}</p>
                <p className="body-regular-14 text-deep-dark-gray line-clamp-1 max-w-[230px] truncate">
                  {wishBook.reason}
                </p>
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}
export default Wish
