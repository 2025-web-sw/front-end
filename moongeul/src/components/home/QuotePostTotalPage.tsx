import Header from '../common/Header.tsx'
import Post from './Post.tsx'
import QuotePost from './QuotePost.tsx'

interface Props {
  setIsQuotePostTotalPageOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const QuotePostTotalPage = (props: Props) => {
  const { setIsQuotePostTotalPageOpen } = props
  return (
    <main>
      <Header headerType={'DYNAMIC'} onBack={() => setIsQuotePostTotalPageOpen(false)}>
        인용한 글
      </Header>
      <div className={'h-[5.375rem]'} />
      <section className="w-full">
        <Post postId={2}>
          <Post.Profile postType={'감상평'} nickName={'rusia9217'} profileImage={'/profile.jpg'} />
          <section className="flex flex-col gap-y-2 pl-[2.5rem]">
            <QuotePost
              nickName={'우림'}
              postType={'감상평'}
              author={'rusia9217'}
              profileImage={'/profile.jpg'}
              bookImage={'/book-img.png'}
              title={'블랙 쇼맨과 이름 없는 마을의 살인'}
            >
              블랙쇼맨과 이름없는 마을의 살인"은 일본의 유명 작가 히가시노 게이고의 미스터리 소설입니다. 히가시노
              게이고는 그의 복잡하고 정교한 플롯과 인간 심리에 대한 깊이 있는 통찰로 잘 알려져 있으며, 이 작품도 예외는
              아닙니다.{' '}
            </QuotePost>
            <Post.Content>
              블랙쇼맨과 이름없는 마을의 살인"은 일본의 유명 작가 히가시노 게이고의 미스터리 소설입니다. 히가시노
              게이고는 그의 복잡하고 정교한 플롯과 인간 심리에 대한 깊이 있는 통찰로 잘 알려져 있으며, 이 작품도 예외는
              아닙니다.{' '}
            </Post.Content>
            <Post.InteractionBar quoteCount={4} likeCount={6} commentCount={2} />
          </section>
        </Post>

        <Post postId={2}>
          <Post.Profile postType={'감상평'} nickName={'rusia9217'} profileImage={'/profile.jpg'} />
          <section className="flex flex-col gap-y-2 pl-[2.5rem]">
            <QuotePost
              nickName={'우림'}
              postType={'감상평'}
              author={'rusia9217'}
              profileImage={'/profile.jpg'}
              bookImage={'/book-img.png'}
              title={'블랙 쇼맨과 이름 없는 마을의 살인'}
            >
              블랙쇼맨과 이름없는 마을의 살인"은 일본의 유명 작가 히가시노 게이고의 미스터리 소설입니다. 히가시노
              게이고는 그의 복잡하고 정교한 플롯과 인간 심리에 대한 깊이 있는 통찰로 잘 알려져 있으며, 이 작품도 예외는
              아닙니다.{' '}
            </QuotePost>
            <Post.Content>
              블랙쇼맨과 이름없는 마을의 살인"은 일본의 유명 작가 히가시노 게이고의 미스터리 소설입니다. 히가시노
              게이고는 그의 복잡하고 정교한 플롯과 인간 심리에 대한 깊이 있는 통찰로 잘 알려져 있으며, 이 작품도 예외는
              아닙니다.{' '}
            </Post.Content>
            <Post.InteractionBar quoteCount={4} likeCount={6} commentCount={2} />
          </section>
        </Post>
      </section>
    </main>
  )
}
export default QuotePostTotalPage
