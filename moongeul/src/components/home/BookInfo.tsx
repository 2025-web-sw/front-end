interface Props {
  bookImage: string | undefined
  title: string | undefined
  author: string | undefined
  id: string | undefined
}

const BookInfo = (props: Props) => {
  const { bookImage, title, author, id } = props
  return (
    <div className="border-light-gray flex items-center justify-start gap-x-2 rounded-[0.75rem] border p-2">
      <div className="flex h-[3.5rem] w-[3.5rem] items-center justify-center overflow-hidden">
        <img
          src={`http://127.0.0.1:8090/api/files/pbc_3057622215/${id}/${bookImage}`}
          className="h-full w-full object-cover"
          alt="책 이미지"
        />
      </div>
      <section className="flex flex-col items-start justify-start">
        <p className="title-medium-14">{title}</p>
        <p className="caption-1 text-dark-gray">{author}</p>
      </section>
    </div>
  )
}
export default BookInfo
