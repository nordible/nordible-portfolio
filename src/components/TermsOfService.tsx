import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Website</span>
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 dark:text-gray-300">
                By accessing and using the services provided by Nordible Solutions ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Services Provided</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We provide software development consultancy services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Website development and design</li>
                <li>E-commerce solutions</li>
                <li>Custom web applications</li>
                <li>Software architecture and consulting</li>
                <li>Technical support and maintenance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Project Terms</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All projects are subject to the following terms:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Project scope, timeline, and costs will be defined in a separate project agreement</li>
                <li>Changes to project scope may result in additional costs and timeline adjustments</li>
                <li>Client is responsible for providing necessary materials, content, and feedback in a timely manner</li>
                <li>Payment terms will be specified in the project agreement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Payment Terms</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Unless otherwise specified in the project agreement:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>A deposit may be required before work begins</li>
                <li>Invoices are due within 30 days of receipt</li>
                <li>Late payments may incur additional fees</li>
                <li>Work may be suspended for overdue payments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Upon full payment:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Client owns the final deliverables and custom code developed specifically for their project</li>
                <li>We retain rights to general methodologies, techniques, and pre-existing intellectual property</li>
                <li>Third-party components and libraries remain subject to their respective licenses</li>
                <li>We reserve the right to showcase completed work in our portfolio</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Confidentiality</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We respect the confidentiality of client information and will not disclose proprietary or sensitive information to third parties without explicit consent, except as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Warranties and Disclaimers</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We provide services "as is" and make no warranties except those expressly stated in writing. We disclaim all other warranties, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Implied warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our liability for any claim related to our services shall not exceed the total amount paid by the client for the specific project giving rise to the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Termination</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Either party may terminate the agreement with written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Client is responsible for payment of all work completed</li>
                <li>We will provide deliverables for completed phases</li>
                <li>Confidentiality obligations continue</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Governing Law</h2>
              <p className="text-gray-600 dark:text-gray-300">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be resolved through binding arbitration.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Email:</strong> nordiblesolutions@gmail.com<br />
                  <strong>Phone:</strong> +91-9773207706<br />
                  <strong>WhatsApp:</strong> Available<br />
                  <strong>Address:</strong> 002, Simply Move In, 17 Maruthi Layout, AECS Layout, Marathalli, Bangalore 560037
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">12. Changes to Terms</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}