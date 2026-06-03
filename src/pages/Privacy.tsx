import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-black mb-4 pb-4 border-b border-gray-100">Privacy Policy</h1>
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">Last Updated: January 1, 2026</p>

        <div className="prose prose-blue max-w-none space-y-12 text-gray-600">
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">We Value Your Privacy</h3>
            <p className="leading-relaxed">
              At Topper's Siksha Kendra, protecting student data and parent information is our absolute priority. 
              This document outlines the types of personal information we receive and collect when you 
              use our educational services, as well as some of the steps we take to safeguard information.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Collection</h3>
            <p className="leading-relaxed">
              We collect basic operational data such as your name, grade level, and contact details 
              upon registration to provide a personalized curriculum and track academic progress 
              across our test series.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Usage & Security</h3>
            <p className="leading-relaxed">
              We use your data solely to deliver, maintain, and securely evaluate your test performance. 
              We will never sell your personal information to third-party marketers or advertisers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
