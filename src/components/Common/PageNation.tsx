import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

type Props = {
  totalPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function PageNation({ totalPage, setPage }: Props) {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(
        <button
          className="mx-2"
          onClick={() => {
            setPage(i - 1);
          }}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center pt-4 pb-8">
      <IoIosArrowBack size="20" className="mr-3" />
      {renderPageNumbers()}
      <IoIosArrowForward size="20" className="ml-3" />
    </div>
  );
}
