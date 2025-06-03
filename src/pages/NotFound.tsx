
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const NotFound = () => {
  const location = useLocation();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-glitch text-4xl md:text-6xl text-cyberpunk-green mb-6 animate-glitch">
            SIGNAL LOST
          </h1>
          
          <div className="font-mono text-xl mb-8 flex flex-col gap-2">
            <p className="text-white/90">Connection attempt to: <span className="text-cyberpunk-red">{location.pathname}</span></p>
            <p className="text-white/90">Status: <span className="text-cyberpunk-red">FAILED</span></p>
            <p className="text-white/90">Error code: <span className="text-cyberpunk-red">404</span></p>
          </div>
          
          <p className="font-mono text-white/80 mb-12">
            The node you're looking for has been disconnected, relocated, or never existed in this timeline.
          </p>
          
          <Link
            to="/"
            className="px-6 py-3 bg-transparent border border-cyberpunk-green text-cyberpunk-green font-mono hover:bg-cyberpunk-green/20 transition-colors"
          >
            RETURN TO MAIN NODE
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
