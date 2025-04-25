
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const BrandPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        Brand Guidelines
      </h1>
      <p className="text-xl text-muted-foreground mb-12">
        Everything you need to know about using the Castify brand assets correctly.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">Logo</h3>
          <p className="text-muted-foreground mb-6">
            Download our logo in various formats and sizes.
          </p>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> Download Logos
          </Button>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">Color Palette</h3>
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-castify-purple"></div>
              <span>Castify Purple</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-castify-blue"></div>
              <span>Castify Blue</span>
            </div>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> Download Style Guide
          </Button>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">Typography</h3>
          <p className="text-muted-foreground mb-6">
            Official fonts and typography guidelines.
          </p>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> Download Fonts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
