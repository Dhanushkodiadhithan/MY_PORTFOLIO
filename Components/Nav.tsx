import TargetCursor from "./Animations/TargetCursor";
export default function Nav() {
  return (
    <>
      <div className="py-2 bg-(--Primary) flex justify-between items-center text-white px-8">
        <div className="text-white text-2xl font-bold p-2 cursor-target">
          <span className="text-(--tertiary)">MY_</span>
          <span className="text-(--secondary)">PORTFOLIO</span>
        </div>
        <div className="flex space-x-8 text-lg font-medium ">
          <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
          <span className='cursor-target px-3'>About</span>
          <span className='cursor-target px-3 '>Home</span>
          <span className='cursor-target px-3'>Projects</span>
          <span className="cursor-target px-3">Contact</span>
        </div>
      </div>
    </>
  );
}
