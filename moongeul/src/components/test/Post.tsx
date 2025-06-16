import { GrayCommentIcon, GrayHeartIcon, GrayQuoteIcon, OptionIcon } from '../../assets/svgComponents/index.ts'

export default function Post() {
  return (
    <div className="border px-[20px] py-[16px]">
      {/* 프로필 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-[4px]">
          <img src={'/Ellipse 12.png'} width={40} height={40}></img>
          <div className="flex gap-x-[4px]">
            <p className="title-medium-14">유리미</p>
            <p className="text-dark-gray">|</p>
            <p className="title-regular-14 text-dark-gray">감상평</p>
          </div>
        </div>
        <OptionIcon></OptionIcon>
      </div>
      {/* 내용 */}
      <div className="flex flex-col gap-y-[8px] pl-[40px]">
        {/* 책 정보 */}
        <div className="border-light-gray flex items-center gap-x-2 rounded rounded-[12px] border p-[8px]">
          <img alt="책" src={'book-img.png'} width={40} height={56} className="px-[5px]"></img>
          <div className="flex flex-col">
            <p className="title-medium-14">블랙 쇼맨과 이름 없는 마을의 살인</p>
            <p className="caption-1 text-dark-gray">히가시노 게이고</p>
          </div>
        </div>
        {/* 내용 */}
        <div>
          블랙쇼맨과 이름없는 마을의 살인"은 일본의 유명 작가 히가시노 게이고의 미스터리 소설입니다. 히가시노 게이고는
          그의 복잡하고 정교한 플롯과 인간 심리에 대한 깊이 있는 통찰로 잘 알려져 있으며, 이 작품도 예외는 아닙니다. 이
          소설은 블랙쇼맨이라는 신비로운 인물을 중심으로 전개됩니다. 블랙쇼맨과 이름없는 마을의 살인"은 일본의 유명 작가
          히가시노 게이고의 미스터리 소설입니다. 히가시노 게이고는 그의 복잡하고 정교한 플롯과 인간 심리에 대한 깊이
          있는 통찰로 잘 알려져 있으며, 이 작품도 예외는 아닙니다. 이 소설은 블랙쇼맨이라는 신비로운 인물을 중심으로
          전개됩니다. 블랙쇼맨과 이름없는 마을의 살인"은 일본의 유명 작가 히가시노 게이고의 미스터리 소설입니다.
          히가시노 게이고는 그의 복잡하고 정교한 플롯과 인간 심리에 대한 깊이 있는 통찰로 잘 알려져 있으며, 이 작품도
          예외는 아닙니다.
        </div>
        {/* 좋아요, 댓글, 인용 */}
        <div className="flex gap-x-[40px]">
          <div className="flex items-center gap-x-[4px]">
            <GrayHeartIcon width={24} height={24} />
            <p className="text-dark-gray text-[14px]">5</p>
          </div>
          <div className="flex items-center gap-x-[4px]">
            <GrayCommentIcon width={24} height={24} />
            <p className="text-dark-gray text-[14px]">5</p>
          </div>
          <div className="flex items-center gap-x-[4px]">
            <GrayQuoteIcon width={24} height={24} />
            <p className="text-dark-gray text-[14px]">5</p>
          </div>
        </div>
      </div>
    </div>
  )
}
//CSS
//tailwindCSS -> CSS
// 문법: border: 테두리,
// w-[]: 넓이, h-[]: 높이,
// bg-[#141414]: background,
// p-[16px]: padding, m-[16px]
//flex: 가로로 정렬하고 싶어, flex flex-col: 세로로 정렬해야해
//items-center: div div 들 간에 중앙 정렬
//flex justify-center: 전체 div에서 중앙 정렬,
//flex justify-between: div div가 있는데 나머지 빈 여백을 꽉 채우고 싶어
//gap: div 들 간에 margin 을 주고 싶을 때
//text-[] size 14px, 색 #646464
//rounded rounded-[16px]
//border border-[#646464]
