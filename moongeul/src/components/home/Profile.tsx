const Profile = ({
  isFollowCount = true,
  profileImage,
  nickName,
  followCount,
  id,
}: {
  isFollowCount?: boolean
  profileImage: string | undefined
  nickName: string | undefined
  followCount: number | undefined
  id: string | undefined
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <div className="flex h-[3.25rem] w-[3.25rem] items-center justify-center overflow-hidden">
          <img
            src={`http://127.0.0.1:8090/api/files/_pb_users_auth_/${id}/${profileImage}`}
            className="h-full w-full rounded-full object-cover"
            alt="프로필 이미지"
          />
        </div>
        <div className="flex flex-col">
          <p className="title-medium-16">{nickName}</p>
          {isFollowCount && <p className="body-regular-14 text-dark-gray">{followCount} Followers</p>}
        </div>
      </div>
      <button className="follow-button">팔로우</button>
    </div>
  )
}
export default Profile
