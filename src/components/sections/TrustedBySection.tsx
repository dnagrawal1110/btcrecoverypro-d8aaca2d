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
        Partnered With
      </p>
      <div className="relative">
        <div className="flex animate-scroll-logos">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 mx-4 flex items-center justify-center h-12">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
