
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const StartStreamingPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
          {t('startStreamingTitle')}
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          {t('startStreamingDesc')}
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-4">{t('newToStreaming')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('newToStreamingDesc')}
            </p>
            <Button asChild variant="outline">
              <Link to="/creators">
                {t('learnMore')} <ArrowRight className="ms-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-4">{t('readyToStream')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('readyToStreamDesc')}
            </p>
            <Button asChild>
              <Link to="/studio">
                {t('launchStudio')} <ArrowRight className="ms-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartStreamingPage;
