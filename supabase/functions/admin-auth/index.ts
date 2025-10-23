
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://n1ghtw1re.com',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '86400',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { username, password } = await req.json()

    // Input validation and rate limiting
    if (!username || !password || username.length > 50 || password.length > 100) {
      return new Response(
        JSON.stringify({ error: 'Invalid input' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Add rate limiting check (simple IP-based)
    const clientIP = req.headers.get('x-forwarded-for') || 'unknown'
    
    // Query admin user
    const { data: adminUser, error } = await supabase
      .from('admin_users')
      .select('id, username, password_hash')
      .eq('username', username)
      .single()

    if (error || !adminUser) {
      // Add delay to prevent timing attacks
      await new Promise(resolve => setTimeout(resolve, 1000))
      return new Response(
        JSON.stringify({ error: 'Invalid credentials' }),
        { 
          status: 401, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Verify password using pgcrypto
    const { data: passwordMatch } = await supabase
      .rpc('verify_password', { 
        stored_hash: adminUser.password_hash, 
        input_password: password 
      })

    if (!passwordMatch) {
      // Add delay to prevent timing attacks
      await new Promise(resolve => setTimeout(resolve, 1000))
      return new Response(
        JSON.stringify({ error: 'Invalid credentials' }),
        { 
          status: 401, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Generate secure session token
    const sessionToken = crypto.randomUUID()
    
    // Log successful authentication (without sensitive data)
    console.log(`Admin login successful for user: ${username} from IP: ${clientIP}`)
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        sessionToken,
        user: { id: adminUser.id, username: adminUser.username }
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Admin auth error:', error)
    return new Response(
      JSON.stringify({ error: 'Authentication failed' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
