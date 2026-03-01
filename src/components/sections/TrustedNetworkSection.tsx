import network1 from "@/assets/network-1.png";
import network2 from "@/assets/network-2.png";
import network3 from "@/assets/network-3.png";
import network4 from "@/assets/network-4.png";

const photos = [
  { src: network1, alt: "Network connection 1" },
  { src: network2, alt: "Network connection 2" },
  { src: network3, alt: "Network connection 3" },
  { src: network4, alt: "Network connection 4" },
];

const TrustedNetworkSection = () => {
  return (
    <section className="py-16 pb-8 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
          Our Trusted Network & Global Connections
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          We work closely with a verified network of blockchain analysts, legal consultants, exchanges, cybersecurity professionals, and compliance partners across multiple jurisdictions.
        </p>

        {/* Moving Photo Strip */}
        <div className="relative mb-4">
          <div className="flex animate-scroll-logos">
            {[...photos, ...photos, ...photos, ...photos].map((photo, i) => (
              <div key={i} className="flex-shrink-0 mx-2">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-48 w-48 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground pb-2">
          🔒 All partnerships verified • Confidential workflows • Multi-jurisdiction support
        </p>
      </div>
    </section>
  );
};

export default TrustedNetworkSection;
