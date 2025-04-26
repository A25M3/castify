
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

const AboutPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        {t('aboutCastify')}
      </h1>
      <div className="max-w-4xl">
        <p className="text-xl text-muted-foreground mb-8">
          {t('aboutDescription')}
        </p>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t('ourMission')}</h2>
            <p className="text-muted-foreground">
              {t('missionDescription')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">{t('ourVision')}</h2>
            <p className="text-muted-foreground">
              {t('visionDescription')}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button asChild variant="outline">
            <Link to="/careers">{t('joinTeam')}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/press">{t('pressKit')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
