import { Shield, Database, Scale, Globe, Award } from "lucide-react";
import network1 from "@/assets/network-1.png";
import network2 from "@/assets/network-2.png";
import network3 from "@/assets/network-3.png";
import network4 from "@/assets/network-4.png";

const partners = [
  { name: "Blockchain Analytics", icon: Database },
  { name: "Cybersecurity Partners", icon: Shield },
  { name: "Legal & Compliance", icon: Scale },
  { name: "Global Exchanges", icon: Globe },
  { name: "Verification Bodies", icon: Award },
  { name: "Forensic Experts", icon: Database },
  { name: "Security Auditors", icon: Shield },
  { name: "Regulatory Advisors", icon: Scale },
];

const photos = [
  { src: network1, alt: "Network connection 1" },
  { src: network2, alt: "Network connection 2" },
  { src: network3, alt: "Network connection 3" },
  { src: network4, alt: "Network connection 4" },
];

const TrustedNetworkSection = () => {
  return (
    <section className="py-16 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
          Our Trusted Network & Global Connections
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          We work closely with a verified network of blockchain analysts, legal consultants, exchanges, cybersecurity professionals, and compliance partners across multiple jurisdictions.
        </p>

        {/* Partner Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto">
          {partners.slice(0, 4).map((partner, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-4 flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <partner.icon className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground text-center font-medium">
                {partner.name}
              </p>
            </div>
          ))}
        </div>

        {/* Moving Photo Strip */}
        <div className="relative mb-8">
          <div className="flex animate-scroll-logos">
            {[...photos, ...photos, ...photos, ...photos].map((photo, i) => (
              <div key={i} className="flex-shrink-0 mx-2">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-32 w-32 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <p className="text-center text-sm text-muted-foreground">
          🔒 All partnerships verified • Confidential workflows • Multi-jurisdiction support
        </p>
      </div>
    </section>
  );
};

export default TrustedNetworkSection;
