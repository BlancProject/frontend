import InfoLabel from './InfoLabel';

export default function Procedure() {
  return (
    <div className="flex mt-3">
      <InfoLabel infoLabel="장바구니" />
      <InfoLabel infoLabel="주문/결제" />
      <InfoLabel infoLabel="완료" />
    </div>
  );
}
