import { cn } from "@/lib/utils";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "Air Madagascar", logo: "/images/partners/air-madagascar.png" },
  { name: "Madagascar National Parks", logo: "/images/partners/mnp.png" },
  { name: "Office du Tourisme Madagascar", logo: "/images/partners/tourism-office.png" },
  { name: "IATA", logo: "/images/partners/iata.png" },
];

interface PartnerLogosProps {
  className?: string;
}

export function PartnerLogos({ className }: PartnerLogosProps) {
  return (
    <section className={cn("bg-cream-madabest py-16", className)}>
      <div className="container mx-auto">
        <h2 className="font-heading text-dark-madabest mb-12 text-center text-3xl font-bold">
          Nos Partenaires
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto object-contain grayscale transition-all hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
