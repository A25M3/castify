
const PrivacyPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        Privacy Policy
      </h1>
      <div className="max-w-4xl prose prose-zinc dark:prose-invert">
        <p className="text-muted-foreground mb-4">Last updated: April 25, 2025</p>
        
        <section className="mb-8">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including registration information, profile data, and content you share.
          </p>
        </section>

        <section className="mb-8">
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, and to communicate with you.
          </p>
        </section>

        <section className="mb-8">
          <h2>3. Information Sharing</h2>
          <p>
            We do not share your personal information with third parties except as described in this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2>4. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information at any time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;
