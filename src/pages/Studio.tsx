
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tv } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const StudioPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
          {t('studioTitle')}
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          {t('studioDescription')}
        </p>
        <Button asChild size="lg" className="bg-castify-purple hover:bg-castify-purple/90">
          <Link to="/dashboard">
            <Tv className="mr-2 h-5 w-5" />
            {t('launchStudio')}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default StudioPage;
