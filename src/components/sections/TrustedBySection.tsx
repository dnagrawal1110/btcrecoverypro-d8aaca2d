import coinbaseLogo from "@/assets/coinbase-logo.png";
import cryptoComLogo from "@/assets/crypto-com-logo.png";
import binanceLogo from "@/assets/binance-logo.png";
import coindcxLogo from "@/assets/coindcx-logo.png";

const logos = [
  { src: coinbaseLogo, alt: "Coinbase" },
  { src: cryptoComLogo, alt: "Crypto.com" },
  { src: binanceLogo, alt: "Binance" },
  { src: coindcxLogo, alt: "CoinDCX" },
];

const TrustedBySection = () => {
  return (
    <section className="py-8 bg-background border-y border-border/50 overflow-hidden">
      <p className="text-center text-sm text-muted-foreground font-medium tracking-widest uppercase mb-6">
        Trusted By Users Of
      </p>
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling strip */}
        <div className="flex animate-scroll-logos">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 mx-10 flex items-center justify-center h-10">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
