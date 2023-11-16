'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { GoCheckCircle } from 'react-icons/go';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('id'); // 'id' or 'sns'

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link className="text-6xl font-light mb-10" href={'/'}>
        BLANC
      </Link>

      <div className="loginBox w-full max-w-lg mt-9 mb-10 h-96 rounded-2xl border-x border-b border-stone-400 border-solid">
        <Tabs>
          <TabList className="flex grid grid-cols-2 divide-x h-14">
            <Tab
              className={`flex text-center items-center justify-center rounded-t-2xl border-t border-stone-300 ${
                activeTab === 'id' ? '' : 'bg-gray-100'
              }`}
              onClick={() => handleTabClick('id')}
            >
              <BiLogIn className="mr-2" size="22" color="C084FC" />
              ID 로그인
            </Tab>
            <Tab
              className={`flex text-center items-center justify-center rounded-t-2xl border-t border-stone-300 ${
                activeTab === 'sns' ? '' : 'bg-gray-100'
              }`}
              onClick={() => handleTabClick('sns')}
            >
              <AiOutlineGlobal className="mr-2" size="22" color="C084FC" />
              SNS 로그인
            </Tab>
          </TabList>

          <TabPanel className="px-10">
            <div className="inputBox max-w-md w-full h-32 rounded-2xl border border-stone-300 border-solid grid grid-cols-1 divide-y mt-9 mb-4">
              <input
                className="rounded-t-2xl pl-11"
                type="text"
                placeholder="아이디"
              />
              <input
                className="rounded-b-2xl pl-11"
                type="password"
                placeholder="비밀번호"
              />
            </div>
            <div className="mb-9 pl-3 flex">
              <GoCheckCircle className="mr-2" size="22" color="BAB4B4" />
              로그인 상태 유지
            </div>
            <button className="w-full p-2 h-14 font-bold text-xl bg-purple-500 text-white rounded-md cursor-pointer">
              로그인
            </button>
          </TabPanel>
          <TabPanel className="flex flex-col mt-14 px-10">
            <button className="flex items-center justify-center w-full p-2 h-14 font-medium text-lg bg-yellow-300 text-yellow-950 rounded-md cursor-pointer mb-5">
              <RiKakaoTalkFill className="mr-2" size="22" color="38230D" />
              카카오로 로그인
            </button>
            <button className="flex items-center justify-center w-full p-2 h-14 font-medium text-lg rounded-2xl border rounded-md cursor-pointer mb-5">
              <FcGoogle className="mr-2" size="22" />
              Google로 로그인
            </button>
            <button className="flex items-center justify-center w-full p-2 h-14 font-medium text-lg bg-green-500 text-white rounded-md cursor-pointer">
              <SiNaver className="mr-2" size="22" />
              네이버로 로그인
            </button>
          </TabPanel>
        </Tabs>
      </div>
      <div>
        아이디가 없으시다면?
        <Link href={'/register'} className="ml-2">
          회원가입
        </Link>
      </div>
    </div>
  );
}
