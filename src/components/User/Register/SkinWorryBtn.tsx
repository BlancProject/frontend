type Props = {
  title: string;
  skinWorry: string[];
  handleSkinWorryButtonClick: (title: string) => void;
};
export default function SkinWorryBtn({
  title,
  skinWorry,
  handleSkinWorryButtonClick,
}: Props) {
  return (
    <button
      className={`w-36 h-12 border border-gray-200 rounded-md mr-3 mb-5 ${
        skinWorry.includes(title) ||
        (title === '해당없음' && skinWorry.length === 0)
          ? 'border-solid border-purple-600 bg-purple-100 text-purple-900 font-inter font-bold '
          : 'border-gray-200'
      }`}
      onClick={() => handleSkinWorryButtonClick(title)}
    >
      {title}
    </button>
  );
}
