import './App.css'
import {UncheckIcon} from "./assets/svgComponents";

function App() {

  return (
      <>
          <UncheckIcon width={20} height={20}></UncheckIcon>
          <button className="w-[199px] bg-black">안녕</button>
          <button className="complete-brand-button">완료</button>
          <button className="edit-button">수정</button>
          <button className="active-button">추가하기</button>
          <button className="disabled-button">추가하기</button>
          <button className="third-button">추가하기</button>
          <button className="secondary-button">추가하기</button>

          <button className="unfollowing-button">추가하기</button>
          <button className="follow-button">추가하기</button>
          <button className="following-button">추가하기</button>
          <div className={'tag-chip'}>#따듯함</div>

          <div className={'default-tag'}>태그</div>
          <div className={'active-tag'}>태그</div>
      </>
  )
}

export default App
