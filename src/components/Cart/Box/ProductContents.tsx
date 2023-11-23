export default function ProductContents() {
  return (
    <div className="grid grid-cols-12 gap-10 h-40 border-t border-gray-400 items-center">
      <div>ㅁ</div>
      <div className="col-span-4">
        라로슈포제
        <br />
        라로슈포제 유비데아 안뗼톤업선크림
      </div>
      <div className="col-span-2">35,000원</div>
      <div className="flex col-span-1">
        <button>-</button>
        <div>1</div>
        <button>+</button>
      </div>
      <div>35,000원</div>
      <div className="flex flex-col col-span-3">
        <button className="">바로구매</button>
        <button>삭제</button>
      </div>
    </div>
  );
}
