import React from 'react';
import Layout from '../components/layout/Layout';

const Shop = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-8">SHOP</h1>
          <div className="w-full my-8 rounded-lg overflow-hidden" style={{background:'#111'}}>
            <iframe
              src="https://shop.n1ghtw1re.com/"
              title="N1GHTW1RE Shop"
              width="100%"
              height="80vh"
              style={{ border: 'none', borderRadius: '8px', width: '100%', height: '80vh', minHeight: 0 }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
