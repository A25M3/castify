
import { Switch } from "@/components/ui/switch";

const CookieSettingsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        Cookie Settings
      </h1>
      <div className="max-w-4xl">
        <p className="text-xl text-muted-foreground mb-8">
          Manage your cookie preferences and learn about how we use cookies.
        </p>

        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Essential Cookies</h3>
                <p className="text-sm text-muted-foreground">Required for the website to function properly</p>
              </div>
              <Switch checked disabled />
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Analytics Cookies</h3>
                <p className="text-sm text-muted-foreground">Help us improve our website by collecting usage information</p>
              </div>
              <Switch />
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Marketing Cookies</h3>
                <p className="text-sm text-muted-foreground">Used to deliver personalized advertisements</p>
              </div>
              <Switch />
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Preference Cookies</h3>
                <p className="text-sm text-muted-foreground">Remember your settings and preferences</p>
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
