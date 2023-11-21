type Props = {
  title: string;
  skinType: string;
  setSkinType: (skinType: string) => void;
};
export default function SkinTypeBtn({ title, skinType, setSkinType }: Props) {
  return (
    <button
      className={`w-36 h-12 border ${
        skinType === title
          ? 'border-solid border-purple-600 bg-purple-100 text-purple-900 font-inter font-bold '
          : 'border-gray-200'
      } rounded-md mr-3 mb-5`}
      onClick={() => setSkinType(title)}
    >
      {title}
    </button>
  );
}
