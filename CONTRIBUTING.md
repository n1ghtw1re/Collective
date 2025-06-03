
# Contributing to N1GHTW1RE

Welcome to the digital resistance! We're excited to have you contribute to the N1GHTW1RE collective's mission of digital liberation.

## 🌟 Getting Started

### Prerequisites

Before contributing, ensure you have:
- Node.js 18+ installed
- Git configured with your credentials
- A GitHub account
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/n1ghtw1re-site.git
   cd n1ghtw1re-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🎯 How to Contribute

### 1. Choose Your Mission

We welcome contributions in several areas:

#### 🐛 Bug Fixes
- Security vulnerabilities
- UI/UX improvements
- Performance optimizations
- Accessibility issues

#### ✨ New Features
- Privacy tools and utilities
- Digital resistance content
- Interactive cyberpunk elements
- Educational resources

#### 📝 Documentation
- Code comments and documentation
- User guides and tutorials
- Architecture documentation
- Security best practices

#### 🎨 Design & UX
- Cyberpunk aesthetic improvements
- Accessibility enhancements
- Mobile responsiveness
- Animation and effects

### 2. Development Workflow

#### Branch Naming Convention
```
feature/add-encrypted-chat
bugfix/fix-search-performance
docs/update-api-documentation
security/implement-csrf-protection
```

#### Commit Message Format
Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(blog): add encrypted comment system
fix(search): resolve performance issue with large datasets
docs(readme): update installation instructions
security(auth): implement rate limiting
```

### 3. Code Standards

#### TypeScript Guidelines
```typescript
// ✅ Good: Clear interfaces and types
interface BlogPostProps {
  title: string;
  content: string;
  tags?: string[];
  publishedAt: Date;
}

// ✅ Good: Descriptive function names
const sanitizeUserInput = (input: string): string => {
  return DOMPurify.sanitize(input);
};

// ❌ Avoid: Any types
const processData = (data: any) => { ... }

// ✅ Better: Specific types
const processData = (data: BlogPost[]) => { ... }
```

#### React Component Guidelines
```typescript
// ✅ Good: Functional components with clear props
interface CyberpunkButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

const CyberpunkButton: React.FC<CyberpunkButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`cyberpunk-btn cyberpunk-btn--${variant}`}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </button>
  );
};
```

#### CSS/Tailwind Guidelines
```tsx
// ✅ Good: Semantic class grouping
<div className="
  flex items-center justify-between
  p-4 m-2
  bg-black/80 border border-cyberpunk-green
  text-white font-mono
  hover:bg-cyberpunk-green/20 transition-colors
">

// ✅ Good: Custom cyberpunk classes
<h1 className="font-glitch text-4xl text-cyberpunk-green glitch-effect">

// ❌ Avoid: Inline styles (use Tailwind instead)
<div style={{ backgroundColor: '#00ff00' }}>
```

### 4. Security Guidelines

#### Input Validation
```typescript
// ✅ Always sanitize user input
import { sanitizeInput } from '../utils/inputSanitizer';

const handleUserInput = (input: string) => {
  const cleanInput = sanitizeInput(input);
  // Process clean input...
};
```

#### XSS Prevention
```typescript
// ✅ Use secure markdown rendering
import SecureMarkdownRenderer from '../utils/secureMarkdownRenderer';

const BlogContent = ({ content }: { content: string }) => (
  <SecureMarkdownRenderer content={content} />
);

// ❌ Never use dangerouslySetInnerHTML without sanitization
<div dangerouslySetInnerHTML={{ __html: userContent }} />
```

#### Authentication
```typescript
// ✅ Always validate authentication state
const AdminPanel = () => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) return <LoadingSpinner />;
  if (!isAuthenticated) return <Navigate to="/login" />;
  
  return <AdminDashboard />;
};
```

### 5. Testing Requirements

#### Unit Tests
```typescript
// Example test file: components/__tests__/CyberpunkButton.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import CyberpunkButton from '../CyberpunkButton';

