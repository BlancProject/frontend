type Props = {
  title: string;
  placeholder: string;
};

export default function InputBox({ title, placeholder }: Props) {
  return (
    <div>
      <div className="mb-4">* {title}</div>
      <input
        className="border border-gray-200 rounded-md w-full h-12 pl-8 mb-4"
        placeholder={placeholder}
      />
    </div>
  );
}
