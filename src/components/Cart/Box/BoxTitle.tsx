import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';

export default function BoxTitle() {
  return (
    <div className="subtitle flex border-b-2 border-gray-400 py-5 text-gray-500 font-semibold">
      <MdOutlineCheckBoxOutlineBlank className="mx-8" size="22" color="black" />
      <div className="mx-32">상품정보</div>
      <div className="mx-16">판매가</div>
      <div className="mx-9">수량</div>
      <div className="mx-16">구매가</div>
      <div className="mx-16">선택</div>
    </div>
  );
}
