import { Button } from "@/components/ui/button";
import { Lock, Key, RefreshCw, Building, Search } from "lucide-react";

const services = [
  {
    icon: Lock,
    title: "Hardware Wallet Unlock",
    description: "Lost access to Ledger, Trezor, BitBox, or Keystone? We help recover funds even after resets.",
  },
  {
    icon: Key,
    title: "Password / Seed Phrase Recovery",
    description: "Even if you only remember fragments — we can reconstruct and recover your wallet.",
  },
  {
    icon: RefreshCw,
    title: "Wrong Network Transfers",
    description: "Mistakenly sent crypto to the wrong chain? (e.g., USDT ERC20 to BEP20) We've recovered it.",
  },
  {
    icon: Building,
    title: "Exchange Account Recovery",
    description: "2FA loss, AML freezes, or locked accounts on Binance, KuCoin & more — we restore access.",
  },
  {
    icon: Search,
    title: "Scam Tracing & Legal Recovery",
    description: "We trace your funds, analyze blockchain trails, and assist in legal action against scammers.",
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <a href="https://forms.gle/UfjdyC4F53u6Yx5V8" target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-sm mb-8">
            <Button variant="cta" size="lg" className="w-full">
              Get a Free Recovery Assessment Now
            </Button>
          </a>
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
          We Recover What Others Can't
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          Crypto Recovery Services We Offer
        </p>

        {/* Services Cards */}
        <div className="space-y-6 max-w-lg mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden card-glow transition-all duration-300"
            >
              {/* Content */}
              <div className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-destructive mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <a href="https://forms.gle/UfjdyC4F53u6Yx5V8" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm">
            <Button variant="cta" size="lg" className="w-full">
              Find the Right Recovery Option
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
