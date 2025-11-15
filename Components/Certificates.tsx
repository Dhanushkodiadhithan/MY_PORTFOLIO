import {
  DraggableCardBody,
  DraggableCardContainer,
} from "./Animations/draggable-card";

export default function Certificates() {
  const items = [
    {
      title: "Code Storm",
      image: "/Certificates/Certificate1.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Workshop",
      image: "/Certificates/Certificate2.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Code Golf",
      image: "/Certificates/Certificate3.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Bug Hunting",
      image: "/Certificates/Certificate4.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Code in the Dark",
      image: "/Certificates/Certificate5.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Web Fazhan",
      image: "/Certificates/Certificate6.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Reverse Coding",
      image: "/Certificates/Certificate7.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      title: "Code Craft",
      image: "/Certificates/Certificate8.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
  ];

  return (
    <>
      {/* HIDE ON MOBILE → SHOW ONLY ON MD & ABOVE */}
      <div className="hidden md:block p-10 pb-20 shadow-[0_4px_10px_rgba(128,128,128,0.4)] cursor-pointer">
        <h1 className="text-4xl font-bold mb-10 text-center">
          <span className="text-(--secondary)">Certi</span>
          <span className="text-(--tertiary)">ficates</span>
        </h1>

        <div className="bg-[#1b1b1b] rounded-2xl shadow-lg border border-white/10">
          <DraggableCardContainer className="relative h-[600px] flex w-full items-center justify-center overflow-hidden">
            <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl">
              Hover and drag the certificates to view them!
            </p>

            {items.map((item) => (
              <DraggableCardBody className={item.className} key={item.title}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                />
                <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                  {item.title}
                </h3>
              </DraggableCardBody>
            ))}
          </DraggableCardContainer>
        </div>
      </div>
    </>
  );
}
