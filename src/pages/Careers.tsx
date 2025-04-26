
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const CareersPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        {t('careersAtCastify')}
      </h1>
      <p className="text-xl text-muted-foreground mb-12">
        {t('careersDescription')}
      </p>

      <div className="space-y-8 mb-12">
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-2">{t('engineering')}</h3>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium">{t('seniorFrontend')}</h4>
              <p className="text-sm text-muted-foreground mb-4">{t('remoteFullTime')}</p>
              <Button variant="outline">{t('applyNow')}</Button>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium">{t('backendEngineer')}</h4>
              <p className="text-sm text-muted-foreground mb-4">{t('remoteFullTime')}</p>
              <Button variant="outline">{t('applyNow')}</Button>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-xl font-semibold mb-2">{t('productDesign')}</h3>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium">{t('productManager')}</h4>
              <p className="text-sm text-muted-foreground mb-4">{t('remoteFullTime')}</p>
              <Button variant="outline">{t('applyNow')}</Button>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium">{t('uiuxDesigner')}</h4>
              <p className="text-sm text-muted-foreground mb-4">{t('remoteFullTime')}</p>
              <Button variant="outline">{t('applyNow')}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
