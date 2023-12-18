type Props = {
  width: string;
  title: string;
};
export default function Title({ width, title }: Props) {
  return (
    <div className={`text-gray-600 font-semibold ${width} text-center`}>
      {title}
    </div>
  );
}
