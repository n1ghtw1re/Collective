
import React from 'react';
import Layout from '../components/layout/Layout';

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-8">TERMS OF SERVICE</h1>
          
          <div className="space-y-8 font-mono text-white/90">
            <section>
              <p className="mb-4">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="mb-4">
                Welcome to N1ghtw1re. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">ACCEPTANCE OF TERMS</h2>
              <p>
                By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">USE OF THE WEBSITE</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg text-white mb-2">Permitted Use</h3>
                  <p>You may use this website for lawful purposes only. You agree not to use the website:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>In any way that violates applicable laws or regulations</li>
                    <li>To transmit harmful, threatening, or offensive content</li>
                    <li>To attempt to gain unauthorized access to our systems</li>
                    <li>To interfere with the website's functionality</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">INTELLECTUAL PROPERTY</h2>
              <p className="mb-4">
                The content on this website, including text, graphics, logos, and software, is the property of N1ghtw1re or its content suppliers and is protected by intellectual property laws.
              </p>
              <p>
                Our open-source projects are licensed under their respective licenses as specified in their repositories.
              </p>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">CONTENT AND OPINIONS</h2>
              <p className="mb-4">
                The content on this website represents our views and opinions. We do not guarantee the accuracy, completeness, or reliability of any information presented.
              </p>
              <p>
                Users are encouraged to verify information independently and use their own judgment when implementing any suggestions or recommendations.
              </p>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">DISCLAIMERS</h2>
              <div className="bg-black/40 border border-white/20 p-6">
                <p className="mb-4">
                  THIS WEBSITE IS PROVIDED "AS IS" WITHOUT ANY WARRANTIES, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p>
                  We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">LIMITATION OF LIABILITY</h2>
              <p>
                In no event shall N1ghtw1re be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this website.
              </p>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">MODIFICATIONS</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
              </p>
            </section>

            <section>
              <h2 className="font-glitch text-2xl text-cyberpunk-green mb-4">CONTACT INFORMATION</h2>
              <p>
                For questions about these Terms of Service, contact us at:{' '}
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

export default Terms;
