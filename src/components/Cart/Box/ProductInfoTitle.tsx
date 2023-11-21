type Props = {
  infoTitle: string;
  marginX: string;
};

export default function ProductInfoTitle({ infoTitle, marginX }: Props) {
  return (
    <div className={`${marginX} text-gray-500 font-semibold`}>{infoTitle}</div>
  );
}
