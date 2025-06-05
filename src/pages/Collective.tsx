
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

            <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">2nd Amendment Weapons Emporium</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    The 2nd amendment isn't just for the rich and conservatives. Every citizen of Night City has the right to protect themselves from tyranny.
                  </p>
                  <a 
                    href="https://2a.n1ghtw1re.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS 2nd Amendment →
                  </a>
                </div>

            <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">BPM Couture Replicants</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    Where perfection is not born, but meticulously engineered. This exclusive atelier caters to only the most discerning clientele, offering bespoke Replicants crafted to surpass even the highest expectations.
                  </p>
                  <a 
                    href="https://bpm.n1ghtw1re.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    Access BPM →
                  </a>
                </div>    
            
            <section>
              <h2 className="font-glitch text-3xl text-white mb-6">CURRENT INITIATIVES</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">The Bright Descent</h3>
                  <p className="font-mono text-sm text-white/90">
                    Coming Soon
                  </p>
                </div>
                
                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">Circuit Breach</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    Cyberpunk media analysis beyond the neon glow. We dissect the genre's core themes, challenge tech-bro interpretations, and explore the wires connecting fiction to our reality through philosophy, sociology, and science.
                  </p>
                  <a 
                    href="https://circuit-breach.neocities.org/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS CIRCUIT BREACH →
                  </a>
                </div>
                
                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">Code Heroes</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    Code Heroes was created to highlight the stories of technology pioneers who used their talents to make the world better—not just to accumulate wealth or power.
                  </p>
                  <a 
                    href="https://code-heroes.n1ghtw1re.com/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS CODE HEROES →
                  </a>
                </div>
                
                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">Crazy Eddies Cyberdeck Emporium</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    Eddie's philosophy is simple: high-end tech shouldn't be locked behind corporate walls. Everyone deserves the chance to jack in with quality gear—especially if that gear might occasionally cause problems for the corps.
                  </p>
                  <a 
                    href="https://eddies.n1ghtw1re.com/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS CRAZY EDDIES →
                  </a>
                </div>

                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">Ellos Viven Optical</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    Welcome to Ellos Viven Optical, where luxury eyewear offers not just refined style, but the chance to uncover a hidden reality for those daring enough to look beyond the surface.
                  </p>
                  <a 
                    href="https://ellos-viven.n1ghtw1re.com/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS Ellos Viven Optical →
                  </a>
                </div>
                
                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">Github</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    Repository for our projects. We provide privacy-first development, decentralized tools, and web design that respects user freedom. We build open, ethical, and human-centered technology.
                  </p>
                  <a 
                    href="https://github.com/n1ghtw1re"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS GITHUB →
                  </a>
                </div>
                
                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">Hackers Tarot</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    The Hacker's Tarot is a reimagining of the traditional major arcana for the digital age. Each card represents the forces, figures, and concepts that shape our technological landscape—from The User to The Global Citizen.
                  </p>
                  <a 
                    href="https://hackers-tarot.n1ghtw1re.com/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS HACKERS TAROT →
                  </a>
                </div>
                
                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">N1ghtw1re Gumroad</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    Show support for this and all our other projects by checking out our Gumroad shop.
                  </p>
                  <a 
                    href="https://n1ghtw1re.gumroad.com/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS GUMROAD →
                  </a>
                </div>
                
                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">Interlinked Records</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    Based in Siem Reap, Cambodia, INTERLINKED RECORDS is an independent label founded in the digital underground, operating at the intersection of dub techno, industrial soundscapes, and gothic synth experiments.
                  </p>
                  <a 
                    href="https://interlinked.n1ghtw1re.com/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS INTERLINKED RECORDS →
                  </a>
                </div>
                
                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">Into Ideaspace</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    Into Ideaspace is both a manifesto and a map—an urgent call to reclaim the vast terrain of human thought from the hands of those who seek to fence it off and sell it back to us. In an age when corporations patent dreams and algorithms rewrite reality, this book dares to ask: What if imagination were a human right?
                  </p>
                  <a 
                    href="https://ideaspace.n1ghtw1re.com/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS INTO IDEASPACE →
                  </a>
                </div>
                
                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">N1ghtw1re Collective</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    N1ghtw1re is an anonymous collective dedicated to empowering individuals to reclaim their privacy, autonomy, and freedom in an age dominated by surveillance, algorithms, and corporate control. N1ghtw1re is more than a website—it's a living hypersigil, a digital beacon for those ready to challenge the status quo and embrace the tools of liberation.
                  </p>
                  <a 
                    href="https://n1ghtw1re.com"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS N1GHTW1RE COLLECTIVE →
                  </a>
                </div>
                
                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">N1ghtw1re Studios</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    N1ghtw1re is a digital studio specializing in creative, privacy-focused, websites, applications, and media projects with a retro design and aesthetic. Our goal is to reclaim the internet from algorithms and return the net to the individual.
                  </p>
                  <a 
                    href="https://studio.n1ghtw1re.com/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS N1GHTW1RE STUDIOS →
                  </a>
                </div>

                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">The Running Man</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    Where justice is served with ratings and survival is the prize, convicted criminals must run for their lives in the ultimate televised deathmatch—where the only rule is to stay alive! This season, Ben Richards is on the run, but the stalkers are closing in… and the crowd wants blood!
                  </p>
                  <a 
                    href="https://running-man.n1ghtw1re.com/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS The Running Man →
                  </a>
                </div>
                
                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">Synapse Express</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    Encrypted mnemonic package delivery across networks and physical planes. Your neurons, our highway.
                  </p>
                  <a 
                    href="https://synapse.n1ghtw1re.com/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS SYNAPSE EXPRESS →
                  </a>
                </div>
                
                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">Taco Bell San Angeles</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    Now all restaurants are Taco Bell.
                  </p>
                  <a 
                    href="https://tacobell.n1ghtw1re.com/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS TACO BELL SAN ANGELES →
                  </a>
                </div>
                
                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">Tech Noir</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    The ultimate Hollywood nightclub. We guarantee you'll be saying "I'll be back" after your first visit.
                  </p>
                  <a 
                    href="https://technoir.n1ghtw1re.com/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS TECH NOIR →
                  </a>
                </div>
                
                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">TheDonStone</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    The Don Stone is a Siem Reap-based electronic music producer and DJ known for underground warehouse techno, experimental bass, and dark ambient soundscapes.
                  </p>
                  <a 
                    href="https://thedonstone.n1ghtw1re.com/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS THEDONSTONE →
                  </a>
                </div>
                
                <div className="border border-white/20 p-4 hover:border-cyberpunk-green transition-colors">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">Vinyl Violence</h3>
                  <p className="font-mono text-sm text-white/90 mb-2">
                    Deep dives into classic albums, thoughts on emerging scenes, explorations of the culture surrounding the music, and maybe the occasional rant.
                  </p>
                  <a 
                    href="https://vinyl-violence.n1ghtw1re.com/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    ACCESS VINYL VIOLENCE →
                  </a>
                </div>
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
