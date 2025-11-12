'use client';
import Lanyard from './Animations/Lanyard';

export default function Main() {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-black">
      <Lanyard position={[0, 0, 25]} gravity={[0, -40, 0]} />
    </main>
  );
}
