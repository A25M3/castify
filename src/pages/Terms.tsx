
const TermsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-castify-purple to-castify-blue bg-clip-text text-transparent">
        Terms of Service
      </h1>
      <div className="max-w-4xl prose prose-zinc dark:prose-invert">
        <p className="text-muted-foreground mb-4">Last updated: April 25, 2025</p>
        
        <section className="mb-8">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Castify's services, you agree to be bound by these Terms of Service.
          </p>
        </section>

        <section className="mb-8">
          <h2>2. Use of Service</h2>
          <p>
            You must be at least 13 years old to use Castify. You are responsible for maintaining the security of your account.
          </p>
        </section>

        <section className="mb-8">
          <h2>3. Content Guidelines</h2>
          <p>
            Users must comply with Castify's content guidelines and community standards when streaming or interacting on the platform.
          </p>
        </section>

        <section className="mb-8">
          <h2>4. Privacy</h2>
          <p>
            Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
