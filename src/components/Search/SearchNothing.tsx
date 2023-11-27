import { PiWarningCircle } from 'react-icons/pi';

type Props = {
  keyword: string | null;
};

export default function SearchNothing({ keyword }: Props) {
  return (
    <div className="h-80 flex  items-center justify-center border-gray-200 border-t-2">
      <div className="flex flex-col items-center">
        <PiWarningCircle size={100} color="#CBCBCB" />
        <div className="text-xl  mt-4">
          검색하신 <span className="text-purple-600 font-bold">{keyword}</span>
          에 대한 검색 결과가 없습니다.
        </div>
      </div>
    </div>
  );
}
