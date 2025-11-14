import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const agencies = [
  {
    name: "KALRO",
    fullName: "Kenya Digital Agriculture Platform",
    logo: "🌱",
    description: "The KALRO GAPs Knowledge Hub is a digital platform by the Kenya Agricultural and Livestock Research Organization (KALRO), developed in partnership with GIZ and the Food Security Project (FSP).",
  },
  {
    name: "AFC",
    fullName: "Agricultural Finance Corporation",
    logo: "🌽",
    description: "AFC is a development finance institution wholly owned by the Government of the Republic of Kenya and focused on financing agriculture sector",
  },
  {
    name: "AFA",
    fullName: "Agriculture and Food Authority",
    logo: "🌿",
    description: "AFA regulates Kenya's crop sector, merging key directorates under the Crops Act 2013 to streamline and enhance agricultural.",
  },
  {
    name: "NCPB",
    fullName: "National Cereals & Produce Board (NCPB)",
    logo: "🌾",
    description: "A commercial state corporation in Kenya that manages the country's grain reserves and agricultural commodity trade.",
  },
  {
    name: "KEPHIS",
    fullName: "Kenya Plant Health Inspectorate Service",
    logo: "🌿",
    description: "A government parastatal responsible for assuring the quality of agricultural inputs and produce in Kenya",
  },
  {
    name: "KMD",
    fullName: "Kenya Meteorological Department",
    logo: "☁️",
    description: "(KMD) is the official national body responsible for providing weather and climate services in Kenya.",
  },
  {
    name: "ASK",
    fullName: "Agricultural Society of Kenya",
    logo: "🌾",
    description: "(ASK) is a government parastatal that promotes excellence in agriculture, trade, and allied sectors",
  },
  {
    name: "DigiFarm",
    fullName: "Digi farm",
    logo: "📱",
    description: "Digifarm is a Kenyan agri-tech platform that provides smallholder farmers with a digital 'one-stop-shop' for a wide range of services.",
  },
  {
    name: "KSC",
    fullName: "Kenya Seed Company",
    logo: "🌱",
    description: "(KSC) is a state-owned corporation established in 1956 that produces and markets high-quality certified seeds in Kenya and beyond.",
  },
  {
    name: "PCPB",
    fullName: "Pest Control Products Board",
    logo: "🦟",
    description: "(PCPB) is a statutory body of the Kenyan government that regulates the importation, exportation, manufacture, distribution, and use of pest control products.",
  },
];

const Agencies = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Trusted Agencies in Kenya</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              To empower every farmer with smart, accessible tools and knowledge that boost productivity, income, and 
              sustainable farming.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {agencies.map((agency) => (
              <div key={agency.name} className="bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    {agency.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{agency.name}</h3>
                    <p className="text-sm text-muted-foreground">{agency.fullName}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  {agency.description}
                </p>
                <Button variant="link" className="text-green-accent p-0 h-auto font-semibold">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Agencies;
