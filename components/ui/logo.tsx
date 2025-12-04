// components/Logo.tsx
"use client";

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {/* Bloque decorativo "Zona" */}
      <div className="bg-primary p-2 rounded-md flex items-center justify-center shadow-sm">
        <span className="text-white font-bold text-lg">Zona</span>
      </div>

      {/* Texto principal "Web" */}
      <span className="text-primary font-extrabold text-xl tracking-tight">
        Web
      </span>
    </div>
  );
}
