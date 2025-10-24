
import React from 'react';
import Layout from '../components/layout/Layout';

const Cookies = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-8">COOKIE POLICY</h1>
          
          <div className="space-y-8 font-mono text-white/90">
            <section>
              <p className="mb-4">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="mb-4">
                This Cookie Policy explains how N1ghtw1re handles cookies and similar technologies when you visit our website. TL;DR: We use very few cookies and prioritize your privacy.
              </p>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">WHAT ARE COOKIES?</h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.
              </p>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">HOW WE USE COOKIES</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg text-white mb-2">Analytics (Cookie-Free)</h3>
                  <p>We use Umami Analytics, which is designed to respect your privacy:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Does not use cookies or local storage</li>
                    <li>Does not track users across websites</li>
                    <li>Collects only anonymized, aggregated data</li>
                    <li>GDPR compliant by design</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg text-white mb-2">Essential Cookies</h3>
                  <p>These cookies are necessary for the website to function properly and cannot be disabled. Currently, our website uses minimal essential cookies.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">THIRD-PARTY SERVICES</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg text-white mb-2">Umami Analytics</h3>
                  <p className="mb-2">
                    We use Umami Analytics, a privacy-focused analytics platform that:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Does not use cookies</li>
                    <li>Does not collect personal information</li>
                    <li>Does not track users across websites</li>
                    <li>Is GDPR, CCPA, and PECR compliant</li>
                  </ul>
                  <p className="mt-2">
                    For more information about Umami's privacy practices, visit:{' '}
                    <a href="https://umami.is/privacy" 
                       className="text-cyberpunk-green hover:underline" 
                       target="_blank" 
                       rel="noopener noreferrer">
                      Umami Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">MANAGING COOKIES</h2>
              <div className="space-y-4">
                <p>You can control and manage cookies in several ways:</p>
                
                <div>
                  <h3 className="text-lg text-white mb-2">Browser Settings</h3>
                  <p>Most browsers allow you to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>View and delete cookies</li>
                    <li>Block cookies from specific websites</li>
                    <li>Block third-party cookies</li>
                    <li>Clear all cookies when you close your browser</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg text-white mb-2">Privacy Settings</h3>
                  <p>Since we use Umami Analytics (which doesn't use cookies), you don't need to opt out of tracking. However, you can still:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Use browser extensions to block JavaScript if desired</li>
                    <li>Use privacy-focused browsers</li>
                    <li>Contact us to request data deletion (though we collect minimal data)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">OUR COMMITMENT</h2>
              <div className="bg-black/40 border border-cyberpunk-green p-6">
                <p className="text-cyberpunk-green font-bold mb-4">WE PROMISE:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We use cookie-free analytics that respect your privacy</li>
                  <li>We never use tracking cookies for advertising purposes</li>
                  <li>We do not collect or share personal data through cookies</li>
                  <li>We respect your privacy choices and digital autonomy</li>
                  <li>We use minimal essential cookies only when necessary</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">CONTACT US</h2>
              <p>
                If you have questions about our use of cookies, contact us at:{' '}
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

export default Cookies;
