import Header from '../components/common/Header.tsx'
import NavBar from '../components/common/NavBar.tsx'
import { useEffect, useState } from 'react'
import Post from '../components/home/Post.tsx'
import { getReviewPost } from '../lib/post.ts'
import type { PostType } from '../types/post.ts'
import { usePostStore } from '../store/postStore.ts'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [reviewPostList, setReviewPostList] = useState<PostType[]>()
  const setPostState = usePostStore((state) => state.setPostState)
  const navigate = useNavigate()
  useEffect(() => {
    let isMounted = true // 마운트 상태 확인

    const fetchData = async () => {
      try {
        const result = await getReviewPost()
        setReviewPostList(result.items)
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

  return (
    <main>
      <Header headerType={'HOME'}>Logo</Header>
      <div className="h-[100px]" />
      <section className="w-full">
        {reviewPostList?.map((reviewPost) => {
          return (
            <Post
              onClick={() => {
                setPostState({ selectedReviewPost: reviewPost })
                navigate(`/home/${reviewPost.id}`)
              }}
              postId={reviewPost.id}
              userId={reviewPost.user_id}
              bookId={reviewPost.book_id}
              reviewPost={reviewPost}
            />
          )
        })}
      </section>
      <div className="h-[6.25rem]" />
      <NavBar />
    </main>
  )
}
export default Home
