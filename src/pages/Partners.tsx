
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const PartnersPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        {t('partnerProgram')}
      </h1>
      <p className="text-xl text-muted-foreground mb-12">
        {t('partnerProgramDesc')}
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">{t('requirements')}</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{t('reqStreamHours')}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{t('reqAvgViewers')}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{t('reqFollowers')}</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">{t('benefits')}</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{t('benefitBadges')}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{t('benefitSupport')}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{t('benefitRevenue')}</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">{t('features')}</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{t('featureEmotes')}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{t('featureAdRevenue')}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{t('featureEvents')}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-castify-purple hover:bg-castify-purple/90">
          {t('applyForPartnership')}
        </Button>
      </div>
    </div>
  );
};

export default PartnersPage;
