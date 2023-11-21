export default function Footer() {
  return (
    <div className="footer flex items-center justify-end  fixed left-0 bottom-0 w-full h-24 border-t border-gray-300 bg-gray-50">
      <div className="flex mx-20">
        <div className="text-xl font-bold mt-2.5">총 주문금액</div>
        <div className="text-2xl font-bold ml-3.5 mt-2">158,000원</div>
        <button className="w-48 h-12 rounded-md bg-purple-400 ml-10 text-white text-lg font-semibold">
          주문하기
        </button>
      </div>
    </div>
  );
}
