export default function Category({ params }: { params: { category: string } }) {
  return <div>{params.category}</div>;
}
