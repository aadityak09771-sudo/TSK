import React from 'react';

export const Terms: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-black mb-4 pb-4 border-b border-gray-100">Terms of Service</h1>
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">Last Updated: January 1, 2026</p>

        <div className="prose prose-blue max-w-none space-y-12 text-gray-600">
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h3>
            <p className="leading-relaxed">
              By accessing and using Topper's Siksha Kendra, you accept and agree to be bound by the terms 
              and provision of this agreement. In addition, when using these particular services, 
              you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Educational Resources & Content</h3>
            <p className="leading-relaxed">
              All materials provided on this platform, including but not limited to videos, textbooks, 
              assignments, and test series, are for educational purposes. Unauthorized distribution, 
              reproduction, or commercial use is strictly prohibited and violates our core intellectual 
              property guidelines.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Modification of Terms</h3>
            <p className="leading-relaxed">
              We reserve the right to change, modify, or update these terms at any time without 
              prior explicit notice. Your continued use of the platform and digital resources 
              after any changes constitutes your binding acceptance of the new Terms of Service.
            </p>
          </section>

          <div className="pt-12 mt-12 border-t border-gray-100">
             <p className="text-sm text-gray-400 font-medium italic">
                If you have any questions regarding these terms, please contact us via our Head Office.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};
