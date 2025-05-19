import InteractionBar from '../components/home/InteractionBar.tsx'
import Header from '../components/common/Header.tsx'
import BookInfo from '../components/home/BookInfo.tsx'
import QuotePostList from '../components/home/QuotePostList.tsx'
import PostMeta from '../components/home/PostMeta.tsx'
import { OptionMenuIcon } from '../assets/svgComponents/index.ts'
import Profile from '../components/home/Profile.tsx'
import QuotePostTotalPage from '../components/home/QuotePostTotalPage.tsx'
import { useState } from 'react'

const PostDetail = () => {
  const [isQuotePostTotalPageOpen, setIsQuotePostTotalPageOpen] = useState(false)

  return (
    <main>
      {isQuotePostTotalPageOpen ? (
        <QuotePostTotalPage setIsQuotePostTotalPageOpen={setIsQuotePostTotalPageOpen} />
      ) : (
        <>
          <Header
            headerType={'DYNAMIC'}
            rightComponent={<OptionMenuIcon width={12} height={12} onClick={() => {}} />}
          ></Header>
          <div className="h-[79px]" />

          <section className="flex flex-col gap-y-6 px-5 py-4">
            <section className="flex flex-col gap-y-3">
              <Profile profileImage={'/profile.jpg'} followCount={141} nickName={'겨냠'} />
              <BookInfo
                bookImage={'/book-img.png'}
                title={'블랙 쇼맨과 이름 없는 마을의 살인'}
                author={'히가시노 게이고'}
              />
              <p className="body-regular-16">
                블랙쇼맨과 이름없는 마을의 살인"은 일본의 유명 작가 히가시노 게이고의 미스터리 소설입니다. 히가시노
                게이고는 그의 복잡하고 정교한 플롯과 인간 심리에 대한 깊이 있는 통찰로 잘 알려져 있으며, 이 작품도
                예외는 아닙니다. <br />
                이 소설은 블랙쇼맨이라는 신비로운 인물을 중심으로 전개됩니다. 블랙쇼맨과 이름없는 마을의 살인"은 일본의
                유명 작가 히가시노 게이고의 미스터리 소설입니다. 히가시노 게이고는 그의 복잡하고 정교한 플롯과 인간
                심리에 대한 깊이 있는 통찰로 잘 알려져 있으며, 이 작품도 예외는 아닙니다. 이 소설은 블랙쇼맨이라는
                신비로운 인물을 중심으로 전개됩니다.
                <br /> 블랙쇼맨과 이름없는 마을의 살인"은 일본의 유명 작가 히가시노 게이고의 미스터리 소설입니다.
                히가시노 게이고는 그의 복잡하고 정교한 플롯과 인간 심리에 대한 깊이 있는 통찰로 잘 알려져 있으며, 이
                작품도 예외는 아닙니다.
              </p>
              <PostMeta />
            </section>
            <QuotePostList onClick={() => setIsQuotePostTotalPageOpen(!isQuotePostTotalPageOpen)} />
          </section>

          <div className="h-[76px]" />
          <InteractionBar
            likeCount={5}
            commentCount={7}
            quoteCount={3}
            setIsQuotePostTotalPageOpen={setIsQuotePostTotalPageOpen}
          />
        </>
      )}
    </main>
  )
}
export default PostDetail
