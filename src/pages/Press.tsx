
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const PressPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        Press Center
      </h1>
      <p className="text-xl text-muted-foreground mb-12">
        Get the latest news, press releases, and media resources about Castify.
      </p>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">Press Kit</h3>
          <p className="text-muted-foreground mb-6">
            Download official Castify logos, brand guidelines, and media assets.
          </p>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> Download Press Kit
          </Button>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">Media Inquiries</h3>
          <p className="text-muted-foreground mb-6">
            For press and media inquiries, please contact our press team.
          </p>
          <Button variant="outline">Contact Press Team</Button>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Latest News</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-muted">
            <p className="text-sm text-muted-foreground">April 25, 2025</p>
            <h3 className="font-medium">Castify Announces New Creator Tools</h3>
          </div>
          <div className="p-4 rounded-lg bg-muted">
            <p className="text-sm text-muted-foreground">April 20, 2025</p>
            <h3 className="font-medium">Platform Growth Exceeds Expectations</h3>
          </div>
          <div className="p-4 rounded-lg bg-muted">
            <p className="text-sm text-muted-foreground">April 15, 2025</p>
            <h3 className="font-medium">New Partnership Program Launched</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;
