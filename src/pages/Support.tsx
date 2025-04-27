
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { HelpCircle, Shield, Book, Users } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const SupportPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        {t('supportCenter')}
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        {t('supportCenterDesc')}
      </p>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <HelpCircle className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-2">{t('helpCenter')}</h3>
          <p className="text-muted-foreground mb-4">{t('helpCenterDesc')}</p>
          <Button asChild variant="outline">
            <Link to="/support">{t('browseFAQs')}</Link>
          </Button>
        </Card>
        
        <Card className="p-6">
          <Shield className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-2">{t('safetyResources')}</h3>
          <p className="text-muted-foreground mb-4">{t('safetyResourcesDesc')}</p>
          <Button asChild variant="outline">
            <Link to="/safety">{t('safetyCenter')}</Link>
          </Button>
        </Card>
        
        <Card className="p-6">
          <Book className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-2">{t('creatorResources')}</h3>
          <p className="text-muted-foreground mb-4">{t('creatorResourcesDesc')}</p>
          <Button asChild variant="outline">
            <Link to="/creators">{t('creatorGuide')}</Link>
          </Button>
        </Card>
        
        <Card className="p-6">
          <Users className="h-8 w-8 mb-4 text-castify-purple" />
          <h3 className="text-xl font-semibold mb-2">{t('partnerProgram')}</h3>
          <p className="text-muted-foreground mb-4">{t('partnerProgramDesc')}</p>
          <Button asChild variant="outline">
            <Link to="/partners">{t('partnerInfo')}</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default SupportPage;
