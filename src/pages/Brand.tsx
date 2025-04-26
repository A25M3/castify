
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const BrandPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        {t('brandGuidelines')}
      </h1>
      <p className="text-xl text-muted-foreground mb-12">
        {t('brandDescription')}
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">{t('logo')}</h3>
          <p className="text-muted-foreground mb-6">
            {t('logoDescription')}
          </p>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> {t('downloadLogos')}
          </Button>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">{t('colorPalette')}</h3>
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-castify-purple"></div>
              <span>{t('castifyPurple')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-castify-blue"></div>
              <span>{t('castifyBlue')}</span>
            </div>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> {t('downloadStyleGuide')}
          </Button>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-4">{t('typography')}</h3>
          <p className="text-muted-foreground mb-6">
            {t('typographyDescription')}
          </p>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> {t('downloadFonts')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
