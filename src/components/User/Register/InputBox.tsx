type Props = {
  title: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyPress: React.KeyboardEventHandler<HTMLDivElement>;
};

export default function InputBox({
  title,
  placeholder,
  type,
  value,
  onChange,
  onKeyPress,
}: Props) {
  return (
    <div>
      <div className="mb-4">* {title}</div>
      <input
        value={value}
        className="border border-gray-200 rounded-md w-full h-12 pl-8 mb-4"
        placeholder={placeholder}
        type={type}
        onKeyPress={onKeyPress}
        onChange={onChange}
      />
    </div>
  );
}
