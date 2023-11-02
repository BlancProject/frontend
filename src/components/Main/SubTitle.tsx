type Props = {
  subtitle: string;
};

export default function SubTitle({ subtitle }: Props) {
  return <div className="text-xl font-semibold ml-3 mb-2.5">{subtitle}</div>;
}
