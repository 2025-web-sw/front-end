import { LightGrayRightArrowIcon, WhiteBookIcon } from '../../assets/svgComponents/index.ts'
import { getUserInfo } from '../../lib/mypage.ts'
import { useEffect, useState } from 'react'
import type { UserInfo } from '../../types/mypage.ts'
import { useNavigate } from 'react-router-dom'

const MyPageHeader = () => {
  const [user, setUser] = useState<UserInfo>()
  const navigate = useNavigate()

  useEffect(() => {
    let isMounted = true // 마운트 상태 확인

    const fetchData = async () => {
      try {
        const result: UserInfo = await getUserInfo()
        console.log(result)
        if (isMounted) setUser(result)
      } catch (error) {
        console.error('🚨 오류 발생:', error)
      }
    }

    fetchData()

    return () => {
      isMounted = false // 언마운트되면 상태 업데이트 막음
    }
  }, [])

  return (
    <header className="fixed top-[100px] flex w-full flex-col gap-y-[28px] bg-black p-5">
      <section className="flex items-center gap-x-3">
        <div className="flex h-[72px] w-[72px] items-center justify-center overflow-hidden">
          <img src="/profile.jpg" className="h-full w-full rounded-full object-cover" />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="title-medium-16 flex items-center gap-x-4 text-white">
            {user?.name}
            <LightGrayRightArrowIcon width={10} height={10} />
          </div>
          <div className="title-medium-14 flex items-center gap-x-3 text-white">
            <button>
              <span className="text-brand-color">{user?.follower.length}</span> 팔로워
            </button>
            <div className="border-dark-gray h-[12px] w-[1px] border-r"></div>
            <button>
              <span className="text-brand-color">{user?.following.length}</span> 팔로잉
            </button>
          </div>
        </div>
      </section>
      <section>
        <h2 className="title-medium-16 text-white">나의 책장</h2>
        <div className="flex gap-x-5 text-white">
          <button
            onClick={() => {
              navigate('/mypage/read')
            }}
            className="border-dark-gray flex w-full items-center border-b pt-3 pr-3 pb-2 pl-[6px]"
          >
            <WhiteBookIcon width={40} height={40} />
            <p className="title-medium-14">
              내가 읽은 책 <span className="text-brand-color">{user?.read_book.length}권</span>
            </p>
          </button>
          <button
            onClick={() => {
              navigate('/mypage/wish')
            }}
            className="border-dark-gray flex w-full items-center border-b pt-3 pr-3 pb-2 pl-[6px]"
          >
            <WhiteBookIcon width={40} height={40} />
            <p className="title-medium-14">
              읽고 싶은 책 <span className="text-brand-color">{user?.wish_book.length}권</span>
            </p>
          </button>
        </div>
      </section>
    </header>
  )
}
export default MyPageHeader
