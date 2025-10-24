
import React from 'react';
import Layout from '../components/layout/Layout';

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-8">PRIVACY POLICY</h1>
          
          <div className="space-y-8 font-mono text-white/90">
            <section>
              <p className="mb-4">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="mb-4">
                N1ghtw1re is committed to protecting your privacy and digital autonomy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">INFORMATION WE COLLECT</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg text-white mb-2">Analytics Data</h3>
                  <p>We use Umami Analytics (a privacy-focused analytics platform) to understand how visitors use our site. This includes:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Pages visited and time spent on each page</li>
                    <li>General geographic location (country level only)</li>
                    <li>Device and browser information (anonymized)</li>
                    <li>Traffic sources (anonymized)</li>
                  </ul>
                  <p className="mt-2 text-sm">Umami is GDPR-compliant and does not use cookies or track personal information.</p>
                </div>
                
                <div>
                  <h3 className="text-lg text-white mb-2">Contact Information</h3>
                  <p>When you contact us via email (n1ghtw1re@proton.me), we collect only the information you voluntarily provide.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">HOW WE USE YOUR INFORMATION</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To improve our website and user experience</li>
                <li>To understand which content is most valuable to our visitors</li>
                <li>To respond to your inquiries and communications</li>
                <li>To analyze website performance and optimize content</li>
              </ul>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">WHAT WE DON'T DO</h2>
              <div className="bg-black/40 border border-cyberpunk-green p-6">
                <p className="text-cyberpunk-green font-bold mb-4">WE WILL NEVER:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sell your personal information to third parties</li>
                  <li>Share your data with advertisers or data brokers</li>
                  <li>Use invasive tracking technologies or cookies</li>
                  <li>Collect unnecessary personal information</li>
                  <li>Store sensitive personal data on our servers</li>
                  <li>Share analytics data with third-party corporations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">THIRD-PARTY SERVICES</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg text-white mb-2">Umami Analytics</h3>
                  <p>We use Umami Analytics, a privacy-focused analytics platform that doesn't use cookies or track personal information. Umami collects only anonymized usage data to help us improve our website. You can learn more about Umami's privacy practices at <a href="https://umami.is/privacy" className="text-cyberpunk-green hover:underline">umami.is/privacy</a>.</p>
                </div>
                
                <div>
                  <h3 className="text-lg text-white mb-2">ProtonMail</h3>
                  <p>Our email communications are handled through ProtonMail, which provides end-to-end encryption and enhanced privacy protection.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">YOUR RIGHTS</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request information about what data we have collected</li>
                <li>Request deletion of your personal information</li>
                <li>Browse our site without being tracked (analytics are anonymous)</li>
                <li>Contact us with privacy concerns</li>
              </ul>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">CONTACT US</h2>
              <p>
                For any privacy-related questions or concerns, contact us at:{' '}
                <a href="mailto:n1ghtw1re@proton.me" className="text-cyberpunk-green hover:underline">
                  n1ghtw1re@proton.me
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
