import {
  SelectedBookIcon,
  SelectedHomeIcon,
  SelectedSearchIcon,
  SelectedWriteIcon,
  UnselectedBookIcon,
  UnselectedHomeIcon,
  UnselectedSearchIcon,
  UnselectedWriteIcon,
} from '../../assets/svgComponents/index.ts'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const NavBar = () => {
  const location = useLocation()
  const path = location.pathname
  const navigate = useNavigate()
  const navContents = [
    {
      content: '홈',
      selectedIcon: <SelectedHomeIcon width={40} height={40} />,
      unselectedHomeIcon: <UnselectedHomeIcon width={40} height={40} />,
      router: '/home',
    },
    {
      content: '도서검색',
      selectedIcon: <SelectedSearchIcon width={40} height={40} />,
      unselectedHomeIcon: <UnselectedSearchIcon width={40} height={40} />,
      router: '/search',
    },
    {
      content: '글쓰기',
      selectedIcon: <SelectedWriteIcon width={40} height={40} />,
      unselectedHomeIcon: <UnselectedWriteIcon width={40} height={40} />,
      router: '/write',
    },
    {
      content: '추천',
      selectedIcon: <SelectedBookIcon width={40} height={40} />,
      unselectedHomeIcon: <UnselectedBookIcon width={40} height={40} />,
      router: '/recommend',
    },
    {
      content: 'My',
      selectedIcon: (
        <div className="flex h-[1.625rem] w-[1.625rem] items-center justify-center overflow-hidden">
          <img src="/profile.jpg" className="h-full w-full rounded-full object-cover" />
        </div>
      ),
      unselectedHomeIcon: (
        <div className="flex h-[1.625rem] w-[1.625rem] items-center justify-center overflow-hidden">
          <img src="/profile.jpg" className="h-full w-full rounded-full object-cover" />
        </div>
      ),
      router: '/mypage',
    },
  ]

  useEffect(() => {
    console.log('params', path)
  }, [path])

  return (
    <nav className={'fixed right-0 bottom-0 left-0 flex w-full justify-between bg-black px-6 py-1 pb-[1.438rem]'}>
      {navContents.map((content) => {
        return (
          <div
            onClick={() => {
              navigate(content.router)
            }}
            key={content.content}
            className={`flex w-[2.5rem] flex-col items-center justify-center ${content.router === '/mypage' ? 'gap-y-[0.375rem]' : ''}`}
          >
            {path === content.router ? content.selectedIcon : content.unselectedHomeIcon}
            <p className={path === content.router ? 'caption-2 text-white' : 'caption-2 text-light-gray'}>
              {content.content}
            </p>
          </div>
        )
      })}
    </nav>
  )
}
export default NavBar
