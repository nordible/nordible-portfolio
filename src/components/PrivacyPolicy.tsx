import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 dark:text-green-400 hover:text-purple-600 dark:hover:text-green-300 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Website</span>
        </button>

        <div className="bg-white dark:bg-black border dark:border-green-900/30 rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6 font-mono text-sm">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">1. Information We Collect</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Fill out our contact form</li>
                <li>Request a consultation</li>
                <li>Communicate with us via email, phone, or digital channels</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                This information may include your name, email address, phone number, company name, project details, and any other information you choose to provide.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">2. How We Use Your Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Schedule consultations and project discussions</li>
                <li>Send you project updates and relevant information</li>
                <li>Improve our services and website functionality</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">3. Information Sharing</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist in operating our website and conducting business</li>
                <li>When required by law or to protect our rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">4. Data Security</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">5. Cookies and Tracking</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Our website may use cookies to enhance user experience and analyze website traffic. You can choose to disable cookies through your browser settings, though this may affect website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">6. Your Rights</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request information about how your data is processed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">7. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-green-900/10 rounded-lg p-4 border dark:border-green-900/30">
                <p className="text-gray-600 dark:text-gray-300 font-mono text-xs">
                  <strong>Email:</strong> nordiblesolutions@gmail.com<br />
                  <strong>Phone:</strong> +91-9773207706<br />
                  <strong>WhatsApp:</strong> Available<br />
                  <strong>Address:</strong> 002, Simply Move In, 17 Maruthi Layout, AECS Layout, Marathalli, Bangalore 560037
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">8. Changes to This Policy</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
