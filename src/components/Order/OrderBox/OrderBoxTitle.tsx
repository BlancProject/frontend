import Title from './Title';

export default function OrderBoxTitle() {
  return (
    <div className="flex items-center border-t border-b border-solid border-black bg-gray-200 h-12">
      <Title width="w-96" title="상품정보" />
      <Title width="w-60" title="판매가" />
      <Title width="w-28" title="수량" />
      <Title width="w-72" title="구매가" />
    </div>
  );
}
