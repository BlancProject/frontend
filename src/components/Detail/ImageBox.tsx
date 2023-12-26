import Image from 'next/image';
import { useState } from 'react';

export default function ImageBox() {
  const [imgSelected, setImgSelected] = useState('skin1');
  return (
    <div className="flex flex-col">
      <Image
        src={`/img/${imgSelected}.png`}
        alt=""
        className={'justify-center items-center justify-items-center'}
        width={450}
        height={450}
      />
      <div className="flex pt-5 justify-center">
        <Image
          src="/img/skin1.png"
          alt=""
          className={`mr-3 ${
            imgSelected === 'skin1' ? 'border border-black' : ''
          }`}
          onClick={(e) => {
            e.preventDefault();
            setImgSelected('skin1');
          }}
          width={80}
          height={80}
        />
        <Image
          src="/img/skin2.png"
          alt=""
          className={`mr-3 ${
            imgSelected === 'skin2' ? 'border border-black' : ''
          }`}
          onClick={(e) => {
            e.preventDefault();
            setImgSelected('skin2');
          }}
          width={80}
          height={80}
        />
        <Image
          src="/img/skin3.png"
          alt=""
          className={`${imgSelected === 'skin3' ? 'border border-black' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            setImgSelected('skin3');
          }}
          width={80}
          height={80}
        />
      </div>
    </div>
  );
}
