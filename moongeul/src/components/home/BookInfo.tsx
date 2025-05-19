interface Props {
  bookImage: string
  title: string
  author: string
}

const BookInfo = (props: Props) => {
  const { bookImage, title, author } = props
  return (
    <div className="border-light-gray flex items-center justify-start gap-x-2 rounded-[0.75rem] border p-2">
      <div className="flex h-[3.5rem] w-[3] items-center justify-center overflow-hidden">
        <img src={bookImage} className="h-full w-full object-cover" alt="책 이미지" />
      </div>
      <section className="flex flex-col items-start justify-start">
        <p className="title-medium-14">{title}</p>
        <p className="caption-1 text-dark-gray">{author}</p>
      </section>
    </div>
  )
}
export default BookInfo
