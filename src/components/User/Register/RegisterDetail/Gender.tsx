import GenderBtn from '../GenderBtn';
import SubTitle from '../SubTitle';

type Props = {
  gender: string;
  setGender: (gender: string) => void;
};

export default function Gender({ gender, setGender }: Props) {
  return (
    <div>
      <SubTitle title="성별" marginBottom="mb-4" />
      <div className="mb-7">
        <GenderBtn title="남성" gender={gender} setGender={setGender} />
        <GenderBtn title="여성" gender={gender} setGender={setGender} />
      </div>
    </div>
  );
}
