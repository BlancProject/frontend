import Link from 'next/link';

type Props = {
  link: string;
  category: string;
};

export default function CategoryLink({ link, category }: Props) {
  return (
    <Link
      className="border-b border-stone-400 text-lg py-3 font-semibold"
      href={link}
    >
      {category}
    </Link>
  );
}
