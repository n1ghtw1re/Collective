
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { supabase } from '../../integrations/supabase/client';

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError('Authentication failed. Please check your credentials.');
        return;
      }

      if (data.user) {
        onLogin();
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <h1 className="font-glitch text-3xl text-cyberpunk-green mb-8 text-center">
          ADMIN ACCESS
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="font-mono text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="font-mono bg-black/30 border-white/20 focus:border-cyberpunk-green text-white"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="password" className="font-mono text-white">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="font-mono bg-black/30 border-white/20 focus:border-cyberpunk-green text-white"
              required
            />
          </div>
          
          {error && (
            <div className="text-cyberpunk-red font-mono text-sm">
              {error}
            </div>
          )}
          
          <Button
            type="submit"
            disabled={loading}
            className="w-full font-mono bg-cyberpunk-green text-black hover:bg-cyberpunk-green/80"
          >
            {loading ? 'AUTHENTICATING...' : 'LOGIN'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
