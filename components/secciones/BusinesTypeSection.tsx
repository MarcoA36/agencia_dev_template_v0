import {
    Briefcase,
    Building2,
    Home,
    Plane,
    Store,
    GraduationCap,
    Stethoscope,
    Car,
    Wrench,
    Landmark,
    CalendarCheck,
    Camera,
    UtensilsCrossed,
    Dumbbell,
    Palette,
  } from "lucide-react";
  
export default function BusinessTypesSection() {
const businesses = [
    { icon: Briefcase, label: "Profesionales independientes" },
    { icon: Building2, label: "PyMEs y empresas" },
    { icon: Store, label: "Comercios y emprendedores" },
    { icon: Home, label: "Inmobiliarias" },
    { icon: Plane, label: "Turismo y hotelería" },
   
    { icon: GraduationCap, label: "Instituciones educativas" },
    { icon: Stethoscope, label: "Salud y bienestar" },
    { icon: Car, label: "Transporte y logística" },
    { icon: Wrench, label: "Servicios técnicos y oficios" },
    { icon: Landmark, label: "Estudios jurídicos y contables" },
  
    { icon: CalendarCheck, label: "Eventos y organización" },
    { icon: Camera, label: "Fotografía y producción audiovisual" },
    { icon: UtensilsCrossed, label: "Gastronomía" },
    { icon: Dumbbell, label: "Deporte y fitness" },
    { icon: Palette, label: "Arte y diseño" },
  ];
  

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
        Adaptamos cada proyecto a las necesidades reales de cada negocio
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {businesses.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
