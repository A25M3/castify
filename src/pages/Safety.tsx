
import { Shield, ShieldCheck, ShieldAlert } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const SafetyPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        {t('safetyCenter')}
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        {t('safetyCenterDesc')}
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="p-6 rounded-lg border bg-card">
          <Shield className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-4">{t('communityGuidelines')}</h3>
          <p className="text-muted-foreground">
            {t('communityGuidelinesDesc')}
          </p>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <ShieldCheck className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-4">{t('safetyTools')}</h3>
          <p className="text-muted-foreground">
            {t('safetyToolsDesc')}
          </p>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <ShieldAlert className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-4">{t('reportIssues')}</h3>
          <p className="text-muted-foreground">
            {t('reportIssuesDesc')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafetyPage;