describe('CyberpunkButton', () => {
  it('renders children correctly', () => {
    render(<CyberpunkButton onClick={() => {}}>Test Button</CyberpunkButton>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<CyberpunkButton onClick={handleClick}>Click Me</CyberpunkButton>);
    
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

#### Integration Tests
- Test component interactions
- Verify API integrations
- Check user workflows

### 6. Accessibility Standards

#### ARIA Labels and Semantic HTML
```tsx
// ✅ Good: Proper ARIA labels and semantic HTML
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/about">About</a></li>
    <li><a href="/blog">Dispatches</a></li>
  </ul>
</nav>

<button
  aria-label="Toggle mobile menu"
  aria-expanded={isMenuOpen}
  onClick={toggleMenu}
>
  <MenuIcon />
</button>
```

#### Keyboard Navigation
```tsx
// ✅ Ensure keyboard accessibility
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    onClick();
  }
};

<div
  role="button"
  tabIndex={0}
  onKeyDown={handleKeyDown}
  onClick={onClick}
>
  Interactive Element
</div>
```

### 7. Performance Guidelines

#### Component Optimization
```typescript
// ✅ Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }: { data: ComplexData }) => {
  return <div>{/* Expensive rendering logic */}</div>;
});

// ✅ Use useMemo for expensive calculations
const processedData = useMemo(() => {
  return expensiveDataProcessing(rawData);
}, [rawData]);

// ✅ Use useCallback for stable function references
const handleClick = useCallback(() => {
  // Handle click logic
}, [dependency]);
```

#### Bundle Size Optimization
```typescript
// ✅ Dynamic imports for code splitting
const AdminPanel = lazy(() => import('./AdminPanel'));

// ✅ Import only what you need
import { debounce } from 'lodash/debounce';

// ❌ Avoid importing entire libraries
import * as _ from 'lodash';
```

### 8. Pull Request Process

#### Before Submitting
- [ ] Code follows our style guidelines
- [ ] Tests pass (`npm test`)
- [ ] Linting passes (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Documentation is updated if needed
- [ ] Accessibility guidelines followed
- [ ] Security considerations addressed

#### PR Template
```markdown
## 🎯 Purpose
Brief description of what this PR accomplishes.

## 🔄 Changes
- Added feature X
- Fixed bug Y
- Updated documentation Z

## 🧪 Testing
- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed

## 📸 Screenshots (if applicable)
Visual changes should include before/after screenshots.

## 🔒 Security Considerations
Any security implications or mitigations.

## 📝 Additional Notes
Any additional context or considerations.
```

### 9. Review Process

#### Code Review Checklist
- **Functionality**: Does the code work as intended?
- **Security**: Are there any security vulnerabilities?
- **Performance**: Is the code optimized for performance?
- **Accessibility**: Does it meet accessibility standards?
- **Style**: Does it follow our coding standards?
- **Tests**: Are there adequate tests?
- **Documentation**: Is documentation updated?

#### Review Timeline
- Small PRs (< 50 lines): 1-2 days
- Medium PRs (50-200 lines): 2-4 days
- Large PRs (> 200 lines): 4-7 days

### 10. Community Guidelines

#### Code of Conduct
- **Be respectful** and inclusive in all interactions
- **Support digital liberty** and privacy rights
- **Share knowledge** freely and openly
- **Practice security-first** thinking
- **Embrace the cyberpunk aesthetic** and philosophy

#### Communication Channels
- **GitHub Issues**: Bug reports and feature requests
- **Pull Requests**: Code contributions and discussions
- **Email**: [n1ghtw1re@proton.me](mailto:n1ghtw1re@proton.me) for sensitive matters

### 11. Recognition

Contributors to N1GHTW1RE are recognized in several ways:
- GitHub contributor status
- Mention in release notes
- Optional credit in project documentation
- Invitation to the N1GHTW1RE collective (for significant contributions)

## 🚨 Security Reporting

If you discover a security vulnerability, please:
1. **DO NOT** open a public issue
2. Email [n1ghtw1re@proton.me](mailto:n1ghtw1re@proton.me) with details
3. Include steps to reproduce the vulnerability
4. Allow time for the issue to be addressed before public disclosure

## 📚 Resources

### Learning Resources
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Cyberpunk Inspiration
- William Gibson's Neuromancer
- The Matrix film series
- Cyberpunk 2077 game aesthetics
- Ghost in the Shell anime/manga
- Mr. Robot TV series

---

**Remember: Every line of code is an act of digital resistance. Code with purpose, code with passion, and code for freedom.**

*Welcome to the collective, digital warrior. The future is in our hands.*
