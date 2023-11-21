'use client';

import { usePathname } from 'next/navigation';

type Props = {
  infoLabel: string;
};

export default function InfoLabel({ infoLabel }: Props) {
  const pathName = usePathname();
  let labelCheck = '';
  if (pathName === '/cart') labelCheck = '장바구니';
  else if (pathName === '/order') labelCheck = '주문/결제';
  else if (pathName === '/finish') labelCheck = '완료';

  return (
    <div
      className={`${
        labelCheck === infoLabel ? '' : 'text-gray-400'
      } text-base font-bold`}
    >
      {infoLabel}
    </div>
  );
}
