import QuotePost from './QuotePost.tsx'
import { GrayRightIcon } from '../../assets/svgComponents/index.ts'

interface Props {
  onClick: () => void
}

const QuotePostList = (props: Props) => {
  const { onClick } = props
  return (
    <div className={'border-dark-gray flex flex-col gap-y-1 border-t'}>
      <section className="flex justify-between py-3">
        <h3 className="title-medium-16">위 글을 인용한 글</h3>
        <button onClick={onClick} className="body-regular-14 text-dark-gray flex items-center gap-x-1">
          더보기 <GrayRightIcon width={10} height={10} />
        </button>
      </section>

      <section className="flex gap-x-3 overflow-x-scroll">
        <QuotePost
          isBookInfo={false}
          nickName={'우림'}
          postType={'감상평'}
          author={'rusia9217'}
          profileImage={'/profile.jpg'}
          bookImage={'/book-img.png'}
          title={'블랙 쇼맨과 이름 없는 마을의 살인'}
        >
          블랙쇼맨과 이름없는 마을의 살인"은 일본의 유명 작가 히가시노 게이고의 미스터리 소설입니다. 히가시노 게이고는
          그의 복잡하고 정교한 플롯과 인간 심리에 대한 깊이 있는 통찰로 잘 알려져 있으며, 이 작품도 예외는
          아닙니다.{' '}
        </QuotePost>
        <QuotePost
          isBookInfo={false}
          nickName={'우림'}
          postType={'감상평'}
          author={'rusia9217'}
          profileImage={'/profile.jpg'}
          bookImage={'/book-img.png'}
          title={'블랙 쇼맨과 이름 없는 마을의 살인'}
        >
          블랙쇼맨과 이름없는 마을의 살인"은 일본의 유명 작가 히가시노 게이고의 미스터리 소설입니다. 히가시노 게이고는
          그의 복잡하고 정교한 플롯과 인간 심리에 대한 깊이 있는 통찰로 잘 알려져 있으며, 이 작품도 예외는
          아닙니다.{' '}
        </QuotePost>
      </section>
    </div>
  )
}
export default QuotePostList
