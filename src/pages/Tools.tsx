
import React from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, FileText, Code, Shield, Link } from "lucide-react";

const Tools = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-8">TOOLS & PROJECTS</h1>
          
          <p className="font-mono text-white/90 mb-8">
            N1ghtw1re develops privacy-first, open-source tools designed to counter surveillance and reclaim digital autonomy. All our projects are freely available, carefully audited, and built with security-first principles.
          </p>
          
          <div className="flex items-center gap-2 mb-12 hover:text-cyberpunk-green transition-colors">
            <Github className="w-5 h-5" />
            <a href="https://github.com/n1ghtw1re" className="font-mono text-white/90 hover:text-cyberpunk-green underline">github.com/n1ghtw1re</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-black/40 border border-white/20 text-white hover:border-cyberpunk-green transition-colors">
              <CardHeader>
                <CardTitle className="font-glitch text-cyberpunk-green flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  App Finalization Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-white/80">
                  AI Prompt that helps you finalize projects created with AI tools like Lovable and Bolt.
                </p>
              </CardContent>
              <CardFooter>
                <a 
                  href="https://github.com/n1ghtw1re/app-finalization-checklist" 
                  className="font-mono text-cyberpunk-green hover:underline flex items-center gap-1"
                >
                  <Code className="w-4 h-4" />
                  View Project
                </a>
              </CardFooter>
            </Card>

            <Card className="bg-black/40 border border-white/20 text-white hover:border-cyberpunk-green transition-colors">
              <CardHeader>
                <CardTitle className="font-glitch text-cyberpunk-green flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Codex Reader
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-white/80">
                  A simple e-reader that you can add to your own site.
                </p>
              </CardContent>
              <CardFooter>
                <a 
                  href="https://github.com/n1ghtw1re/codex-reader" 
                  className="font-mono text-cyberpunk-green hover:underline flex items-center gap-1"
                >
                  <Code className="w-4 h-4" />
                  View Project
                </a>
              </CardFooter>
            </Card>

            <Card className="bg-black/40 border border-white/20 text-white hover:border-cyberpunk-green transition-colors">
              <CardHeader>
                <CardTitle className="font-glitch text-cyberpunk-green flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  MD2DOC
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-white/80">
                  Simple, client-side markdown to doc conversion tool that retains markdown formatting.
                </p>
              </CardContent>
              <CardFooter>
                <a 
                  href="https://deft-blancmange-70482c.netlify.app/" 
                  className="font-mono text-cyberpunk-green hover:underline flex items-center gap-1"
                >
                  <Link className="w-4 h-4" />
                  View Live Demo
                </a>
              </CardFooter>
            </Card>

            <Card className="bg-black/40 border border-white/20 text-white hover:border-cyberpunk-green transition-colors">
              <CardHeader>
                <CardTitle className="font-glitch text-cyberpunk-green flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Neocities Template Tool
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-white/80">
                  A 3-column template that can help you create retro-styled/Geocities/Neocities style websites.
                </p>
              </CardContent>
              <CardFooter>
                <a 
                  href="https://github.com/n1ghtw1re/Neocities_Template_Tool" 
                  className="font-mono text-cyberpunk-green hover:underline flex items-center gap-1"
                >
                  <Code className="w-4 h-4" />
                  View Project
                </a>
              </CardFooter>
            </Card>

            <Card className="bg-black/40 border border-white/20 text-white hover:border-cyberpunk-green transition-colors">
              <CardHeader>
                <CardTitle className="font-glitch text-cyberpunk-green flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  ShrinkRay
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-white/80">
                  Optimize images and convert them to the modern WebP format with a neon cyberpunk flair.
                </p>
              </CardContent>
              <CardFooter>
                <a 
                  href="https://github.com/n1ghtw1re/ShrinkRay" 
                  className="font-mono text-cyberpunk-green hover:underline flex items-center gap-1"
                >
                  <Code className="w-4 h-4" />
                  View Project
                </a>
              </CardFooter>
            </Card>

            <Card className="bg-black/40 border border-white/20 text-white hover:border-cyberpunk-green transition-colors">
              <CardHeader>
                <CardTitle className="font-glitch text-cyberpunk-green flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  System News
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-white/80">
                  A small, simple news display for your website or app.
                </p>
              </CardContent>
              <CardFooter>
                <a 
                  href="https://github.com/n1ghtw1re/n1ghtw1re-system-news/tree/main" 
                  className="font-mono text-cyberpunk-green hover:underline flex items-center gap-1"
                >
                  <Code className="w-4 h-4" />
                  View Project
                </a>
              </CardFooter>
            </Card>

            <Card className="bg-black/40 border border-white/20 text-white hover:border-cyberpunk-green transition-colors">
              <CardHeader>
                <CardTitle className="font-glitch text-cyberpunk-green flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  The Collective Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-white/80">
                  A self-contained blogroll/link list that works great in an iframe.
                </p>
              </CardContent>
              <CardFooter>
                <a 
                  href="https://github.com/n1ghtw1re/the-collective-links-tool" 
                  className="font-mono text-cyberpunk-green hover:underline flex items-center gap-1"
                >
                  <Code className="w-4 h-4" />
                  View Project
                </a>
              </CardFooter>
            </Card>
          </div>

          <section className="mb-12">
            <h2 className="font-glitch text-2xl text-white mb-6">IN DEVELOPMENT</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-black/40 border border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="font-glitch text-cyberpunk-green">The Collector</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-white/80">
                    A privacy-focused app that lets you organize your books, comics, films, TV shows, and more—without tracking, ads, or data collection. Your media, your rules.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="font-glitch text-cyberpunk-green">N1ght-Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-white/80">
                    A social media dashboard that features a centralized, visual platform for tracking social media follower counts, displaying growth metrics, and providing insights into audience distribution across various platforms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="font-glitch text-2xl text-white mb-6">CORE PRINCIPLES</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 border border-white/20 p-4">
                <Shield className="w-6 h-6 text-cyberpunk-green mt-1" />
                <p className="font-mono text-white/90">
                  <span className="text-cyberpunk-green font-bold">Anonymity is a right.</span>
                </p>
              </div>
              
              <div className="flex items-start gap-3 border border-white/20 p-4">
                <Shield className="w-6 h-6 text-cyberpunk-green mt-1" />
                <p className="font-mono text-white/90">
                  <span className="text-cyberpunk-green font-bold">Simplicity is resilience.</span>
                </p>
              </div>
              
              <div className="flex items-start gap-3 border border-white/20 p-4">
                <Shield className="w-6 h-6 text-cyberpunk-green mt-1" />
                <p className="font-mono text-white/90">
                  <span className="text-cyberpunk-green font-bold">If we can't inspect it, we don't trust it.</span>
                </p>
              </div>
              
              <div className="flex items-start gap-3 border border-white/20 p-4">
                <Shield className="w-6 h-6 text-cyberpunk-green mt-1" />
                <p className="font-mono text-white/90">
                  <span className="text-cyberpunk-green font-bold">You shouldn't need to sacrifice your soul to use the web.</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Tools;
