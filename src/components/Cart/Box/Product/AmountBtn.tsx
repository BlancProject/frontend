import baseInstance from '@/api/api-instance';

type Props = {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  id: number;
};

export default function AmountBtn({ amount, setAmount, id }: Props) {
  return (
    <div className="grid grid-cols-4 divide-x text-center w-16 h-6 rounded-sm border border-solid border-gray-300">
      <button
        onClick={async () => {
          if (amount > 1) {
            const newAmount = amount - 1;
            setAmount(newAmount);
            try {
              await baseInstance.put(`/carts/${id}?quantity=${newAmount}`);
            } catch (error) {
              alert(error);
            }
          }
        }}
      >
        -
      </button>
      <div className="col-span-2">{amount}</div>
      <button
        onClick={async () => {
          const newAmount = amount + 1;
          setAmount(newAmount);
          try {
            await baseInstance.put(`/carts/${id}?quantity=${newAmount}`);
          } catch (error) {
            alert(error);
          }
        }}
      >
        +
      </button>
    </div>
  );
}
