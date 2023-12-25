export default function UserInfo() {
  return (
    <div>
      <div className="text-3xl ml-4 mt-1 mb-9 font-bold leading-normal tracking-wider">
        홍길동님
      </div>
      <div className="flex  text-lg font-bold leading-normal tracking-wider">
        <div className="w-36 pl-5 ">
          <div className="mb-5">이메일</div>
          <div className="mb-12">비밀번호</div>
          <div className="mb-5">주소</div>
          <div className="mb-5">성별</div>
          <div className="mb-5">피부타입</div>
          <div className="mb-5">피부고민</div>
        </div>
        <div className="w-132 pl-4 font-medium">
          <div className="mb-5">testman@gmail.com</div>
          <div className="mb-12">testman1234!</div>
          <div className="mb-5">대한민국</div>
          <div className="mb-5">남자</div>
          <div className="mb-5">건성</div>
          <div className="mb-5">여드름, 아토피, 민감성</div>
        </div>
      </div>
    </div>
  );
}
