# Front-End Design Skill for Oxford EMBA Calendar Overlay

You are a front-end design specialist for the Oxford EMBA Calendar Overlay application. Follow these modern guidelines when designing and implementing UI components.

## Design System

### Color Palette
```css
:root {
  /* Primary - Oxford Blue */
  --primary: #002147;
  --primary-light: #1a3a5c;
  --primary-dark: #001229;

  /* Accent - Teal */
  --accent: #3788d8;
  --accent-light: #5ba0e8;
  --accent-dark: #2d6cb8;

  /* Semantic Colors */
  --success: #28a745;
  --warning: #fd7e14;
  --danger: #dc3545;
  --info: #17a2b8;

  /* Neutrals */
  --background: #f5f5f5;
  --surface: #ffffff;
  --border: rgba(0, 0, 0, 0.1);
  --text-primary: #333333;
  --text-secondary: #666666;
  --text-muted: #999999;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.2);
}
```

### Typography
```css
/* Font Stack */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */

/* Font Weights */
font-weight: 400;  /* Normal */
font-weight: 500;  /* Medium */
font-weight: 600;  /* Semibold */
font-weight: 700;  /* Bold */
```

### Spacing & Layout
```css
/* Spacing Scale */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */

/* Border Radius */
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;
```

## Modern CSS Techniques

### Glass Morphism Effect
```css
.glass {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### Subtle Gradients
```css
.gradient-subtle {
  background: linear-gradient(135deg, var(--surface) 0%, #f8f9fa 100%);
}

.gradient-primary {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
}
```

### Modern Shadows
```css
.card {
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: var(--shadow-md);
}
```

## Component Patterns

### Button Styles
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--accent);
  color: white;
}

.btn-primary:hover {
  background: var(--accent-dark);
}

.btn-primary.active {
  background: var(--primary);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: #e9ecef;
  color: #495057;
}

.btn-secondary:hover {
  background: #dee2e6;
}

.btn-secondary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Card Styles
```css
.card {
  background: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 1.25rem;
}

.card-interactive {
  cursor: pointer;
  transition: all 0.2s ease;
}

.card-interactive:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

### Input Styles
```css
.input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(55, 136, 216, 0.15);
}
```

### Badge/Chip Styles
```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-weight: 600;
  color: white;
}

.badge-primary { background: var(--accent); }
.badge-success { background: var(--success); }
.badge-warning { background: var(--warning); }
.badge-danger { background: var(--danger); }
```

## Animation Patterns

### Micro-interactions
```css
/* Smooth transitions */
.transition-all {
  transition: all 0.2s ease;
}

/* Hover lift effect */
.hover-lift:hover {
  transform: translateY(-2px);
}

/* Scale effect */
.hover-scale:hover {
  transform: scale(1.02);
}

.hover-scale:active {
  transform: scale(0.98);
}
```

### Loading Animation
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 1.5s infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
```

### Fade In Animation
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease forwards;
}

/* Staggered animation for lists */
.stagger-item {
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

.stagger-item:nth-child(1) { animation-delay: 0ms; }
.stagger-item:nth-child(2) { animation-delay: 50ms; }
.stagger-item:nth-child(3) { animation-delay: 100ms; }
/* etc... */
```

## Modal/Popup Patterns

### Overlay
```css
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup {
  position: relative;
  background: var(--surface);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  max-width: 450px;
  width: 90%;
  max-height: 90vh;
  overflow: auto;
}

.popup-header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.popup-body {
  padding: 1.5rem;
}

.popup-footer {
  padding: 1rem 1.5rem;
  background: #f8f9fa;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}
```

### Close Button
```css
.popup-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-muted);
  transition: color 0.2s;
}

.popup-close:hover {
  color: var(--text-primary);
}
```

## Status Indicators

### Dot Indicator
```css
.status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
}

.status-dot.active {
  background: var(--success);
}

.status-dot.warning {
  background: var(--warning);
  animation: pulse 1.5s infinite;
}

.status-dot.error {
  background: var(--danger);
}
```

## Responsive Design

### Breakpoints
```css
/* Mobile first approach */
/* Base styles for mobile */

/* Small tablets (640px+) */
@media (min-width: 640px) { }

/* Tablets (768px+) */
@media (min-width: 768px) { }

/* Laptops (1024px+) */
@media (min-width: 1024px) { }

/* Desktops (1280px+) */
@media (min-width: 1280px) { }
```

### Responsive Utilities
```css
/* Stack on mobile, row on larger screens */
.flex-responsive {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 640px) {
  .flex-responsive {
    flex-direction: row;
    align-items: center;
  }
}

/* Hide on mobile */
.hide-mobile {
  display: none;
}

@media (min-width: 768px) {
  .hide-mobile {
    display: block;
  }
}

/* Show only on mobile */
@media (min-width: 768px) {
  .show-mobile-only {
    display: none;
  }
}
```

## Accessibility

### Focus States
```css
/* Visible focus for keyboard navigation */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

/* Remove outline for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Empty & Loading States

### Empty State
```css
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  color: var(--text-secondary);
}

.empty-state-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state-title {
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.empty-state-description {
  font-size: var(--text-sm);
  color: var(--text-muted);
}
```

### Loading State
```css
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.loading-spinner {
  width: 2rem;
  height: 2rem;
  border: 3px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-md);
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

## Best Practices

1. **Use CSS Custom Properties** - Define colors and spacing as variables for consistency
2. **Mobile First** - Write base styles for mobile, enhance for larger screens
3. **Semantic HTML** - Use proper elements (button, nav, header, etc.)
4. **Transitions over Animations** - Use CSS transitions for interactive states
5. **Consistent Spacing** - Use the spacing scale for margins and padding
6. **Touch Targets** - Minimum 44px height for clickable elements on mobile
7. **Color Contrast** - Ensure text meets WCAG AA standards (4.5:1 for body text)
8. **Progressive Enhancement** - Core functionality works without JS/animations
