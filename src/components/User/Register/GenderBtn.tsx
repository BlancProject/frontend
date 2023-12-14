type Props = {
  title: string;
  gender: string;
  setGender: (gender: string) => void;
};

export default function GenderBtn({ title, gender, setGender }: Props) {
  return (
    <button
      className={`w-48 mr-4 h-12 border  rounded-md ${
        gender === title
          ? 'border-solid border-purple-600 bg-purple-100 text-purple-900 font-inter font-bold '
          : 'border-gray-200'
      }`}
      onClick={() => setGender(title)}
    >
      {title}
    </button>
  );
}
