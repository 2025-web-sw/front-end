import type { HeaderType } from '../../types/common.ts'
import { AlarmIcon, LeftArrowIcon } from '../../assets/svgComponents/index.ts'
import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  headerType: HeaderType
  children?: ReactNode
  onBack?: () => void
}
const Header = (props: Props) => {
  const { headerType, children, onBack } = props
  const navigate = useNavigate()
  const renderHeader = (headerType: HeaderType) => {
    switch (headerType) {
      case 'DYNAMIC':
        return (
          <div className="flex items-center justify-between px-5 py-2">
            <LeftArrowIcon
              onClick={
                onBack
                  ? onBack
                  : () => {
                      navigate(-1)
                    }
              }
              width={18}
              height={18}
            />
            <div className="title-regular-14">{children}</div>
            <div className="h-[1.125rem] w-[1.125rem]"></div>
          </div>
        )
      case 'HOME':
        return (
          <div className="flex justify-between px-5 py-3">
            <div className="head-bold-22 text-white">Logo</div>
            <AlarmIcon width={32} height={32} />
          </div>
        )
      default:
        return (
          <div className="flex justify-start px-5 py-[0.719rem]">
            <div className="heading-bold-22">{children}</div>
          </div>
        )
    }
  }

  return (
    <header
      className={`${headerType === 'HOME' ? 'bg-black' : 'bg-background'} fixed top-0 right-0 left-0 z-10 pt-[2.813rem]`}
    >
      {renderHeader(headerType)}
    </header>
  )
}
export default Header
