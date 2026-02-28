import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - XYVN',
  description: 'Privacy Policy for XYVN and its products',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-medium mb-6">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400">Last Updated: February 2024</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to XYVN ("we," "our," or "us"). This Privacy Policy explains how XYVN, Inc. 
                collects, uses, discloses, and safeguards your information when you visit our website 
                and use our services. Please read this privacy policy carefully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-white mb-3">2.1 Information You Provide</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Contact information (email address, name)</li>
                <li>Communication data (messages, inquiries)</li>
                <li>Account information for our products</li>
              </ul>

              <h3 className="text-xl font-medium text-white mb-3">2.2 Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Device information (browser type, operating system)</li>
                <li>Usage data (pages visited, time spent)</li>
                <li>IP address and general location</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>To provide and maintain our services</li>
                <li>To respond to your inquiries and requests</li>
                <li>To improve our website and services</li>
                <li>To send relevant communications (with your consent)</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Sharing</h2>
              <p className="leading-relaxed mb-4">
                We do not sell your personal information. We may share data with:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                information, including encryption, secure servers, and access controls. However, no 
                method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
              <p className="leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies</h2>
              <p className="leading-relaxed">
                We use cookies and similar technologies to enhance your experience. You can control 
                cookies through your browser settings. Disabling cookies may affect the functionality 
                of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party sites. We are not responsible for the 
                privacy practices of these external sites. We encourage you to review their privacy 
                policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our services are not directed to individuals under 13 years of age. We do not knowingly 
                collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy periodically. We will notify you of material changes 
                by posting the new policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Us</h2>
              <p className="leading-relaxed mb-4">
                For privacy-related inquiries, please contact us at:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Email: <a href="mailto:ern@xyvnai.com" className="text-accent-primary hover:underline">ern@xyvnai.com</a></li>
              </ul>
            </section>

            <section className="pt-8 border-t border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Product-Specific Policies</h2>
              <p className="leading-relaxed mb-4">
                For detailed privacy policies for our individual products, please visit:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><a href="/products/socialai/privacy" className="text-accent-primary hover:underline">SocialAI Privacy Policy</a></li>
                <li><a href="/products/vita-ai/privacy" className="text-accent-primary hover:underline">Vita AI Privacy Policy</a></li>
                <li><a href="/products/seedlight/privacy" className="text-accent-primary hover:underline">Seedlight Privacy Policy</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}