
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const PressPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        {t('pressCenter')}
      </h1>
      <p className="text-xl text-muted-foreground mb-12">
        {t('pressCenterDesc')}
      </p>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">{t('pressKit')}</h3>
          <p className="text-muted-foreground mb-6">
            {t('pressKitDesc')}
          </p>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> {t('downloadPressKit')}
          </Button>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">{t('mediaInquiries')}</h3>
          <p className="text-muted-foreground mb-6">
            {t('mediaInquiriesDesc')}
          </p>
          <Button variant="outline">{t('contactPressTeam')}</Button>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">{t('latestNews')}</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-muted">
            <p className="text-sm text-muted-foreground">{t('newsDate1')}</p>
            <h3 className="font-medium">{t('newsTitle1')}</h3>
          </div>
          <div className="p-4 rounded-lg bg-muted">
            <p className="text-sm text-muted-foreground">{t('newsDate2')}</p>
            <h3 className="font-medium">{t('newsTitle2')}</h3>
          </div>
          <div className="p-4 rounded-lg bg-muted">
            <p className="text-sm text-muted-foreground">{t('newsDate3')}</p>
            <h3 className="font-medium">{t('newsTitle3')}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;
