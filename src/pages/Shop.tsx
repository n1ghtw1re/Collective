import React from 'react';
import Layout from '../components/layout/Layout';

const Shop = () => (
  <Layout>
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-8">SHOP</h1>
        <p className="font-mono text-base text-white/90 mb-8">
          Step into our supply node, where books, ezines, music, tools, templates, and merch aren’t mere products but fragments of the resistance. Each release decodes the machine, ruptures the feed, or equips you with the next open-source weapon, handed off securely via Patreon, Gumroad, Bandcamp and other reliable online shops.
        </p>
        <p className="font-mono text-base text-white/90 mb-8">
          By claiming a track, field manual, or toolkit, you’re not checking out—you’re arming the collective. Every contribution fuels code drops, underground broadcasts, and the hidden narratives we unfold across the collective.
        </p>
        <p className="font-mono text-base text-white/90 mb-8">
          Take the transmission, carry the signal, and help fracture the panopticon—one download, one page, one manifesto at a time.
        </p>
      </div>
      <div
        className="w-full my-8 rounded-lg overflow-hidden"
        style={{
          background: '#111',
          maxWidth: '100vw',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <iframe
          src="https://shop.n1ghtw1re.com/"
          title="N1GHTW1RE Shop"
          width="100%"
          height="80vh"
          style={{ border: 'none', borderRadius: '8px', width: '100%', height: '80vh', minHeight: 0, display: 'block' }}
          allowFullScreen
        />
      </div>
    </div>
  </Layout>
);

export default Shop;
