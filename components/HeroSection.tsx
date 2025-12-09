// import Image from "next/image";
// import type React from "react";

// interface HeroSectionProps {
//   title: string;
//   subtitle: string;
//   backgroundSrc?: string;
//   children?: React.ReactNode;
// }

// export default function HeroSection({
//   title,
//   subtitle,
//   backgroundSrc = "/webs2.png",
//   children,
// }: HeroSectionProps) {
//   return (
//     <section className="relative overflow-hidden py-24 md:py-40">

//       {/* Background image */}
//       <div className="absolute inset-0 -z-20">
//         <Image
//           src={backgroundSrc}
//           alt="Fondo tecnológico"
//           fill
//           sizes="100vw"
//           className="object-cover brightness-[0.55] contrast-100 saturate-100"
//           priority
//         />
//       </div>

//       {/* Dark overlay */}
//       <div className="absolute inset-0 -z-10 bg-black/70" />

//       {/* Optional subtle lights */}
//       {/* <div
//         className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full opacity-30 blur-3xl pointer-events-none"
//         style={{ background: "oklch(0.75 0.12 60)" }}
//       /> */}

//       <div
//         className="absolute top-1/2 left-1/2 w-[620px] h-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl pointer-events-none"
//         style={{ background: "oklch(0.45 0.1 240)" }}
//       />

//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center space-y-6">

//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white drop-shadow-xl">
//             {title}
//           </h1>

//           <p className="text-lg md:text-2xl text-white/90 drop-shadow max-w-3xl mx-auto">
//             {subtitle}
//           </p>

//           {children && <div className="pt-4">{children}</div>}
//         </div>
//       </div>
//     </section>
//   );
// }





































import Image from "next/image";
import Link from "next/link";
import type React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundSrc?: string;
  children?: React.ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundSrc = "/digitization.jpg",
  children,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-40">

      {/* Botón volver */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition"
        aria-label="Volver al inicio"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </Link>

      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={backgroundSrc}
          alt="Fondo tecnológico"
          fill
          sizes="100vw"
          className="object-cover brightness-[0.55] contrast-100 saturate-100"
          priority
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/75" />

      {/* Glow blur */}
      {/* <div
        className="absolute top-1/2 left-1/2 w-[620px] h-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "oklch(0.45 0.1 240)" }}
      /> */}

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white drop-shadow-xl">
            {title}
          </h1>

          <p className="text-lg md:text-2xl text-white/90 drop-shadow max-w-3xl mx-auto">
            {subtitle}
          </p>

          {children && <div className="pt-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}
