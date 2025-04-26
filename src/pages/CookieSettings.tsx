
import { Switch } from "@/components/ui/switch";
import { useTranslation } from "@/hooks/useTranslation";

const CookieSettingsPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        {t('cookieSettings')}
      </h1>
      <div className="max-w-4xl">
        <p className="text-xl text-muted-foreground mb-8">
          {t('cookieDescription')}
        </p>

        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">{t('essentialCookies')}</h3>
                <p className="text-sm text-muted-foreground">{t('essentialCookiesDesc')}</p>
              </div>
              <Switch checked disabled />
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">{t('analyticsCookies')}</h3>
                <p className="text-sm text-muted-foreground">{t('analyticsCookiesDesc')}</p>
              </div>
              <Switch />
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">{t('marketingCookies')}</h3>
                <p className="text-sm text-muted-foreground">{t('marketingCookiesDesc')}</p>
              </div>
              <Switch />
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">{t('preferenceCookies')}</h3>
                <p className="text-sm text-muted-foreground">{t('preferenceCookiesDesc')}</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieSettingsPage;
