const Profile = ({
  isFollowCount = true,
  profileImage,
  nickName,
  followCount,
}: {
  isFollowCount?: boolean
  profileImage: string
  nickName: string
  followCount: number
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <div className="flex h-[52px] w-[52px] items-center justify-center overflow-hidden">
          <img src={profileImage} className="h-full w-full rounded-full object-cover" alt="프로필 이미지" />
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
