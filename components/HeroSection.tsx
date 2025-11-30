// import Image from "next/image";
// import type React from "react";

// interface HeroSectionProps {
//   title: string;
//   subtitle: string;
//   backgroundSrc?: string; // ruta relativa: "/hero-bg.webp"
//   children?: React.ReactNode;
// }

// export default function HeroSection({
//   title,
//   subtitle,
//   backgroundSrc = "/hero-bg.jpg",
//   children,
// }: HeroSectionProps) {
//   return (
//     <section className="relative overflow-hidden py-24 md:py-40">
//       {/* Background image (Next/Image) - fill + object-cover */}
//       <div className="absolute inset-0 -z-20">
//         <Image
//           src={backgroundSrc}
//           alt="Fondo tecnológico"
//           fill
//           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
//           className="object-cover brightness-95 contrast-[0.95] saturate-[0.95] hero-bg-image"
//           priority
//         />
//       </div>

//       {/* Subtle pattern (brick-tech) overlay */}
//       <div className="absolute inset-0 -z-10 bg-tech-brick-pattern pointer-events-none" />

//       {/* Soft gradient / wash on top of image to improve contrast */}
//       <div
//         className="absolute inset-0 -z-5"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(14,21,38,0.04) 35%, rgba(6,10,20,0.06) 100%)",
//           mixBlendMode: "multiply",
//         }}
//       />

//       {/* Warm top-left glow */}
//       <div
//         className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full opacity-40 blur-3xl pointer-events-none"
//         style={{ background: "oklch(0.75 0.12 60)" }}
//       />

//       {/* Cool center glow */}
//       <div
//         className="absolute top-1/2 left-1/2 w-[620px] h-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl pointer-events-none"
//         style={{ background: "oklch(0.45 0.1 240)" }}
//       />

//       {/* Central subtle spotlight */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.28) 0%, transparent 55%)",
//         }}
//       />

//       {/* Content */}
//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
//           <h1
//             className="text-4xl md:text-6xl font-bold tracking-tight leading-tight bg-clip-text text-transparent"
//             style={{
//               backgroundImage:
//                 "linear-gradient(90deg, oklch(0.2 0.03 260), oklch(0.45 0.1 240))",
//             }}
//           >
//             {title}
//           </h1>

//           <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
//             {subtitle}
//           </p>

//           {children && (
//             <div className="pt-4 animate-fade-in-slow">
//               {children}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }








import Image from "next/image";
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
  backgroundSrc = "/hero.png",
  children,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-40">

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
      <div className="absolute inset-0 -z-10 bg-black/60" />

      {/* Optional subtle lights */}
      <div
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "oklch(0.75 0.12 60)" }}
      />

      <div
        className="absolute top-1/2 left-1/2 w-[620px] h-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "oklch(0.45 0.1 240)" }}
      />

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
