type Props = {
  title: string;
  marginBottom: string;
};
export default function SubTitle({ title, marginBottom }: Props) {
  return (
    <div
      className={`${marginBottom} text-gray-900 font-inter text-lg font-normal`}
    >
      {title}
    </div>
  );
}
