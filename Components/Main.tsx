'use client';
import Lanyard from './Animations/Lanyard';

export default function Main() {
  return (
    <main className="w-full h-screen flex  bg-[#000000]"> 
      <div className="w-1/2 h-full flex  items-start">
        <Lanyard position={[0, 0, 25]} gravity={[0, -40, 0]} />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center text-white p-10">
      </div>
    </main>
  );
}
