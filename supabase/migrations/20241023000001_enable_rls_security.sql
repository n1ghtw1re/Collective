-- Enable RLS on all tables
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Admin users table policies
-- Only allow service role to read admin users (for authentication)
CREATE POLICY "Service role can read admin users" ON admin_users
    FOR SELECT USING (auth.role() = 'service_role');

-- No public access to admin_users table
CREATE POLICY "No public access to admin users" ON admin_users
    FOR ALL USING (false);

-- Blog posts policies
-- Anyone can read published blog posts
CREATE POLICY "Public can read published blog posts" ON blog_posts
    FOR SELECT USING (published = true);

-- Only service role can manage blog posts (via Edge Functions)
CREATE POLICY "Service role can manage blog posts" ON blog_posts
    FOR ALL USING (auth.role() = 'service_role');

-- No direct public write access to blog_posts
CREATE POLICY "No public write to blog posts" ON blog_posts
    FOR INSERT WITH CHECK (false);

CREATE POLICY "No public update to blog posts" ON blog_posts
    FOR UPDATE USING (false);

CREATE POLICY "No public delete to blog posts" ON blog_posts
    FOR DELETE USING (false);

-- Create password verification function
CREATE OR REPLACE FUNCTION verify_password(stored_hash text, input_password text)
RETURNS boolean
SECURITY DEFINER
SET search_path = public, pg_temp
LANGUAGE plpgsql
AS $$
BEGIN
    -- Use crypt function to verify password against stored hash
    RETURN stored_hash = crypt(input_password, stored_hash);
END;
$$;

-- Grant execute permission to service role only
GRANT EXECUTE ON FUNCTION verify_password TO service_role;
REVOKE EXECUTE ON FUNCTION verify_password FROM anon, authenticated;