import Sidebar from '@/components/Common/Sidebar';
import MainLayout from '@/components/Main/MainLayout';

export default function Main() {
  return (
    <div className="flex h-full ">
      <Sidebar />
      <MainLayout />
    </div>
  );
}
