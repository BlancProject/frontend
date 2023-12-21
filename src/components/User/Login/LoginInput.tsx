type Props = {
  type: string;
  value: string;
  placeHolder: string;
  way: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyPress: React.KeyboardEventHandler<HTMLDivElement>;
};

export default function LoginInput({
  type,
  value,
  placeHolder,
  way,
  onChange,
  onKeyPress,
}: Props) {
  return (
    <input
      className={`${way} pl-11`}
      type={type}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeHolder}
    />
  );
}
