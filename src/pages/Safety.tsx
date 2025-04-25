
import { Shield, ShieldCheck, ShieldAlert } from "lucide-react";

const SafetyPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        Safety Center
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Your safety is our top priority. Learn about our community guidelines, safety tools, and resources.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="p-6 rounded-lg border bg-card">
          <Shield className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-4">Community Guidelines</h3>
          <p className="text-muted-foreground">
            Our rules and policies to maintain a safe and inclusive environment for everyone.
          </p>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <ShieldCheck className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-4">Safety Tools</h3>
          <p className="text-muted-foreground">
            Features and settings to help you control your streaming experience.
          </p>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <ShieldAlert className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-4">Report Issues</h3>
          <p className="text-muted-foreground">
            How to report violations and get help with safety concerns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafetyPage;
