export default function Mypage({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}
