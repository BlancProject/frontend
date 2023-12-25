type Props = {
  activeMenuItem: string;
  setActiveMenuItem: React.Dispatch<React.SetStateAction<string>>;
};

export default function MenuBar({ activeMenuItem, setActiveMenuItem }: Props) {
  const handleMenuItemClick = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="w-56">
      <div className="text-center text-xl font-bold leading-normal tracking-widest mb-11">
        마이페이지
      </div>
      <div className="ml-7">
        <div className="text-base font-medium leading-normal tracking-wider">
          회원정보
        </div>
        <div className="ml-2.5 mt-4 mb-8 font-inter text-sm font-medium leading-normal tracking-wider">
          <div
            className={`mb-2 cursor-pointer ${
              activeMenuItem === '조회'
                ? 'font-bold text-black'
                : 'text-gray-500'
            }`}
            onClick={() => handleMenuItemClick('조회')}
          >
            조회
          </div>
          <div
            className={`cursor-pointer ${
              activeMenuItem === '탈퇴'
                ? 'font-bold text-black'
                : 'text-gray-500'
            }`}
            onClick={() => handleMenuItemClick('탈퇴')}
          >
            탈퇴
          </div>
        </div>
        <div className="text-base font-medium leading-normal tracking-wider">
          쇼핑정보
        </div>
        <div className="ml-2.5 mt-4 text-gray-500 font-inter text-sm font-medium leading-normal tracking-wider">
          <div
            className={`mb-2 cursor-pointer ${
              activeMenuItem === '주문목록'
                ? 'font-bold text-black'
                : 'text-gray-500'
            }`}
            onClick={() => handleMenuItemClick('주문목록')}
          >
            주문목록
          </div>
          <div
            className={`cursor-pointer ${
              activeMenuItem === '찜리스트'
                ? 'font-bold text-black'
                : 'text-gray-500'
            }`}
            onClick={() => handleMenuItemClick('찜리스트')}
          >
            찜리스트
          </div>
        </div>
      </div>
    </div>
  );
}
