import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - XYVN',
  description: 'Terms of Service for XYVN and its products',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-medium mb-6">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-400">Last Updated: February 2024</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p className="leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you 
                ("User," "you," or "your") and XYVN, Inc. ("Company," "we," "our," or "us") governing 
                your access to and use of our website and services. By accessing or using our services, 
                you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Services Description</h2>
              <p className="leading-relaxed">
                XYVN provides software development services, AI-powered applications, and related 
                technology solutions. Our services include but are not limited to web development, 
                mobile app development, and AI integration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Eligibility</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>You must be at least 18 years old to use our services</li>
                <li>You must have the authority to enter into these Terms</li>
                <li>You must comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Acceptable Use</h2>
              
              <h3 className="text-xl font-medium text-white mb-3">4.1 Permitted Uses</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Accessing our website and services for legitimate purposes</li>
                <li>Contacting us for business inquiries</li>
                <li>Using our products in accordance with their specific terms</li>
              </ul>

              <h3 className="text-xl font-medium text-white mb-3">4.2 Prohibited Uses</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Violating any applicable laws or regulations</li>
                <li>Infringing on intellectual property rights</li>
                <li>Transmitting malware or harmful code</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Engaging in fraudulent or deceptive practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Intellectual Property</h2>
              
              <h3 className="text-xl font-medium text-white mb-3">5.1 Our Property</h3>
              <p className="leading-relaxed mb-4">
                All content, features, and functionality on our website, including but not limited to 
                text, graphics, logos, and software, are owned by XYVN, Inc. and protected by 
                intellectual property laws.
              </p>

              <h3 className="text-xl font-medium text-white mb-3">5.2 Limited License</h3>
              <p className="leading-relaxed">
                We grant you a limited, non-exclusive, non-transferable license to access and use our 
                website for personal or business purposes in accordance with these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Service Agreements</h2>
              <p className="leading-relaxed">
                Specific services provided by XYVN may be subject to additional terms and conditions. 
                These will be provided separately and incorporated by reference into these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Disclaimer of Warranties</h2>
              <p className="leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Our website and services are provided "AS IS" without warranties of any kind</li>
                <li>We do not guarantee uninterrupted or error-free service</li>
                <li>We do not warrant that our services will meet your specific requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, XYVN, INC. SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages arising from your use or inability to use our services</li>
                <li>Third-party actions or content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify and hold harmless XYVN, Inc. from any claims, damages, or 
                expenses arising from your use of our services, violation of these Terms, or 
                infringement of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Privacy</h2>
              <p className="leading-relaxed">
                Your use of our services is also governed by our Privacy Policy. Please review our 
                <a href="/privacy" className="text-accent-primary hover:underline"> Privacy Policy </a> 
                to understand our data practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Modifications</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of material 
                changes by posting the updated Terms on this page. Your continued use of our services 
                after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Termination</h2>
              <p className="leading-relaxed">
                We may terminate or suspend your access to our services at any time, without prior 
                notice, for conduct that we believe violates these Terms or is harmful to other users, 
                us, or third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Delaware, 
                USA, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">14. Dispute Resolution</h2>
              <p className="leading-relaxed mb-4">
                Any disputes arising from these Terms or your use of our services shall be resolved 
                through binding arbitration in accordance with the American Arbitration Association's 
                Commercial Arbitration Rules.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">15. General Provisions</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and us</li>
                <li><strong>Severability:</strong> If any provision is found invalid, the remainder shall remain in effect</li>
                <li><strong>No Waiver:</strong> Our failure to enforce any right does not constitute a waiver</li>
                <li><strong>Assignment:</strong> You may not assign these Terms without our consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">16. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                For questions about these Terms, please contact us at:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Email: <a href="mailto:ern@xyvnai.com" className="text-accent-primary hover:underline">ern@xyvnai.com</a></li>
              </ul>
            </section>

            <section className="pt-8 border-t border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Product-Specific Terms</h2>
              <p className="leading-relaxed mb-4">
                For detailed terms of service for our individual products, please visit:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><a href="/products/socialai/terms" className="text-accent-primary hover:underline">SocialAI Terms of Service</a></li>
                <li><a href="/products/vita-ai/terms" className="text-accent-primary hover:underline">Vita AI Terms of Service</a></li>
                <li><a href="/products/seedlight/terms" className="text-accent-primary hover:underline">Seedlight Terms of Service</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}