import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6 font-mono text-sm">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">1. Acceptance of Terms</h2>
              <p className="text-gray-600 dark:text-gray-400">
                By accessing and using the services provided by Nordible Solutions ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">2. Services Provided</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We provide software development consultancy services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Web and Mobile systems development</li>
                <li>Digital product engineering</li>
                <li>Custom enterprise platforms</li>
                <li>Software architecture and consulting</li>
                <li>Technical optimization and maintenance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">3. Project Terms</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                All projects are subject to the following terms:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Project scope, timeline, and allocation will be defined in a separate agreement</li>
                <li>Changes to project scope may result in resource and timeline adjustments</li>
                <li>Client is responsible for providing necessary materials, content, and feedback</li>
                <li>Payment terms will be specified in the individual agreement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">4. Payment Terms</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Unless otherwise specified:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>A resource deposit may be required before initialization</li>
                <li>Invoices are due within 30 days of receipt</li>
                <li>Late payments may incur efficiency fees</li>
                <li>Work may be suspended for overdue accounts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">5. Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Upon full finalization:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Client owns the final deliverables and custom code developed for their project</li>
                <li>We retain rights to general methodologies and pre-existing IP</li>
                <li>Third-party components remain subject to their respective licenses</li>
                <li>We reserve the right to showcase completed work in our portfolio</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">6. Confidentiality</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We respect the confidentiality of client data and will not disclose proprietary information without explicit consent, except as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">7. Warranties and Disclaimers</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We provide services "as is" and make no warranties except those expressly stated in writing. We disclaim all other warranties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">8. Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Our liability for any claim shall not exceed the total amount paid by the client for the specific project giving rise to the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">9. Termination</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Either party may terminate the agreement with written notice. Upon termination, client is responsible for payment of all work completed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">10. Governing Law</h2>
              <p className="text-gray-600 dark:text-gray-400">
                These terms shall be governed by and construed in accordance with the laws of India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">11. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For questions about these Terms, please contact us:
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
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">12. Changes to Terms</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We reserve the right to modify these terms. Changes will be effective upon posting.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
