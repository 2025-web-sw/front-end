import NavBar from '../components/common/NavBar.tsx'
import Header from '../components/common/Header.tsx'
import MyPageHeader from '../components/mypage/MyPageHeader.tsx'
import MyPosts from './mypage/MyPosts.tsx'
import MyComments from './mypage/MyComments.tsx'
import LikedPosts from './mypage/LikedPosts.tsx'
import QuotedPosts from './mypage/QuotedPosts.tsx'
import PrivacySetting from './mypage/PrivacySetting.tsx'
import { BlackRightArrowIcon } from '../assets/svgComponents/index.ts'

const MyPage = () => {
  const mypageContents = [
    { content: '내가 쓴 글', component: <MyPosts /> },
    { content: '내가 쓴 댓글', component: <MyComments /> },
    { content: '좋아요 누른 게시글', component: <LikedPosts /> },
    { content: '인용된 글', component: <QuotedPosts /> },
    { content: '정보 공개 여부 설정', component: <PrivacySetting /> },
  ]
  return (
    <div className="relative">
      <Header headerType={'HOME'} />=
      <MyPageHeader />
      <div className="h-[320px]" />
      <section className="flex flex-col gap-y-2 px-5 pt-[10px]">
        {mypageContents.map((content) => {
          return (
            <div className="border-light-gray flex justify-between border-b py-3 pr-2">
              <p className="title-regular-16">{content.content}</p>
              <BlackRightArrowIcon width={18} height={18} />
            </div>
          )
        })}
        <div className="border-light-gray flex justify-between border-b py-3 pr-2">
          <p className="title-regular-16">로그아웃</p>
          <BlackRightArrowIcon width={18} height={18} />
        </div>
      </section>
      <div className="h-[80px]" />
      <NavBar />
    </div>
  )
}
export default MyPage
