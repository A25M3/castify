
import { Button } from "@/components/ui/button";

const CareersPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        Careers at Castify
      </h1>
      <p className="text-xl text-muted-foreground mb-12">
        Join us in shaping the future of live streaming. We're always looking for talented individuals to join our team.
      </p>

      <div className="space-y-8 mb-12">
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-2">Engineering</h3>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium">Senior Frontend Engineer</h4>
              <p className="text-sm text-muted-foreground mb-4">Remote · Full-time</p>
              <Button variant="outline">Apply Now</Button>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium">Backend Engineer</h4>
              <p className="text-sm text-muted-foreground mb-4">Remote · Full-time</p>
              <Button variant="outline">Apply Now</Button>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-2">Product & Design</h3>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium">Product Manager</h4>
              <p className="text-sm text-muted-foreground mb-4">Remote · Full-time</p>
              <Button variant="outline">Apply Now</Button>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium">UI/UX Designer</h4>
              <p className="text-sm text-muted-foreground mb-4">Remote · Full-time</p>
              <Button variant="outline">Apply Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
