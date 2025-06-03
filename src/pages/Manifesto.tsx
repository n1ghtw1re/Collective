
import React from 'react';
import Layout from '../components/layout/Layout';
import { Shield, Zap, Users, Code, Link } from 'lucide-react';

const Manifesto = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="font-glitch text-4xl md:text-6xl text-cyberpunk-green mb-4 glitch-effect" data-text="DIGITAL LIBERATION MANIFESTO">
              By the Light of Chaos and the Code of Freedom
            </h1>
            <div className="h-0.5 w-1/2 mx-auto bg-cyberpunk-green my-6"></div>
          </header>
          
          <div className="space-y-10">
            <section className="border-l-2 border-cyberpunk-green pl-6 py-2">
              <h2 className="font-glitch text-2xl text-white mb-4">PREAMBLE: THE SIGNAL PIERCES THE NOISE</h2>
              <p className="font-mono text-lg text-white/90 mb-4">
                Reality has been hijacked.
              </p>
              <p className="font-mono text-white/90 mb-4">
                Invisible hands shape our thoughts, steer our desires, and harvest our attention. Surveillance has become ambient. Control is now seamless, hidden behind interfaces and euphemisms. We were promised connection—but given cages. We were told technology would set us free—yet every click is watched, every movement tracked, every action nudged by algorithms we do not control.
              </p>
              <p className="font-mono text-white/90 mb-2">
                We are the product. We are the prey.
              </p>
              <p className="font-mono text-white/90 font-bold">
                And we say: No more.
              </p>
              <p className="font-mono text-white/90 mt-4">
                We are N1ghtw1re—a collective of coders, mystics, hackers, artists, and outlaws building the counter-signal. This is our call to arms. This is your invitation to resist.
              </p>
            </section>
            
            <section className="border-l-2 border-cyberpunk-green pl-6 py-2">
              <div className="flex items-center mb-4">
                <h2 className="font-glitch text-2xl text-white">I. THE CAPTURE</h2>
              </div>
              <p className="font-mono text-white/90 mb-4 text-lg">
                The digital world is not neutral.
              </p>
              <p className="font-mono text-white/90 mb-4">
                It is owned, weaponized, and optimized for extraction. Our digital lives have been annexed by techno-oligarchs who trade in attention, identity, and behavior. They promise convenience, but extract consent. They offer personalization, but enforce manipulation.
              </p>
              <div className="space-y-2 my-4">
                <p className="font-mono text-white/90">We are profiled, predicted, and programmed.</p>
                <p className="font-mono text-white/90">Every choice is shaped by systems we don't see.</p>
                <p className="font-mono text-white/90">Our autonomy is eroded by invisible influence.</p>
              </div>
              <p className="font-mono text-white/90 font-bold">
                This is not science fiction. This is the default setting.
              </p>
            </section>
            
            <section className="border-l-2 border-cyberpunk-green pl-6 py-2">
              <div className="flex items-center mb-4">
                <h2 className="font-glitch text-2xl text-white">II. THE CORRUPTION</h2>
              </div>
              <p className="font-mono text-white/90 mb-4">
                The internet's original promise of openness has been buried beneath layers of walled gardens, surveillance infrastructure, and predatory platforms.
              </p>
              <div className="space-y-2 my-4">
                <p className="font-mono text-white/90">Big Tech profits from division, distraction, and despair.</p>
                <p className="font-mono text-white/90">Governments exploit fear to normalize mass surveillance.</p>
                <p className="font-mono text-white/90">Algorithms amplify outrage, entrench bias, and fragment society.</p>
              </div>
              <p className="font-mono text-white/90 font-bold">
                They do not want you awake. They want you compliant.
              </p>
            </section>
            
            <section className="border-l-2 border-cyberpunk-green pl-6 py-2">
              <div className="flex items-center mb-4">
                <h2 className="font-glitch text-2xl text-white">III. THE COUNTER-SIGNAL</h2>
              </div>
              <p className="font-mono text-white/90 mb-4">
                We reject the lie that this system is inevitable.<br/>
                We reject the binary of totalitarian tech or Luddite retreat.<br/>
                We choose a third path: Digital Liberation.
              </p>
              <div className="space-y-2 my-4">
                <p className="font-mono text-white/90">Technology should serve humanity, not exploit it.</p>
                <p className="font-mono text-white/90">Code should empower, not manipulate.</p>
                <p className="font-mono text-white/90">Systems should be transparent, not occulted.</p>
              </div>
              <p className="font-mono text-white/90 font-bold">
                We are reclaiming the means of digital production.<br/>
                We are rebuilding the internet from the shadows up.
              </p>
            </section>
            
            <section className="border-l-2 border-cyberpunk-green pl-6 py-2">
              <div className="flex items-center mb-4">
                <h2 className="font-glitch text-2xl text-white">IV. OUR PRINCIPLES</h2>
              </div>
              <ul className="space-y-6 mt-6">
                <li className="flex gap-4">
                  <div className="mt-1">
                    <Shield className="h-6 w-6 text-cyberpunk-green" />
                  </div>
                  <div>
                    <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">SOVEREIGNTY</h3>
                    <p className="font-mono text-white/90">
                      You are not data. You are not a user. You are a sovereign being with the right to control your digital existence.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1">
                    <Shield className="h-6 w-6 text-cyberpunk-green" />
                  </div>
                  <div>
                    <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">PRIVACY</h3>
                    <p className="font-mono text-white/90">
                      Privacy is not secrecy. It is dignity. It is a boundary. It is your line in the sand. Without privacy, freedom cannot exist.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1">
                    <Link className="h-6 w-6 text-cyberpunk-green" />
                  </div>
                  <div>
                    <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">DECENTRALIZATION</h3>
                    <p className="font-mono text-white/90">
                      Centralized power is fragile, corruptible, and extractive. We build horizontal systems that resist monopolization.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1">
                    <Code className="h-6 w-6 text-cyberpunk-green" />
                  </div>
                  <div>
                    <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">TRANSPARENCY</h3>
                    <p className="font-mono text-white/90">
                      If code governs lives, it must be open to inspection. Black-box algorithms are incompatible with democratic society.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1">
                    <Users className="h-6 w-6 text-cyberpunk-green" />
                  </div>
                  <div>
                    <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">ACCESSIBILITY</h3>
                    <p className="font-mono text-white/90">
                      The tools of resistance must be usable by everyone—not just experts. Liberation cannot be gated behind technical elitism.
                    </p>
                  </div>
                </li>
              </ul>
            </section>
            
            <section className="border-l-2 border-cyberpunk-green pl-6 py-2">
              <div className="flex items-center mb-4">
                <h2 className="font-glitch text-2xl text-white">V. OUR METHODS</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="border border-white/20 p-4">
                  <p className="font-mono text-white/90 font-bold mb-2">We code.</p>
                  <p className="font-mono text-sm text-white/90">
                    We build tools that encrypt, anonymize, and empower. Every line of code is an act of resistance.
                  </p>
                </div>
                <div className="border border-white/20 p-4">
                  <p className="font-mono text-white/90 font-bold mb-2">We educate.</p>
                  <p className="font-mono text-sm text-white/90">
                    We publish zines, books, guides, and workshops to share tactics of digital resistance and philosophical resilience.
                  </p>
                </div>
                <div className="border border-white/20 p-4">
                  <p className="font-mono text-white/90 font-bold mb-2">We disrupt.</p>
                  <p className="font-mono text-sm text-white/90">
                    We break systems, bend rules, and build alternate realities—part art, part ARG, part hypersigil. We are the glitch that reveals the pattern.
                  </p>
                </div>
                <div className="border border-white/20 p-4">
                  <p className="font-mono text-white/90 font-bold mb-2">We organize.</p>
                  <p className="font-mono text-sm text-white/90">
                    We foster communities that are intentional, encrypted, decentralized, and sovereign. Our strength is collective.
                  </p>
                </div>
                <div className="border border-white/20 p-4 md:col-span-2">
                  <p className="font-mono text-white/90 font-bold mb-2">We imagine.</p>
                  <p className="font-mono text-sm text-white/90">
                    We dream new futures into being. Through magic, mysticism, and myth, we reclaim the narrative. We do not just fight back—we build beyond.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="border-l-2 border-cyberpunk-green pl-6 py-2">
              <div className="flex items-center mb-4">
                <h2 className="font-glitch text-2xl text-white">VI. THE CALL</h2>
              </div>
              <p className="font-mono text-white/90 mb-4">
                To the seekers, skeptics, dreamers, and dropouts:<br/>
                If you feel the weight of the system and wonder if you're the only one—you're not.
              </p>
              <p className="font-mono text-white/90 mb-4">
                To the artists, hackers, writers, and wanderers:<br/>
                If you've glimpsed another way—hidden in the margins or buried in the noise—we're listening.
              </p>
              <p className="font-mono text-white/90 mb-4">
                To those who will not go quietly into the algorithm:<br/>
                We see you. We are you.
              </p>
              
              <div className="my-6 mx-auto text-center">
                <p className="font-glitch text-xl text-cyberpunk-green mb-4">Join us.</p>
                <div className="flex flex-wrap justify-center gap-4 text-cyberpunk-green font-mono">
                  <span className="border border-cyberpunk-green px-3 py-1 hover:bg-cyberpunk-green hover:text-black transition-colors">Learn encryption.</span>
                  <span className="border border-cyberpunk-green px-3 py-1 hover:bg-cyberpunk-green hover:text-black transition-colors">Mask your IP.</span>
                  <span className="border border-cyberpunk-green px-3 py-1 hover:bg-cyberpunk-green hover:text-black transition-colors">Share forbidden knowledge.</span>
                  <span className="border border-cyberpunk-green px-3 py-1 hover:bg-cyberpunk-green hover:text-black transition-colors">Teach others to resist.</span>
                  <span className="border border-cyberpunk-green px-3 py-1 hover:bg-cyberpunk-green hover:text-black transition-colors">Build the network.</span>
                  <span className="border border-cyberpunk-green px-3 py-1 hover:bg-cyberpunk-green hover:text-black transition-colors">Live the praxis.</span>
                </div>
              </div>
              
              <p className="font-mono text-white/90 mb-4">
                This manifesto is uncopyrighted. Modify it. Remix it. Translate it. Act on it.
              </p>
            </section>
            
            <section className="text-center pt-8">
              <div className="space-y-2 mb-6">
                <p className="font-mono text-white/90">We are not spectators. We are signals.</p>
                <p className="font-mono text-white/90">We are not brands. We are beings.</p>
                <p className="font-mono text-white/90">We are not content. We are creators of the real.</p>
              </div>
              
              <p className="font-glitch text-2xl text-cyberpunk-green mb-2">
                This is the counter-signal. This is N1ghtw1re.
              </p>
              <p className="font-glitch text-xl text-cyberpunk-green animate-pulse">
                The future is ours to write.
              </p>
              
              <div className="mt-12 border-t border-white/20 pt-6">
                <Zap className="h-6 w-6 text-cyberpunk-green mx-auto mb-4" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Manifesto;
