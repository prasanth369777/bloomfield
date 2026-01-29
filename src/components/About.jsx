import { useEffect, useRef, useState } from "react";
import { 
  Building2, Briefcase, Key, Car, Landmark, Target,
  Globe, Award, MapPin, CheckCircle2,
} from "lucide-react";

// --- IMAGE IMPORTS ---
import headerImage from "../assests/bloomfield.png"; // Professional consultation/office
import loanFocusImage from "../assests/bf4.webp"; // Banking/Financial focus
import digitalMarketingImage from "../assests/bf3.webp"; // Abstract tech/Growth
import coimbatoreMapImage from "../assests/bf4.webp"; // Local regional focus


const services = [
  {
    icon: Briefcase,
    title: "Business Capital",
    category: "Corporate Finance",
    description: "Empower your enterprise with collateral-free working capital and SME expansion funds.",
  },
  {
    icon: Building2,
    title: "Home & Mortgage",
    category: "Real Estate",
    description: "Access high-value mortgage loans with extended tenures and the lowest market interest rates.",
  },
  {
    icon: Key,
    title: "Personal Liquidity",
    category: "Private Lending",
    description: "Instant personal financing for life's unplanned expenses with disbursement within 24 hours.",
  },
  {
    icon: Car,
    title: "Vehicle Financing",
    category: "Asset Acquisition",
    description: "Drive your dream car with up to 100% on-road funding and flexible repayment structures.",
  },
];

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };
    const container = containerRef.current;
    if (container) container.addEventListener("mousemove", handleMouseMove);
    return () => {
      if (container) container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative w-full py-32 bg-[#e5e7eb] text-[#1a1a1a] overflow-hidden font-sans"
    >
      {/* Background FX */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div 
        className="absolute pointer-events-none w-[600px] h-[600px] bg-green-400/20 rounded-full blur-[100px] transition-transform duration-150 ease-out -translate-x-1/2 -translate-y-1/2 opacity-50 z-0"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* --- IMAGE 1: HEADER SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center border-b border-black/5 pb-16">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/10 backdrop-blur-md mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"/>
              <span className="text-[10px] font-bold text-green-700 tracking-[0.2em] uppercase">About Us</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#1a1a1a] leading-[1.05] mb-8">
              Trusted Loan & <br/>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-700">Digital Support.</span>
            </h2>
            <p className="text-xl text-neutral-700 leading-relaxed font-light italic">
              We are a Coimbatore-based service provider helping individuals and businesses make smarter financial and digital decisions.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border border-white">
              <img src={headerImage} alt="Strategic Consultation" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* --- IMAGE 2: BANK LOAN FOCUS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
            <div className="bg-white/50 backdrop-blur-sm p-12 rounded-[3rem] border border-white shadow-xl relative overflow-hidden group">
                <img src={loanFocusImage} alt="Financial Assets" className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center text-white mb-8">
                      <Landmark size={32} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 tracking-tight">Helping You Find the Right Bank Loan</h3>
                  <p className="text-neutral-600 mb-8 leading-relaxed">
                      We work closely with leading banks and financial institutions to help our clients choose the right loan solution for their needs. From Personal to Mortgage loans, we guide you through every step.
                  </p>
                  <ul className="space-y-3">
                      {["Understand your requirement", "Match you with the best bank option", "Smooth and transparent process"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-neutral-700 font-medium">
                              <div className="w-2 h-2 rounded-full bg-green-500" /> {item}
                          </li>
                      ))}
                  </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, idx) => (
                    <div key={idx} className="p-8 rounded-3xl bg-white border border-white shadow-sm hover:border-green-500/20 transition-all group">
                         <service.icon className="w-6 h-6 mb-4 text-green-600 group-hover:scale-110 transition-transform" />
                         <h4 className="font-bold text-black mb-2">{service.title}</h4>
                         <p className="text-[11px] text-neutral-500 leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* --- IMAGE 3: DIGITAL MARKETING --- */}
        <div className="mb-32">
            <div className="relative rounded-[4rem] overflow-hidden bg-black text-white p-12 lg:p-20 shadow-2xl">
                <img src={digitalMarketingImage} alt="Growth Data" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 hidden lg:block" />
                <div className="relative z-10 max-w-2xl">
                    <h3 className="text-3xl font-bold mb-6 tracking-tight text-green-400">Helping Businesses Grow Online</h3>
                    <p className="text-lg text-neutral-300 leading-relaxed font-light mb-12">
                        Along with financial services, we build strong online presences through SEO, social media, and advertising focused on generating real results.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: Globe, title: "SEO" },
                            { icon: Target, title: "Social" },
                            { icon: Globe, title: "Ads" },
                            { icon: Award, title: "Content" }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 text-green-500"><item.icon size={20}/></div>
                                <p className="text-[10px] font-black uppercase tracking-widest">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* --- IMAGE 4: TRUST & REGION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
            <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl font-bold mb-8">Why Clients Trust Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        "Honest guidance",
                        "Simple processes",
                        "Local understanding",
                        "One-to-one support",
                    ].map((text, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 bg-white/40 rounded-2xl border border-black/5">
                            <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                            <span className="text-sm font-medium text-neutral-700">{text}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:col-span-5 relative group rounded-[3rem] overflow-hidden shadow-xl border border-white">
                <img src={coimbatoreMapImage} alt="Coimbatore Region" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60" />
                <div className="absolute inset-0 bg-white/90 group-hover:bg-white/80 transition-colors"></div>
                <div className="relative p-12 flex flex-col h-full justify-center">
                    <div className="inline-flex items-center gap-2 text-green-700 mb-6">
                        <MapPin size={24} />
                        <span className="font-bold uppercase tracking-widest text-xs">Local Focus</span>
                    </div>
                    <p className="text-neutral-700 font-bold text-lg mb-2">Based in Coimbatore, Tamil Nadu</p>
                    <p className="text-xs text-neutral-500 uppercase tracking-[0.2em]">Gandhipuram • RS Puram • Peelamedu • Saibaba Colony</p>
                </div>
            </div>
        </div>

       
        </div>

     
    </section>
  );
}