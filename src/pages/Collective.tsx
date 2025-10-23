
import React from 'react';
import Layout from '../components/layout/Layout';

const Collective = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-8">THE COLLECTIVE</h1>
          
          <div className="space-y-12">
            <section>
              <p className="font-mono text-xl text-white/90 mb-6">
                This site is not the endpoint of the journey. Welcome to the nexus. N1ghtw1re runs deep — from rogue couriers to encrypted DJ sets, black market decks to back-alley blogs. Every link is a door. Every door leads deeper.
              </p>
              <p className="font-mono text-white/90 mb-6">
                We operate as a network of autonomous nodes connected through shared values and common purpose. The sites linked below are fragments of a larger signal — scattered throughout the internet, each carrying part of the code we're writing together. Some offer tools. Others offer truth. A few may change the way you see the system. None of them ask for permission.
              </p>
              <p className="font-mono text-white/90">
                This isn't a map. It's a living circuit. From underground music networks to technomancer dispatches, memory smugglers to glitch-art galleries — each click pulls you deeper into the world we're building. Step through. Stay sharp. The static is watching.
              </p>
            </section>
 
            
            <section>
              <h2 className="font-glitch text-3xl text-white mb-6">CURRENT INITIATIVES</h2>
                {/* Embedded Collective Hub iframe */}
                <div className="w-full my-8 rounded-lg overflow-hidden" style={{background:'#111'}}>
                  <iframe
                    src="https://collectivehub.n1ghtw1re.com/"
                    title="Collective Hub"
                    width="100%"
                    height="600"
                    style={{ border: 'none', borderRadius: '8px', width: '100%', minHeight: 400, maxHeight: 800 }}
                    allowFullScreen
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    referrerPolicy="no-referrer-when-downgrade"
                    loading="lazy"
                  />
                </div>
              
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">COMMUNITY GUIDELINES</h2>
              <p className="font-mono text-white/90 mb-4">
                While we have no formal rules, we operate according to principles that maintain the integrity of our collective:
              </p>
              <ul className="space-y-2 font-mono text-white/90">
                <li>• Respect autonomy and privacy</li>
                <li>• Value diversity of tactics and perspectives</li>
                <li>• Share knowledge freely</li>
                <li>• Prioritize harm reduction</li>
                <li>• Practice mutual aid and solidarity</li>
                <li>• Reject exploitation and oppression in all forms</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Collective;
