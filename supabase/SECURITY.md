# Supabase Security Configuration

## RLS (Row Level Security) Setup

Run the migration to enable RLS and set up proper security policies:

```bash
supabase db reset
# or
supabase migration up
```

## Environment Variables

Ensure these are set in your Supabase project:

### Production Environment
- `SUPABASE_SERVICE_ROLE_KEY` - Your service role key (keep secret!)
- `SUPABASE_URL` - Your Supabase project URL

### Local Development
Add to `.env.local`:
```
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
SUPABASE_URL=http://localhost:54321
```

## Security Features Implemented

### 1. Row Level Security (RLS)
✅ **admin_users table:**
- Only service role can read (for authentication)
- No public access whatsoever

✅ **blog_posts table:**
- Public can only read published posts
- Only service role can write/update/delete (via Edge Functions)

### 2. Edge Function Security
✅ **CORS Restrictions:**
- Only allows requests from https://n1ghtw1re.com
- Proper CORS headers with limited methods

✅ **Input Validation:**
- Username/password length limits
- Content length limits for blog posts
- SQL injection prevention through parameterized queries

✅ **Rate Limiting & Security:**
- Timing attack prevention (delays for failed attempts)
- IP logging for security monitoring
- Secure password verification using pgcrypto
- Session token authentication for admin functions

✅ **Error Handling:**
- No sensitive data in error messages
- Generic error responses to prevent information leakage

### 3. Database Functions
✅ **Password Verification:**
- Secure server-side password hashing verification
- Uses pgcrypto extension for secure password handling
- Function restricted to service role only

## API Security

### Authentication Flow
1. Admin logs in via `/admin-auth` with username/password
2. Function verifies credentials using secure password hashing
3. Returns session token for subsequent requests
4. All admin operations require valid session token

### Blog Management
- All blog operations go through Edge Functions (not direct database access)
- Session token required for all write operations
- Input validation and sanitization on all inputs

## Security Best Practices Applied

1. **Principle of Least Privilege** - Users only get minimal required access
2. **Defense in Depth** - Multiple layers of security (RLS + Edge Functions + Input validation)
3. **Secure by Default** - All access denied unless explicitly allowed
4. **Input Sanitization** - All user inputs validated and sanitized
5. **Error Handling** - No sensitive information leaked in errors
6. **Timing Attack Prevention** - Consistent response times for authentication

## Monitoring & Logging

- Failed authentication attempts are logged with IP addresses
- Successful logins are logged (without sensitive data)
- All Edge Function errors are logged server-side

## Next Steps

1. Deploy the migration: `supabase db push`
2. Deploy Edge Functions: `supabase functions deploy`
3. Test authentication flow
4. Monitor logs for any security issues