export default function Withdraw() {
  return (
    <div className="ml-4 leading-normal">
      <div className="text-3xl mt-1 mb-9 font-bold tracking-wider mb-12">
        회원탈퇴를 진행하시겠습니까?
      </div>
      <div className="text-red-600 font-inter mb-32">
        * 회원정보는 모두 사라집니다
      </div>
      <button className="w-28 ml-72 h-8 mt-4 rounded-md border border-solid border-purple-600 text-purple-600 text-xs font-bold">
        회원 탈퇴
      </button>
    </div>
  );
}
