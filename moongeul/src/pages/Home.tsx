import Header from '../components/common/Header.tsx'
import NavBar from '../components/common/NavBar.tsx'
import HomeMenu from '../components/home/HomeMenu.tsx'
import { useState } from 'react'
import type { HomeMenuType } from '../types/home.ts'
import Post from '../components/home/Post.tsx'
import BookInfo from '../components/home/BookInfo.tsx'
import QuotePost from '../components/home/QuotePost.tsx'

const Home = () => {
  const [selectedHomeMenuContent, setSelectedHomeMenuContent] = useState<HomeMenuType>('전체')

  return (
    <main>
      <Header headerType={'HOME'}>Logo</Header>
      <HomeMenu
        selectedHomeMenuContent={selectedHomeMenuContent}
        setSelectedHomeMenuContent={setSelectedHomeMenuContent}
      />
      <div className="h-[8.5rem]" />
      <section className="w-full">
        <Post postId={1}>
          <Post.Profile postType={'감상평'} nickName={'rusia9217'} profileImage={'/profile.jpg'} />
          <section className="flex flex-col gap-y-2 pl-[2.5rem]">
            <BookInfo
              title={'블랙 쇼맨과 이름 없는 마을의 살인'}
              bookImage={'/book-img.png'}
              author={'히가시노 게이고'}
            />
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
      <div className="h-[6.25rem]" />
      <NavBar />
    </main>
  )
}
export default Home
