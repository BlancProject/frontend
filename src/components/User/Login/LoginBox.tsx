'use client';

import { useState } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import LoginTab from './LoginTab';
import SnsTab from './SnsTab';

export default function LoginBox() {
  const [activeTab, setActiveTab] = useState('id'); // 'id' or 'sns'

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
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
          <LoginTab />
        </TabPanel>

        <TabPanel className="flex flex-col mt-14 px-10">
          <SnsTab />
        </TabPanel>
      </Tabs>
    </div>
  );
}
