import ProductInfoTitle from './ProductInfoTitle';

export default function BoxTitle() {
  return (
    <div className="subtitle flex border-b-2 border-gray-400 py-5">
      <ProductInfoTitle infoTitle="ㅁ" marginX="mx-8" />
      <ProductInfoTitle infoTitle="상품정보" marginX="mx-32" />
      <ProductInfoTitle infoTitle="판매가" marginX="mx-16" />
      <ProductInfoTitle infoTitle="수량" marginX="mx-9" />
      <ProductInfoTitle infoTitle="구매가" marginX="mx-16" />
      <ProductInfoTitle infoTitle="선택" marginX="mx-16" />
    </div>
  );
}
