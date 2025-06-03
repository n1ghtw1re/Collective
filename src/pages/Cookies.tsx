
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
                This Cookie Policy explains how N1ghtw1re uses cookies and similar technologies when you visit our website.
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
                  <h3 className="text-lg text-white mb-2">Analytics Cookies</h3>
                  <p>We use Google Analytics cookies to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Understand how visitors interact with our website</li>
                    <li>Analyze website traffic and performance</li>
                    <li>Improve our content and user experience</li>
                    <li>Track page views and session duration</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg text-white mb-2">Essential Cookies</h3>
                  <p>These cookies are necessary for the website to function properly and cannot be disabled.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">THIRD-PARTY COOKIES</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg text-white mb-2">Google Analytics</h3>
                  <p className="mb-2">
                    We use Google Analytics to analyze website usage. Google Analytics may set the following cookies:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><code>_ga</code> - Distinguishes unique users</li>
                    <li><code>_ga_*</code> - Maintains session state</li>
                    <li><code>_gid</code> - Distinguishes unique users</li>
                  </ul>
                  <p className="mt-2">
                    For more information about Google Analytics cookies, visit:{' '}
                    <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" 
                       className="text-cyberpunk-green hover:underline" 
                       target="_blank" 
                       rel="noopener noreferrer">
                      Google Analytics Cookie Usage
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
                  <h3 className="text-lg text-white mb-2">Opt-Out Tools</h3>
                  <p>You can opt out of Google Analytics tracking by:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Installing the Google Analytics Opt-out Browser Add-on</li>
                    <li>Using privacy-focused browser extensions</li>
                    <li>Adjusting your browser's privacy settings</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">OUR COMMITMENT</h2>
              <div className="bg-black/40 border border-cyberpunk-green p-6">
                <p className="text-cyberpunk-green font-bold mb-4">WE PROMISE:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We only use cookies that are necessary for analytics and website functionality</li>
                  <li>We never use tracking cookies for advertising purposes</li>
                  <li>We do not sell or share cookie data with third parties</li>
                  <li>We respect your privacy choices and preferences</li>
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
